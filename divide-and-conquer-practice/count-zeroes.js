function countZeroes(array) {
  let foundZero = findZero(array);
  if (foundZero === -1) return 0;
  return arr.length - foundZero;
}

function findZero(arr, min = 0, max = arr.length - 1) {
  if (max >= min) {
    let middle = min + Math.floor((max - min) / 2);
    if ((middle === 0 || arr[middle - 1] === 1) && array[middle] === 0) {
      return findZero(array, min, max - 1);
    }
  }
  return -1;
}
