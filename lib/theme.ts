import { createContext } from 'react';
import defaultTheme, { YogiTheme } from './default-theme';
import { RecursivePartial } from './types';
import deepMerge from './util/deep-merge';

export function extendTheme<T extends YogiTheme>(
  baseTheme: T,
  customTheme: RecursivePartial<T>,
): YogiTheme {
  return deepMerge(baseTheme, customTheme);
}

// usecases:
// adding variant to component
// const customTheme = extendTheme(defaultTheme, {
//   button: {
//     variants: {
//       gradient: color => 'gradient-r-to-l ....',
//     },
//   },
// });
// // adding size to component
// const customTheme = extendTheme(defaultTheme, {
//   button: {
//     size: {
//       huge: 'text-12xl',
//     },
//   },
// });
// // modifying variant
// const customTheme = extendTheme(defaultTheme, {
//   button: {
//     variants: {
//       solid: color => defaultTheme.button.variants.solid(color) + ' xyz abc',
//     },
//   },
// });
// // modifying size
// const customTheme = extendTheme(defaultTheme, {
//   button: {
//     size: {
//       lg: defaultTheme.button.sizes.lg + ' xyz abc',
//     },
//   },
// });
// // set default variant
// const customTheme = extendTheme(defaultTheme, {
//   button: {
//     variants: {
//       default: 'solid',
//     },
//   },
// });
// // set default size
// const customTheme = extendTheme(defaultTheme, {
//   button: {
//     sizes: {
//       default: 'lg',
//     },
//   },
// });
// // set default colorScheme
// const customTheme = extendTheme(defaultTheme, {
//   button: {
//     colorScheme: 'red',
//     variants: {
//       default: 'solid',
//     },
//   },
// });

export const ThemeProvider = createContext({ theme: defaultTheme });
