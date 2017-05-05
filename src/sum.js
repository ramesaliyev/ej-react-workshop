export function sum(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}
