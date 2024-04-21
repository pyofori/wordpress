import express from "express";
import {PagesController} from "../controllers/index.js";

const router = express.Router();

router.post("/create", PagesController.createPage);

export default router;
