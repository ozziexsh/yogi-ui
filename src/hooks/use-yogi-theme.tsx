import { useContext } from 'react';
import { ThemeProvider } from '../theme';

export default function useYogiTheme() {
  const ctx = useContext(ThemeProvider);
  if (!ctx) {
    throw new Error('YogiContext not being provided');
  }
  return ctx.theme;
}
