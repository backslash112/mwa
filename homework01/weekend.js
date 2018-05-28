use 'strict';

// question 2
// solution 1:
export function isWeekend1() {
  const todayDate = new Date();
  const day = todayDate.getDay();
  const isWeekend1 = day => day === 0 || day === 6
  const isWeekday1 = day => day >= 1 && day <= 5
  let week = [day];
  const weekday = week.filter(isWeekday1).map(day => "weekday");
  const weekend = week.filter(isWeekend1).map(day => "weekdend");
  // console.log(weekday.concat(weekend)[0]);
  return weekday.concat(weekend)[0];
}

// solution 2:
function isWeekend2() {
  const todayDate = new Date();
  const day = todayDate.getDay();
  return isWeekendByDay(day);
}
function isWeekendByDay(day) {
  const map = ["weekend", "weekday", "weekday", "weekday", "weekday", "weekday", "weekend"];
  return map[day];
}
