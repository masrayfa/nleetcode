const bubbleSort = (arr: number[]): number[] => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
};

export function main(argv: string[]) {
  const data = argv.length ? argv.map(Number) : [64, 34, 25, 12, 22, 11, 90];

  console.log('Unsorted array:', data);

  const sortedArray = bubbleSort([...data]);

  console.log('Sorted array:', sortedArray);
}
