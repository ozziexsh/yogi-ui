import { extendTheme, ThemeProvider } from '../theme';
import { PropsWithChildren } from 'react';
import defaultTheme from '../default-theme';

const customTheme = extendTheme(defaultTheme, {
  components: {
    label: {
      className: 'text-red-400',
    },
  },
});

export default function YogiProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider.Provider value={{ theme: defaultTheme }}>
      {children}
    </ThemeProvider.Provider>
  );
}
