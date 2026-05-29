import { Platform } from 'react-native';

/**
 * Primary color: #6366F1 (Indigo)
 * Used throughout the app for tint, buttons, active states, etc.
 */
const primaryLight = '#6366F1';
const primaryDark = '#818CF8';

export const Colors = {
  light: {
    text: '#11181C',
    textSecondary: '#687076',
    background: '#FFFFFF',
    card: '#F4F4F5',
    tint: primaryLight,
    primary: primaryLight,
    primaryLight: '#E0E7FF',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: primaryLight,
    border: '#E4E4E7',
    placeholder: '#A1A1AA',
    error: '#EF4444',
    success: '#22C55E',
    inputBackground: '#F4F4F5',
  },
  dark: {
    text: '#ECEDEE',
    textSecondary: '#9BA1A6',
    background: '#09090B',
    card: '#18181B',
    tint: primaryDark,
    primary: primaryDark,
    primaryLight: '#312E81',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: primaryDark,
    border: '#27272A',
    placeholder: '#52525B',
    error: '#F87171',
    success: '#4ADE80',
    inputBackground: '#18181B',
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
