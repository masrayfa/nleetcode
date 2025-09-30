function isPalindrome(s: string) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left < right && !isAlphaNumeric(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphaNumeric(c: string) {
  return (
    (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')
  );
}

export function main(argv: string[]) {
  const data = argv.length ? argv.join(' ') : 'tab a cat';

  console.log('input: ', data);
  const res = isPalindrome(data);
  console.log('output: ', res);
}
