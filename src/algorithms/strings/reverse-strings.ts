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
  const res = reverseString(data);

  console.log('output: ', res);
}
