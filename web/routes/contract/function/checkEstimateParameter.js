const throwInsufficientParameterError = () => {
  const error = new Error('Insufficient parameter');
  error.statusCode = 400;

  throw error;
};

// 모든 파라미터가 있을때만 통과
const checkParameter = (
  warehouse_id,
  start_date,
  end_date,
  req_area,
  available_area,
  total_cost
) => {
  return (
    warehouse_id &&
    start_date &&
    end_date &&
    req_area &&
    available_area &&
    total_cost
  );
};

module.exports = (
  warehouse_id,
  start_date,
  end_date,
  req_area,
  available_area,
  total_cost
) => {
  if (
    !checkParameter(
      warehouse_id,
      start_date,
      end_date,
      req_area,
      available_area,
      total_cost
    )
  ) {
    throwInsufficientParameterError();
  }
};
