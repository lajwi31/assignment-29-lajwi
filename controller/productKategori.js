const models = require("../models/index");

function insertKategori(req, res) {
  let data = req.body;
  models.Kategori.create(data);

  return res.send({ message: "Kategori has been Inserted", data: data });
}

async function listKategori(req, res) {
  const result = await models.Kategori.findAll();
  if (result.length < 1) {
    return res.status(204).send({ message: "Data is Empty" });
  }
  return res.send({ message: "Kategori is found", data: result });
}

async function detailKategori(req, res) {
  const result = await models.Kategori.findOne({ where: { id: req.params.id } });
  if (!result) {
    return res.status(204).send({ message: "Data is empty" });
  }
  return res.send({ message: "Kategori is found", data: result });
}

function updateKategori(req, res) {
  let data = req.body;
  models.Kategori.update(data, { where: { id: req.params.id } });
  return res.send({ message: "Kategori has been Updated", data: req.body });
}

function deleteKategori(req, res) {
  models.Kategori.destroy({ where: { id: req.params.id } });
  return res.send({ message: "Kategori has been Deleted" });
}

module.exports = {
  insertKategori,
  listKategori,
  detailKategori,
  updateKategori,
  deleteKategori,
};
