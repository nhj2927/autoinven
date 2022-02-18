const { Op, literal, fn, col } = require('sequelize');
const crypto = require('crypto');
const qrcode = require('qrcode');

const getItemInfo = ({ name, l_contract_id, user_email, note }) => ({
  name,
  l_contract_id,
  user_email,
  note,
});

const getAllItems = async (db) => {
  const items = await db.Item.findAll();
  return items;
};
const getItem = async (item_id, db) => {
  const item = await db.Item.findOne({
    attributes: [
      fn('date_format', col('Item.createdAt'), '%Y-%m-%d %H:%i:%S'),
      'Item.createdAt',
    ],
    where: {
      [Op.or]: [
        {
          item_id,
        },
        {
          qrcode: item_id,
        },
      ],
    },
    include: [
      {
        model: db.ItemTimestamp,
        attributes: ['i_state_id'],
      },
      {
        model: db.ItemImage,
        attributes: ['url'],
      },
      { model: db.User, attributes: ['name'] },
    ],
  });
  return item;
};

const registerItem = async (req, db) => {
  const newItem = getItemInfo(req.body); // 아이템 가져오기
  const itFiles = req.files; // 이미지 파일들 가져오기

  // 아이템 등록
  const item = await db.Item.create(newItem);
  if (item) {
    // 이미지 등록
    for (index in itFiles) {
      const { path } = itFiles[index];
      await db.ItemImage.create({
        url: `/${path}`,
        item_id: item.item_id,
      });
    }
    // 아이템 등록 시간 기록
    result = await db.ItemTimestamp.create({
      item_id: item.item_id,
      i_state_id: 1,
      createdAt: item.createdAt,
    });
    if (!result) {
      const err = new Error('Item TimeStamp error');
      err.statusCode = 500;
      throw err;
    }
    // QR 코드 문자 생성
    const qr = crypto
      .createHash('sha512')
      .update(`${item.l_contract_id}${item.user_email}${item.item_id}`)
      .digest('base64');
    const updatedItem = await item.update(
      { qrcode: qr },
      { where: { item_id: item.item_id } }
    );
    if (!updatedItem) {
      const err = new Error('Item QRcode Generate Failed');
      err.statusCode = 500;
      throw err;
    }
  } else {
    const err = new Error('Item Register Error');
    err.statusCode = 404;
    throw err;
  }
  return item;
};

const editItem = async (req, db) => {
  const { item_id } = req.params;
  const newInfo = getItemInfo(req.body); // 아이템 가져오기
  const itFiles = req.files;

  // 기존 아이템 사진 모두 삭제
  const result = await db.ItemImage.destroy({ where: { item_id } });
  // 아이템 정보 업데이트
  const result2 = await db.Item.update(newInfo, {
    where: { item_id },
  });
  // 수정된 창고 사진 재등록
  for (index in itFiles) {
    const { path } = itFiles[index];
    await db.ItemImage.create({
      url: `/${path}`,
      item_id: item.item_id,
    });
  }
  if (result2[0]) {
    return result[0];
  } else {
    const err = new Error('Item Not found');
    err.statusCode = 404;
    throw err;
  }
};

// 창고 입/출고 처리(상태변경)
const itemStateChange = async (item_id, state, db) => {
  let result = await db.Item.update(
    {
      i_state_id: state,
    },
    { where: { item_id } }
  );
  if (result[0] == 0) {
    const err = new Error('Item Not found');
    err.statusCode = 404;
    throw err;
  }
  result = await db.ItemTimestamp.create({ item_id, i_state_id: state });
  if (result) {
    return result;
  } else {
    const err = new Error('Item In logging failed');
    err.statusCode = 500;
    throw err;
  }
};

const sendQR = async (item_id, db) => {
  const item = await db.Item.findOne({ where: { item_id } });
  const QRcode = await qrcode.toDataURL(item.qrcode);
  return QRcode;
};

module.exports = {
  getAllItems,
  getItem,
  registerItem,
  editItem,
  itemStateChange,
  sendQR,
};
