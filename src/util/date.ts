export const secondsToDate = (sec: number) => new Date(sec * 1000);

export const dateToSeconds = (date: Date) => Math.floor(Number(date) / 1000);

export const allowedTimeInterval = 24 * 60 * 60;

export const isSubmitted = (startTime: number, endTime: number) => {
  return endTime - startTime < allowedTimeInterval;
};
