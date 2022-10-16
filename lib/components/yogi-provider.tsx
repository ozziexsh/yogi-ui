import { ThemeProvider } from '../theme';
import { PropsWithChildren } from 'react';
import defaultTheme, { YogiTheme } from '../default-theme';

interface Props {
  theme?: YogiTheme;
}

export default function YogiProvider({
  children,
  theme,
}: PropsWithChildren<Props>) {
  return (
    <ThemeProvider.Provider value={{ theme: theme || defaultTheme }}>
      {children}
    </ThemeProvider.Provider>
  );
}
