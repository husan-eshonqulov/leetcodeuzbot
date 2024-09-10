import path from "node:path";
import sqlite from "sqlite3";

const dbPath = path.join(import.meta.dirname, "..", "..", "db", "leetcode.db");

sqlite.verbose();

export const connectDb = () => {
  const db = new sqlite.Database(dbPath, (err) => {
    if (err) {
      console.error(err);
    }
  });
  return db;
};
