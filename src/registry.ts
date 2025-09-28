export type MainFn = (args: string[]) => Promise<void> | void;

type Loader = () => Promise<{ main: MainFn }>;

export const registry: Record<string, Loader> = {
  // Arbitrary
  arbitrary: async () => await import('./arbitrary.ts'),

  // Arrays
  'merge-sorted-arrays': async () =>
    await import('./algorithms/arrays/merge-sorted-arrays.ts'),
  'products-of-array-except-self': async () =>
    await import('./algorithms/arrays/products-of-array-except-self.ts'),

  // Sorting
  'bubble-sort': async () =>
    await import('./algorithms/sorting/bubble-sort.ts'),
  'selection-sort': async () =>
    await import('./algorithms/sorting/selection-sort.ts'),

  // Searching
  'binary-search': async () =>
    await import('./algorithms/searching/binary-search.ts'),

  // Strings
  'reverse-string': async () =>
    await import('./algorithms/strings/reverse-strings.ts'),
  'reverse-string-II': async () =>
    await import('./algorithms/strings/reverse-strings-II.ts'),

  // Stacks
  'valid-parentheses': async () =>
    await import('./algorithms/stacks/valid-parentheses.ts'),
};
