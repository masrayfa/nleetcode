function isValid(s: string): boolean {
  const stack = [];
  const closeToOpen: Record<string, string> = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  for (let c of s) {
    if (closeToOpen[c]) {
      if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
}

function checkBraces(arr: string[]): string[] {
  return arr.map((arr) => (isValid(arr) ? 'YES' : 'NO'));
}

export function main(argv: string[]) {
  const input = argv.length ? argv : ['()[]{}', '([)]', '{[]}'];
  console.log(`Input: "${input}"`);
  const result = checkBraces(input);
  console.log('Is valid parentheses:', result);
}
