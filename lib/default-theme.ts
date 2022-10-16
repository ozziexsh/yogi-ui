import classNames from 'classnames';

interface ComponentTheme {
  className?: string;
  variant?: string;
  colorScheme?: string;
  variants?: {
    [variant: string]: (color: string) => string;
  };
  size?: string;
  sizes?: {
    [size: string]: () => string;
  };
}

export interface YogiTheme {
  colorScheme: string;
  components: {
    Alert: ComponentTheme;
    Avatar: ComponentTheme;
    Badge: ComponentTheme;
    Button: ComponentTheme;
    Checkbox: ComponentTheme;
    IconButton: ComponentTheme;
    Input: ComponentTheme;
    Label: ComponentTheme;
    Radio: ComponentTheme;
    Switch: ComponentTheme;
    SwitchLabel: ComponentTheme;
    Link: ComponentTheme;
  };
}

const labelTheme: ComponentTheme = {
  className: 'text-sm font-medium text-gray-700',
};

const checkboxTheme: ComponentTheme = {
  className: classNames(
    'inline-flex items-center space-x-2',
    labelTheme.className,
  ),
};

const radioTheme: ComponentTheme = {
  className: classNames(
    'inline-flex items-center space-x-2',
    labelTheme.className,
  ),
};

const switchLabelTheme: ComponentTheme = {
  className: labelTheme.className,
};

const linkTheme: ComponentTheme = {
  className: '',
  variant: 'underline',
  variants: {
    underline: (color: string) =>
      `underline text-${color}-700 hover:text-opacity-75`,
  } as { [key: string]: (color: string) => string },
};

const buttonTheme: ComponentTheme = {
  className:
    'flex items-center space-x-2 rounded-md border-2 border-transparent px-3 py-2 text-sm font-medium leading-4 disabled:cursor-not-allowed disabled:opacity-75',
  variant: 'solid',
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

const iconButtonTheme: ComponentTheme = {
  variant: buttonTheme.variant,
  className:
    'rounded-md border-2 border-transparent p-2 leading-4 disabled:cursor-not-allowed disabled:opacity-75',
  variants: buttonTheme.variants,
};

const inputTheme: ComponentTheme = {
  className: 'rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm',
};

const alertTheme: ComponentTheme = {
  className:
    'flex items-start space-x-2 rounded-md border-4 border-transparent bg-red-200 px-4 py-2 text-gray-700',
  variant: 'subtle',
  variants: {
    subtle: (color: string) => `bg-${color}-200 text-${color}-700`,
  } as { [key: string]: (color: string) => string },
};

const avatarTheme: ComponentTheme = {
  className: 'text-white rounded-full inline-flex items-center justify-center',
  size: 'md',
  sizes: {
    sm: () => 'w-8 h-8',
    md: () => 'w-12 h-12',
    lg: () => 'w-16 h-16',
    xl: () => 'w-20 h-20',
  },
};

const badgeTheme: ComponentTheme = {
  className:
    'rounded-md border border-transparent py-1 px-2 text-xs font-bold uppercase',
  variant: 'solid',
  variants: {
    solid: (color: string) => `bg-${color}-700 text-white shadow-sm`,
    outline: (color: string) => `border-${color}-700 text-${color}-700`,
    subtle: (color: string) => `bg-${color}-100 text-${color}-700`,
  } as { [key: string]: (color: string) => string },
};

const defaultTheme: YogiTheme = {
  colorScheme: 'indigo',
  components: {
    Alert: alertTheme,
    Avatar: avatarTheme,
    Badge: badgeTheme,
    Button: buttonTheme,
    Checkbox: checkboxTheme,
    IconButton: iconButtonTheme,
    Input: inputTheme,
    Label: labelTheme,
    Radio: radioTheme,
    Switch: {},
    SwitchLabel: switchLabelTheme,
    Link: linkTheme,
  },
};

export default defaultTheme;
