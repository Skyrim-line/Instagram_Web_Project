const input = [1, 2, 3, 4, 5];
//output [1,4,9,16,25]
const output = input.map((num) => {
  return Math.pow(num, 2);
});

module.exports = { output };
