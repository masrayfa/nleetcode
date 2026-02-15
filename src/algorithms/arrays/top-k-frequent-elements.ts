export function main(argv: string[]) {
  const nums = argv.length ? argv.map(Number) : [1, 2, 2, 3, 3, 3];
  const k = argv.length > 1 ? Number(argv[argv.length - 1]) : 2;

  console.log('Input', nums, k);
  const result = solution(nums, k);
  console.log('Output', result);
}

// SORTING BASED SOLUTION
function solution(nums: number[], k: number): number[] {
  const count = new Map<number, number>();

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  return Object.entries(count)
    .map(([num, freq]) => [freq, num])
    .sort((a, b) => b[0] - a[0])
    .slice(0, k)
    .map(([, num]) => Number(num));
}

function jawaban(nums: number[], k: number): number[] {
  const count = new Map();

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  return Object.entries(count)
    .map(([num, freq]) => [freq, num])
    .sort((a, b) => b[0] - a[0])
    .slice(0, k)
    .map(([, num]) => Number(num));
}
