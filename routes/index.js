const express = require("express");
const productRoute = require("../controller/product.controller");
const kategoriRoute = require("../controller/productKategori");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello Assignment 29" });
});

// Product
router.get("/product", productRoute.listProduct);
router.get("/product/:id", productRoute.detailProduct);
router.post("/product", productRoute.insertProduct);
router.put("/product/:id", productRoute.updateProduct);
router.delete("/product/:id", productRoute.deleteProduct);

// Kategori Product
router.get("/kategori", kategoriRoute.listKategori);
router.get("/kategori/:id", kategoriRoute.detailKategori);
router.post("/kategori", kategoriRoute.insertKategori);
router.put("/kategori/:id", kategoriRoute.updateKategori);
router.delete("/kategori/:id", kategoriRoute.deleteKategori);
module.exports = router;
