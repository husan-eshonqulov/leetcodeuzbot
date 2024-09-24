import axios from "axios";
import { secondsToDate } from "./date.js";

export const getLastSub = async (username: string) => {
  const res = await axios.get(
    `https://leetcode-stats-api.herokuapp.com/${username}`
  );
  const data = res.data;
  const subs = Object.keys(data.submissionCalendar);
  subs.sort((a, b) => +b - +a);
  const lastSubSec = +subs[0];
  const lastSubDate = secondsToDate(lastSubSec);

  return lastSubDate;
};
