const express = require("express");

const router = express.Router();
const controller = require("../controllers/controller");

router.get("/getAllObjects", controller.getAllObjects);

router.get("/getOne", controller.getOneObject);

router.post("/new", controller.createNewObject);

router.put("/update", controller.updateObject);

router.delete("/delete", controller.deleteObject);

module.exports = router;
