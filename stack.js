let arr = [{
  number: 1,
  text: 'abc'
},{
  number: 2,
  text: 'bcd'
}];

let arr1 = [{
  number:3,
  text: 'cde'
}]
arr.push(arr1);
console.log(arr);
arr.pop();

function getTime (time) {
  const date = new Date(time);
  const Y = date.getFullYear() + '/';
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
  const D = date.getDate() + ' ';
  return (Y + M + D);
}

console.log(getTime(1617123600));