module.exports = async (db, ip) => {
  const crypto = require('crypto');
  const axios = require('axios');
  const { Op } = require('sequelize');

  const phone_list = [];

  // 라즈베리파이 IP 확인
  if (!ip) {
    const error = new Error('No IP');
    error.statusCode = 400;
    throw error;
  }

  // 유저 전화번호 추가
  const iot_device = await db.IotDevice.findAll({
    attributes: [],
    where: {
      url: ip,
    },
    include: {
      model: db.Warehouse,
      required: true,
      attributes: ['name_ko', 'name_en'],
      include: {
        model: db.LeaseContract,
        where: {
          end_date: {
            [Op.gt]: Date.now(),
          },
        },
        required: true,
        include: {
          model: db.User,
          required: true,
          attributes: ['phone'],
        },
      },
    },
  });

  const warehouse_name =
    `${iot_device[0].Warehouse.name_ko}` +
    `(${iot_device[0].Warehouse.name_en})`;

  iot_device[0].Warehouse.LeaseContracts.forEach((contract) => {
    phone_list.push({
      to: contract.User.phone.replace(/-/g, ''),
    });
  });

  // 관리자 전화번호 추가
  const admins = await db.Admin.findAll({
    attributes: ['phone'],
  });
  admins.forEach((admin) => {
    phone_list.push({
      to: admin.phone.replace(/-/g, ''),
    });
  });

  console.log(phone_list);

  // API 설정
  const ncp_accessKey = process.env.ACCESS_KEY;
  const ncp_secretKey = process.env.SECRET_KEY;
  const ncp_serviceID = process.env.SERVICE_ID;
  const phone_number = process.env.PHONE_NUMBER;

  const space = ' ';
  const new_line = '\n';
  const method = 'POST';

  const req_url = `https://sens.apigw.ntruss.com/sms/v2/services/${ncp_serviceID}/messages`;
  const sms_url = `/sms/v2/services/${ncp_serviceID}/messages`;

  const timestamp = Date.now().toString();
  const message = [];
  const hmac = crypto.createHmac('sha256', ncp_secretKey);

  message.push(method);
  message.push(space);
  message.push(sms_url);
  message.push(new_line);
  message.push(timestamp);
  message.push(new_line);
  message.push(ncp_accessKey);
  const signature = hmac.update(message.join('')).digest('base64');

  // 문자 알림 API 전송
  try {
    await axios({
      method,
      url: req_url,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'x-ncp-iam-access-key': ncp_accessKey,
        'x-ncp-apigw-timestamp': timestamp,
        'x-ncp-apigw-signature-v2': signature.toString(),
      },
      data: JSON.stringify({
        type: 'LMS',
        contentType: 'COMM',
        countryCode: '82',
        from: phone_number,
        content:
          `[Autoinven]\n\n창고 ${warehouse_name}에서 현재 긴급상황이 발생했습니다.` +
          `사이트 "autoinven.com"에 방문하여 확인 후 이상상황이 지속된다면,` +
          `필히 방문 점검 부탁드립니다.\n\n감사합니다.\n-autoinven`,
        messages: phone_list,
      }),
    });
  } catch (err) {
    throw new Error('Message API Failed');
  }
};
