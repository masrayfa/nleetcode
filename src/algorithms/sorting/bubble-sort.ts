// W3 Schools explanation of Bubble Sort: https://www.w3schools.com/dsa/dsa_algo_bubblesort.php
// To implement the Bubble Sort algorithm in a programming language, we need:
//     - An array with values to sort.
//     - An inner loop that goes through the array and swaps values if the first value is higher than the next value. This loop must loop through one less value each time it runs.
//     - An outer loop that controls how many times the inner loop must run. For an array with n values, this outer loop must run n-1 times.

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
  const data = argv.length ? argv.map(Number) : [64, 34, 25, 12, 22, 90, 1];

  console.log('Unsorted array:', data);

  const sortedArray = babelSort([...data]);

  console.log('Sorted array:', sortedArray);
}

// #1 latian aja
function babelSort(arr: number[]) {
  const n = arr.length;

  for (let i = 0; n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
}
