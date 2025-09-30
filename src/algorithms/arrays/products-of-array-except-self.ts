function bruteForce(nums: number[]) {
  const n = nums.length;
  const res = new Array(n);

  for (let i = 0; i < n - 1; i++) {
    let prod = 1;

    for (let j = 0; j < n - 1; j++) {
      if (i !== j) {
        prod *= nums[j];
      }
    }

    res[i] = prod;
  }

  return res;
}

// in-place prefix and postfix
function optimal(nums: number[]) {
  const n = nums.length;
  const res = new Array(n).fill(1);

  // kenapa selesai dengan n bukan n-1? karena kita perlu mengisi semua elemen
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  let postfix = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }

  return res;
}

export function main(argv: string[]) {
  const input = argv.length ? argv[0].split(',').map(Number) : [1, 2, 3, 4];
  console.log(`Input: [${input}]`);
  const result = bruteForce(input);
  console.log('Products of array except self:', result);
}
