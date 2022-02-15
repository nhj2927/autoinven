const { fn, col, Op } = require('sequelize');

const getConditions = (keyword) => {
  const regex = / /gi;
  let keywords;
  if (keyword) {
    keywords = [keyword.replace(regex, ''), keyword.trim()];
  } else {
    return [];
  }
  let conditions = [];
  for (x in keywords) {
    conditions.push({
      name_ko: {
        [Op.like]: `%${keywords[x]}%`,
      },
    });
    conditions.push({
      name_en: {
        [Op.like]: `%${keywords[x]}%`,
      },
    });
  }
  return conditions;
};

// 자신의 계약목록
module.exports = async (db, user_email, locale, page_num, keyword) => {
  const getLocaleLanguageValue = require('$base/utils/getLocaleLanguageValue');

  let offset = 0;
  const limit = 10;
  if (!page_num) {
    page_num = 1;
  } else if (page_num > 1) {
    offset = limit * (page_num - 1);
  }

  const conditions = getConditions(keyword);
  let where_clause;
  if (!conditions.length) {
    where_clause = {};
  } else {
    where_clause = { [Op.or]: conditions };
  }

  const contracts_result = await db.LeaseContract.findAll({
    attributes: [
      'l_contract_id',
      'c_state_id',
      [
        fn('date_format', col('LeaseContract.start_date'), '%Y-%m-%d'),
        'start_date',
      ],
      [
        fn('date_format', col('LeaseContract.end_date'), '%Y-%m-%d'),
        'end_date',
      ],
      'lease_area',
      'amount',
      [
        fn('date_format', col('LeaseContract.createdAt'), '%Y-%m-%d'),
        'createdAt',
      ],
    ],
    where: { user_email },
    include: {
      model: db.Warehouse,
      required: true,
      attributes: ['name_ko', 'name_en'],
      where: where_clause,
    },
    order: [['createdAt', 'DESC']],
    offset,
    limit,
  });

  const count = await db.LeaseContract.count({
    where: { user_email },
  });

  return {
    total_page: !count ? 1 : Math.floor((count - 1) / limit) + 1,
    contracts: contracts_result.map((contract) => {
      return {
        id: contract.l_contract_id,
        state: contract.c_state_id,
        name: getLocaleLanguageValue(
          locale,
          contract.Warehouse.name_ko,
          contract.Warehouse.name_en
        ),
        period: `${contract.start_date} ~ ${contract.end_date}`,
        area: contract.lease_area,
        price: contract.amount,
        created_date: contract.createdAt,
      };
    }),
  };
};
