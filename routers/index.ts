import express from "express";
const router = express.Router();
import {
  getApps,
  postApps,
  deleteApps,
  updateApps,
} from "../controllers/appController";

router.get("/", getApps);

router.post("/apps", postApps);

router.get("/delete/:id", deleteApps);

router.get("/access/:id", updateApps);

export default router;
