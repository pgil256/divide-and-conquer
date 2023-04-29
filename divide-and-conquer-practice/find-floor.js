function findFloor(array, number, min = 0, max = array.length - 1) {
  if (min > max) return -1;
  if (number > array[max]) return array[high];

  let middle = Math.floor((min + max) / 2);

  if (array[middle] === number) return array[middle];

  if (middle > 0 && array[middle - 1] <= number && number < array[middle]) {
    return array[middle - 1];
  }

  if (number < array[middle]) {
    return findFloor(array, number, min, middle - 1);
  }

  return findFloor(array, number, middle + 1, high);
}
