// Interfaces
import { themeBuilder } from './interfaces';

const lightTheme: themeBuilder = {
  body: '#fff',
};

const darkTheme: themeBuilder = {
  body: '#000',
};

const DefaultTheme: themeBuilder = {
  body: '#000',
};

const themes: any = {
  light: lightTheme,
  dark: darkTheme,
  DefaultTheme,
};

export default themes;
