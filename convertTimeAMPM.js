// convert Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

let s = '02:05:45PM';

function timeConversion(s) {
  const arr = s.slice(0, 8).split(':');
  console.log(arr);
  arr[0] =
    s.indexOf('PM') > -1
      ? arr[0] == 12
        ? '12'
        : Number(arr[0]) + 12
      : arr[0] == 12
      ? '00'
      : arr[0];
  return arr.join(':');
}
console.log(timeConversion(s));
