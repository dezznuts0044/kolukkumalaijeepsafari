import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { type ComponentProps } from 'react';

export type IconSymbolName = ComponentProps<typeof MaterialIcons>['name'];

export const IconSymbol = MaterialIcons as React.ComponentType<
  ComponentProps<typeof MaterialIcons> & { name: IconSymbolName }
>;

