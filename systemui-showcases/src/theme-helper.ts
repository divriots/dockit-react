const buildVariations = (key: string, value: string | object): string[] => {
  if (['string', 'number'].includes(typeof value)) return [key];

  const buildVariation = s => !!key ? `${key}.${s}` : s;

  if (Array.isArray(value)) return (value as string[]).map((_, i) => buildVariation(i));

  return Object.entries(value).flatMap(
    ([k, v]) => buildVariations(k, v).map(s => buildVariation(s))
  );
}

export const getVariations = (key: string, theme: Record<string, any>): string[] => {
  if (!theme[key]) return [];
  return buildVariations('', theme[key]);
}
