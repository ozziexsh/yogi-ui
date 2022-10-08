import { createContext, useContext } from 'react';

const defaultTheme = {
  formLabel: 'text-sm font-medium text-gray-700',
  colorScheme: 'indigo',
};

export const ThemeProvider = createContext({ theme: defaultTheme });

export function useYogiTheme() {
  const ctx = useContext(ThemeProvider);
  if (!ctx) {
    throw new Error('YogiContext not being provided');
  }
  return ctx.theme;
}

export default defaultTheme;
