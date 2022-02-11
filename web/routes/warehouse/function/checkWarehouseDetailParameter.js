const throwInsufficientParameterError = () => {
  const error = new Error('Insufficient parameter');
  error.statusCode = 400;

  throw error;
};

// 창고ID를 제외한 파라미터가 모두 있거나 없는 경우만 통과
const checkParameter = (
  warehouse_id,
  start_date,
  end_date,
  selected_area,
  available_area
) => {
  return (
    (warehouse_id &&
      !start_date &&
      !end_date &&
      !selected_area &&
      !available_area) ||
    (warehouse_id && start_date && end_date && selected_area && available_area)
  );
};

module.exports = (
  warehouse_id,
  start_date,
  end_date,
  selected_area,
  available_area
) => {
  if (
    !checkParameter(
      warehouse_id,
      start_date,
      end_date,
      selected_area,
      available_area
    )
  ) {
    throwInsufficientParameterError();
  }
};
