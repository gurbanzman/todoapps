"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const poolConfig = {
    user: "postgres",
    host: "localhost",
    database: "todoapps",
    password: `${process.env.PASSWORD}`,
    port: Number(process.env.PGPORT),
};
exports.pool = new pg_1.Pool(poolConfig);
