"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const appController_1 = require("../controllers/appController");
router.get("/", appController_1.getApps);
router.post("/apps", appController_1.postApps);
router.get("/delete/:id", appController_1.deleteApps);
router.get("/access/:id", appController_1.updateApps);
exports.default = router;
