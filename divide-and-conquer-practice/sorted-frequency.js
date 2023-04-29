function sortedFrequency(array, number) {
  let firstIndex = findFirstIndex(array, number);
  if (firstIndex === -1) {
    return -1;
  }
  let lastIndex = findLastIndex(array, number);
  return lastIndex - firstIndex + 1;
}

function findFirstIndex(array, number, min = 0, max = arr.length - 1) {
  if (max >= min) {
    let middle = Math.floor((low + high) / 2);
    if (
      middle === 0 ||
      (number > array[middle - 1] && array[middle] === number)
    )
      return middle;
  } else if (number > array[middle]) {
    return findFirstIndex(array, number, middle + 1, max);
  } else {
    return findFirstIndex(array, number, min, max - 1);
  }
  return -1;
}
function findLastIndex(array, number, min = 0, max = arr.length - 1) {
  if (max >= min) {
    let middle = Math.floor((low + high) / 2);
    if (
      middle === array.length - 1 ||
      (number < array[middle + 1] && array[middle] === number)
    )
      return middle;
  } else if (number < array[middle]) {
    return findLastIndex(array, number, min, mid - 1);
  } else {
    return findFirstIndex(array, number, mid + 1, high);
  }
  return -1;
}
