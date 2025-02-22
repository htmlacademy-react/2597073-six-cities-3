
export const addPluralS =
  (singularWord: string, pluralWord: string, pluralCount: number) =>
    `${pluralCount} ${pluralCount > 1 ? pluralWord : singularWord}`;
