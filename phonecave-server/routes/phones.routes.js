const router = require("express").Router();
const data = require("../resources/data.json");

router.get("/", (req, res, next) => {
  try {
    const phones = data.map((phone) => ({ name: phone.name, id: phone.id }));
    res.json(phones);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  try {
    const singlePhone = data.find((phone) => phone.id === Number(id));
    res.json(singlePhone);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
