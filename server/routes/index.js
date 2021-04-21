import express from "express";
import sequelize from "../services/sequelize";
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

export default router;
