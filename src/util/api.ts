import axios from "axios";

export const getLastSubmission = async (username: string) => {
  const response = await axios.get(
    `https://leetcode-stats-api.herokuapp.com/${username}`
  );
  const data = response.data;
  const submissions = Object.keys(data.submissionCalendar);
  submissions.sort((a, b) => parseInt(b) - parseInt(a));
  const lastSubmission = parseInt(submissions[0]);

  return lastSubmission;
};
