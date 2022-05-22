function calculateDaysBetweenDates(begin, end) {
  var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(begin);
  var secondDate = new Date(end);
  var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
  return diffDays;
}

console.log(calculateDaysBetweenDates('01.01.2015', '14.02.2016'));