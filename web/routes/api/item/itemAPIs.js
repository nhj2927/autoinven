const { Op, literal } = require('sequelize');

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
const getItemInfo = async (id, db) => {
  const item = await db.Item.findByPk(id);
  return item;
};

const registerItem = async (req, db) => {
  const newWarehouse = getItemInfo(req.body); // 아이템 가져오기
  const itFiles = req.files; // 이미지 파일들 가져오기
  // 아이템 등록
  const item = await db.Item.create(newWarehouse);
  // 이미지 등록
  itFiles.forEach(async (file) => {
    const { path } = file;
    await db.ItemImage.create({
      url: path,
      item_id: warehouse.warehouse_id,
    });
  });

  return item;
};

const editItem = async (req, db) => {
  const { item_id } = req.params;
  const newInfo = getItemInfo(req.body); // 아이템 가져오기
  const itFiles = req.files;

  // 기존 아이템 사진 모두 삭제
  const result = await db.ItemImage.destory({ where: { item_id } });
  // 아이템 정보 업데이트
  const result2 = await db.Item.update(newInfo, {
    where: { item_id },
  });
  // 수정된 창고 사진 재등록
  itFiles.forEach(async (file) => {
    const { path } = req.file;
    await db.ItemImage.create({
      url: path,
      item_id,
    });
  });
  if (result2[0]) {
    return result[0];
  } else {
    const err = new Error('Item Not found');
    err.statusCode = 404;
    throw err;
  }
};

module.exports = {
  getAllItems,
  getItemInfo,
  registerItem,
  editItem,
};
