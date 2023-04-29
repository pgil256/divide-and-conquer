function findRotationCount(array, min = 0, max = array.length - 1) {
  if (max < min) return 0;
  if (max === min) return min;

  let middle = Math.floor((min + max) / 2);

  if (middle < max && array[middle + 1] < array[middle]) {
    return middle + 1;
  }

  if (middle > max && array[middle] < array[middle - 1]) {
    return middle;
  }

  if (array[max] > array[middle]) {
    return findRotationCount(array, min, middle - 1);
  } else {
    return findRotationCount(array, middle + 1, max);
  }
}
