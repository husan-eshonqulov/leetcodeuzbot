import { Bot, Api, RawApi } from "grammy";
import MyContext from "./context.d.ts";

type MyBot = Bot<MyContext, Api<RawApi>>;

export default MyBot;
