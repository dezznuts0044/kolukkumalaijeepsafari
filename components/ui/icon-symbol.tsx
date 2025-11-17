import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { type IconSymbolName } from '@expo/vector-icons/MaterialIcons';
import { type ComponentProps } from 'react';

export const IconSymbol = MaterialIcons as React.ComponentType<
  ComponentProps<typeof MaterialIcons> & { name: IconSymbolName }
>;

export type { IconSymbolName };
