const getSuffixes = (key: string, value: string | object): string[] => {
  if (typeof value === 'string' || Array.isArray(value)) {
    if (key === 'DEFAULT') return [''];
    return [`-${key}`];
  }
  return Object.entries(value).flatMap(
    ([k, v]) => getSuffixes(k, v).map(s => !!key ? `-${key}${s}` : s)
  );
}

export const extractClassSuffixes = (key: string, theme: Record<string, any>): string[] => {
  if (!theme[key]) return [];
  return getSuffixes('', theme[key]);
}