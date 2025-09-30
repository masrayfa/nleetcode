function manualSplit(str: string): string[] {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
  }

  return result;
}

function manualJoin(str: string[]): string {
  let result = '';

  for (let char of str) {
    result += char;
  }

  return result;
}

function reverseString(s: string): string {
  // split string into array of characters
  // const arr = s.split('');

  const arr = manualSplit(s);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  // return arr.join('');

  return manualJoin(arr);
}

export function main(argv: string[]) {
  const data = argv[0] ?? 'hello world';
  console.log('input: ', data);
  const res = ripersString(data);

  console.log('output: ', res);
}

function gabungkanKalimat(s: string[]) {
  let res = '';

  for (let i = 0; i < s.length; i++) {
    res += s[i];
  }

  return res;
}

function pisahkanKalimat(s: string) {
  let res = [];

  for (let i = 0; i < s.length; i++) {
    res.push(s[i]);
  }

  return res;
}

function ripersString(s: string) {
  const hasilPisah = pisahkanKalimat(s);

  let left = 0;
  let right = hasilPisah.length - 1;

  while (left < right) {
    const temp = hasilPisah[left];
    hasilPisah[left] = hasilPisah[right];
    hasilPisah[right] = temp;

    left++;
    right--;
  }

  return gabungkanKalimat(hasilPisah);
}
