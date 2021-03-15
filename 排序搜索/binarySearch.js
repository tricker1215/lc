Array.prototype.binarySearch = function (item) {
  let low = 0;
  let high = 0;
  while (low <= high) {
    const mid = Math.floor((left + right) / 2);
    const element = this[mid];
    if (element < item) {
      low = mid + 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}