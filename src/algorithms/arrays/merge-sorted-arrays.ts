function mergeSortedInPlaceArrays(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let left = m - 1;
  let right = n - 1;
  let k = m + n - 1;

  while (left >= 0 && right >= 0) {
    if (nums1[left] > nums2[right]) {
      nums1[k] = nums1[left];
      left--;
    } else {
      nums1[k] = nums2[right];
      right--;
    }
    k--;
  }

  while (right >= 0) {
    nums1[k] = nums2[right];
    right--;
    k--;
  }
}

export function main(argv: string[]) {
  const nums1 = argv.length
    ? argv.slice(0, Math.floor(argv.length / 2)).map(Number)
    : [1, 3, 5, 0, 0, 0];
  const nums2 = argv.length
    ? argv.slice(Math.floor(argv.length / 2)).map(Number)
    : [2, 4, 6];

  const m = nums1.length - nums2.length;
  const n = nums2.length;

  console.log('Array 1:', nums1);
  console.log('Array 2:', nums2);

  gabungArray(nums1, m, nums2, n);

  console.log('Merged array:', nums1);
}

function gabungArray(nums1: number[], m: number, nums2: number[], n: number) {
  let left = m - 1;
  let right = n - 1;
  let k = nums1.length - 1;

  while (left >= 0 && right >= 0) {
    if (nums1[left] >= nums2[right]) {
      nums1[k] = nums1[left];
      left--;
    } else {
      nums1[k] = nums2[right];
      right--;
    }
    k--;
  }

  while (right >= 0) {
    nums1[k] = nums2[right];
    right--;
    k--;
  }
}
