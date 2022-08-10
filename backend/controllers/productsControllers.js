const getProducts = (req, res) => {
  res.status(200).json({ message: "All products" });
};

const postProduct = (req, res) => {
  res.status(200).json({ message: "Post products" });
};

const updateProduct = (req, res) => {
  res.status(200).json({ message: "Update products" });
};

const deleteProduct = (req, res) => {
  res.status(200).json({ message: "Delete products" });
};

module.exports = {
  getProducts,
  postProduct,
  updateProduct,
  deleteProduct,
};
