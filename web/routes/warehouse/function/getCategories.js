module.exports = async (db) => {
  const categories_result = await db.Category.findAll();

  return categories_result.map((category) => {
    return {
      category_id: category.category_id,
      name: category.name_ko,
    };
  });
};
