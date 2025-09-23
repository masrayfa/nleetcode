function selectionSort(arr: number[]): number[] {
  const n = arr.length;

  // One by one move boundary of unsorted subarray
  // The outer loop goes through all array elements
  // The last i elements are already in place
  // So the inner loop can avoid looking at the last i elements
  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    let min_index = i;
    let swapped = false;

    // Test against elements after i to find the smallest
    // This is why the inner loop starts at i+1
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
        swapped = true;
      }
    }
    // Swap the found minimum element with the first element
    if (swapped) {
      const temp = arr[i];
      arr[i] = arr[min_index];
      arr[min_index] = temp;
    }
  }
  return arr;
}

export function main(argv: string[]) {
  const data = argv.length ? argv.map(Number) : [64, 25, 12, 22, 11];
  console.log('Unsorted array:', data);
  const sortedArray = selectionSort([...data]);
  console.log('Sorted array:', sortedArray);
}
