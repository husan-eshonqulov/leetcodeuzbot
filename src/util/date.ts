export const secondsToDate = (sec: number) => new Date(sec * 1000);

export const dateToSecs = (date: Date) => Math.floor(Number(date) / 1000);

export const oneDayInSecs = 24 * 60 * 60;
