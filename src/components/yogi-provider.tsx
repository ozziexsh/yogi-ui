import { ThemeProvider } from '../theme';
import { PropsWithChildren } from 'react';
import defaultTheme from '../default-theme';

export default function YogiProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider.Provider value={{ theme: defaultTheme }}>
      {children}
    </ThemeProvider.Provider>
  );
}
