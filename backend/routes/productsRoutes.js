const express = require("express");
const router = express.Router();
const {
  getProducts,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsControllers");

router.route("/").get(getProducts).post(postProduct);
router.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;
