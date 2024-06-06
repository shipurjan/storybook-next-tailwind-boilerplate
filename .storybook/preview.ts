import '../src/app/css/storybook.css'; 
import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

export const decorators = [
  withThemeByClassName<ReactRenderer>({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  decorators,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'White', value: '#ffffff' },
        { name: 'Black', value: '#000000' },
        { name: 'Red', value: '#ff0000' },
        { name: 'Green', value: '#00ff00' },
        { name: 'Blue', value: '#0000ff' },
        { name: 'Cyan', value: '#00ffff' },
        { name: 'Magenta', value: '#ff00ff' },
        { name: 'Yellow', value: '#ffff00' },
      ],
    },
    viewport: {
      ...INITIAL_VIEWPORTS
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
