export default function yogiSafelist({ colors }: {
  colors?: string[];
} = {}) {
  const yogiColors = new Set(['green', 'blue', 'yellow', 'red', 'gray']);

  for (const color of colors || []) {
    yogiColors.add(color)
  }

  const colorString = [...yogiColors].join('|');

  return [
    {
      pattern: new RegExp(`bg-(${colorString})-(100|200|500|600|700)$`),
      variants: ['hover']
    },
    {
      pattern: new RegExp(`border-(${colorString})-(700)$`),
    },
    {
      pattern: new RegExp(`text-(${colorString})-(600|700)$`),
      variants: ['hover']
    },
  ]
}