/**
 * checks if leap year
 * @param year : year value of the input date @type number
 * @returns true or false
 */
const isLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

/**
 * returns the start day Date object of the input date
 * @param dateValue : input date ,@type Date
 * @returns Date object
 */
const getStartDayOfMonth = (dateValue: Date) => {
  return new Date(dateValue.getFullYear(), dateValue.getMonth(), 1).getDay();
};

export const utils = {
  isLeapYear,
  getStartDayOfMonth,
};
