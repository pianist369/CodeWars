const oneYear = 60 * 60 * 24 * 365;
const oneDay = 60 * 60 * 24;
const oneHour = 60 * 60;
const oneMinute = 60;

function formatDuration(seconds) {
  let total = "";
  array = [
    getFullYears(seconds),
    getFullDays(seconds),
    getFullHours(seconds),
    getFullMinutes(seconds),
    getFullSeconds(seconds),
  ];

  if (!seconds) return `now`;
  else
    return `${makePretier("year")}${makePretier("day")}${makePretier(
      "hour"
    )}${makePretier("minute")}${makePretier("second")}`;
}

function makePretier(elem) {
  let total = "";
  let time = array.shift();
  if (time == 1) total += `1 ${elem}`;
  if (time > 1) total += `${time} ${elem}s`;
  if (array.filter((elem) => elem != 0).length >= 2 && time > 0) total += ", ";
  else if (array.filter((elem) => elem != 0).length == 1 && time > 0)
    total += " and ";
  return total;
}

function getFullYears(seconds) {
  return Math.floor(seconds / oneYear);
}

function getFullDays(seconds) {
  return Math.floor((seconds - getFullYears(seconds) * oneYear) / oneDay);
}

function getFullHours(seconds) {
  return Math.floor(
    (seconds -
      getFullYears(seconds) * oneYear -
      getFullDays(seconds) * oneDay) /
      oneHour
  );
}

function getFullMinutes(seconds) {
  return Math.floor(
    (seconds -
      getFullYears(seconds) * oneYear -
      getFullDays(seconds) * oneDay -
      getFullHours(seconds) * oneHour) /
      oneMinute
  );
}

function getFullSeconds(seconds) {
  return Math.floor(
    seconds -
      getFullYears(seconds) * oneYear -
      getFullDays(seconds) * oneDay -
      getFullHours(seconds) * oneHour -
      getFullMinutes(seconds) * oneMinute
  );
}
