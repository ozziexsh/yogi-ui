import defaultTheme, { ThemeProvider } from '../theme';
import { PropsWithChildren } from 'react';

export default function YogiProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider.Provider value={{ theme: defaultTheme }}>
      {children}
    </ThemeProvider.Provider>
  );
}
