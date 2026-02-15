export function main(argv: string[]) {
  const strs = argv.length ? argv : ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

  console.log('Input', strs);
  const result = solution(strs);
  console.log('Output', result);
}

function solution(strs: string[]): any {
  const res = new Map();

  for (let str of strs) {
    const count = new Array(26).fill(0);

    for (let char of str) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }

    const key = count.join(',');

    if (!res[key]) res[key] = [];

    res[key].push(str);
  }

  return Object.values(res);
}
