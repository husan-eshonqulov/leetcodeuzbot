import { MiddlewareFn } from "grammy";
import sqlite from "sqlite3";
import MyBot from "../types/bot.js";
import MyContext from "../types/context.js";
import MyCommand from "../types/command.js";

// Register commands to bot
export const regComs = (bot: MyBot, coms: MyCommand[]) => {
  coms.forEach((com) => bot.command(com.name, com.func));
};

// Register conversations to bot
export const regCons = (bot: MyBot, cons: MiddlewareFn<MyContext>[]) => {
  cons.forEach((con) => bot.use(con));
};

export const createUserTable = (db: sqlite.Database) => {
  const query = `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      tg_id INTEGER NOT NULL UNIQUE, 
      is_bot BOOLEAN NOT NULL, 
      first_name TEXT NOT NULL, 
      last_name TEXT NOT NULL, 
      tg_username TEXT NOT NULL UNIQUE, 
      lc_username TEXT NOT NULL UNIQUE, 
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`;
  db.run(query);
};
