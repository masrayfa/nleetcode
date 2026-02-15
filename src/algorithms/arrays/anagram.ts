function solution(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const store: any = {};

  for (let i = 0; i < s.length; i++) {
    store[s[i]] = (store[s[i]] || 0) + 1;
    store[t[i]] = (store[t[i]] || 0) - 1;
  }

  for (let key in store) {
    if (store[key] !== 0) return false;
  }

  return true;
}

export function main(argv: string[]) {
  const str1 = argv[0] || 'racecar';
  const str2 = argv[1] || 'carrace';

  console.log('Input', str1, str2);
  const result = jawaban(str1, str2);
  console.log('Output', result);
}

export function jawaban(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const store: any = {};

  for (let i = 0; i < s.length; i++) {
    store[s[i]] = (store[s[i]] || 0) + 1;
    store[t[i]] = (store[t[i]] || 0) - 1;
  }

  for (let key in store) {
    if (store[key] !== 0) return false;
  }

  return true;
}
