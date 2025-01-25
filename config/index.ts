import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

type TypePool = {
  user: string;
  host: string;
  database: string;
  password: string;
  port: number | any;
};

const poolConfig: TypePool = {
  user: "postgres",
  host: "localhost",
  database: "todoapps",
  password: `${process.env.PASSWORD}`,
  port: Number(process.env.PGPORT),
};

export const pool = new Pool(poolConfig);
