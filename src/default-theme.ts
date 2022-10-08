import classNames from 'classnames';

const labelTheme = {
  className: 'text-sm font-medium text-gray-700',
};

const checkboxTheme = {
  className: classNames(
    'inline-flex items-center space-x-2',
    labelTheme.className,
  ),
};

const radioTheme = {
  className: classNames(
    'inline-flex items-center space-x-2',
    labelTheme.className,
  ),
};

const switchLabelTheme = {
  className: labelTheme.className,
};

const buttonTheme = {
  className:
    'flex items-center space-x-2 rounded-md border-2 border-transparent px-3 py-2 text-sm font-medium leading-4 disabled:cursor-not-allowed disabled:opacity-75',
  defaultVariant: 'solid',
  variants: {
    solid: (color: string) =>
      `bg-${color}-600 hover:bg-${color}-500 text-white shadow-sm`,
    subtle: (color: string) =>
      `bg-${color}-100 hover:bg-${color}-200 text-${color}-700`,
    outline: (color: string) =>
      `border-${color}-700 hover:bg-${color}-100 text-${color}-700`,
    ghost: (color: string) => `hover:bg-${color}-100 text-${color}-700`,
    link: (color: string) => `p-0 hover:underline text-${color}-700`,
  } as { [key: string]: (color: string) => string },
};

const iconButtonTheme = {
  defaultVariant: buttonTheme.defaultVariant,
  className:
    'rounded-md border-2 border-transparent p-2 leading-4 disabled:cursor-not-allowed disabled:opacity-75',
  variants: buttonTheme.variants,
};

const inputTheme = {
  className: 'rounded-md border border-gray-300 px-2 py-1 text-sm shadow-sm',
};

const alertTheme = {
  className:
    'flex items-start space-x-2 rounded-md border-4 border-transparent bg-red-200 px-4 py-2 text-gray-700',
  defaultVariant: 'subtle',
  variants: {
    subtle: (color: string) => `bg-${color}-200 text-${color}-700`,
  } as { [key: string]: (color: string) => string },
};

const avatarTheme = {
  className:
    'text-white w-12 h-12 rounded-full inline-flex items-center justify-center',
};

const badgeTheme = {
  className:
    'rounded-md border border-transparent py-1 px-2 text-xs font-bold uppercase',
  defaultVariant: 'solid',
  variants: {
    solid: (color: string) => `bg-${color}-700 text-white shadow-sm`,
    outline: (color: string) => `border-${color}-700 text-${color}-700`,
    subtle: (color: string) => `bg-${color}-100 text-${color}-700`,
  } as { [key: string]: (color: string) => string },
};

const defaultTheme = {
  colorScheme: 'indigo',
  components: {
    alert: alertTheme,
    avatar: avatarTheme,
    badge: badgeTheme,
    button: buttonTheme,
    checkbox: checkboxTheme,
    iconButton: iconButtonTheme,
    input: inputTheme,
    label: labelTheme,
    radio: radioTheme,
    switchLabel: switchLabelTheme,
  },
};

export type YogiTheme = typeof defaultTheme;

export default defaultTheme;
