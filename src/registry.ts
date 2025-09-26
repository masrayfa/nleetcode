export type MainFn = (args: string[]) => Promise<void> | void;

type Loader = () => Promise<{ main: MainFn }>;

export const registry: Record<string, Loader> = {
  'bubble-sort': async () =>
    await import('./algorithms/sorting/bubble-sort.ts'),
  'binary-search': async () =>
    await import('./algorithms/searching/binary-search.ts'),
  'selection-sort': async () =>
    await import('./algorithms/sorting/selection-sort.ts'),
  'reverse-string': async () =>
    await import('./algorithms/strings/reverse-strings.ts'),
  'reverse-string-II': async () =>
    await import('./algorithms/strings/reverse-strings-II.ts'),
  'merge-sorted-arrays': async () =>
    await import('./algorithms/arrays/merge-sorted-arrays.ts'),
};
