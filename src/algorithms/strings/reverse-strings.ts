function reverseString(s: string[]): string[] {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;

    i++;
    j--;
  }

  return s;
}

export function main(argv: string[]) {
  const data = argv.length ? argv.map(String) : ['h', 'e', 'l', 'l', 'o'];
  console.log('input: ', data);
  const res = ripersString(data);

  console.log('output: ', res);
}

function ripersString(arg: string[]) {
  let left = 0;
  let right = arg.length - 1;

  while (left < right) {
    let temp = arg[left];
    arg[left] = arg[right];
    arg[right] = temp;

    left++;
    right--;
  }

  return arg;
}
