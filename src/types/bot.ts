import { Bot, Api, RawApi } from "grammy";
import MyContext from "./context.js";

type MyBot = Bot<MyContext, Api<RawApi>>;

export default MyBot;
