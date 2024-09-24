import axios from "axios";
import { secondsToDate } from "./date.js";

export const getLastSubmissionDate = async (username: string) => {
  const response = await axios.get(
    `https://leetcode-stats-api.herokuapp.com/${username}`
  );
  const data = response.data;
  const submissions = Object.keys(data.submissionCalendar);
  submissions.sort((a, b) => +b - +a);
  const lastSubmissionInSeconds = +submissions[0];
  const lastSubmissionInDate = secondsToDate(lastSubmissionInSeconds);

  return lastSubmissionInDate;
};
