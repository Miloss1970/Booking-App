import { differenceInMonths, differenceInYears, isFuture } from "date-fns";

export function transformStatus(status) {
  if (!status) return status;

  return status.split(" ").join("-").toLowerCase();
}

export const monthsOrYears = (booking) => {
  const startDate = new Date(booking.startDate);
  const now = new Date();
  const monthsDifference = differenceInMonths(now, startDate);
  const yearsDifference = differenceInYears(now, startDate);

  if (isFuture(startDate)) {
    const futureMonthsDifference = differenceInMonths(startDate, now);
    const futureYearsDifference = differenceInYears(startDate, now);
    if (futureYearsDifference === 1) return `in 1 year`;
    if (futureYearsDifference > 1) return `in ${futureYearsDifference} years`;
    if (futureMonthsDifference === 1) return `in 1 month`;
    return `in ${futureMonthsDifference} months`;
  }

  if (yearsDifference === 1) return `1 year ago`;
  if (yearsDifference > 1) return `${yearsDifference} years ago`;
  if (monthsDifference === 1) return `1 month ago`;
  return `${monthsDifference} months ago`;
};

const statusClasses = {
  "checked-in": "text-green-600 bg-green-300",
  unconfirmed: "text-blue-600 bg-blue-300",
  "checked-out": "text-gray-600 bg-gray-300",
};

export const getStatusClasses = (status) => {
  return statusClasses[status];
};
