// add whatever parameters you deem necessary
function countPairs(arr, sum) {
  let s = new Set(arr);
  let count = 0;
  for (let val of arr) {
    s.delete(val);
    if (s.has(sum - val)) {
      count++;
    }
  }
  return count;
}
