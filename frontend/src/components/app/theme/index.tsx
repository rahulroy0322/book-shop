'use client';

import { DEFAULT_THEME, STORAGE_KEY, THEMES, type ThemeType } from '@/config/app';
import {
  type FC,
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';


type ThemeProviderPropsType = {
  children: ReactNode;
};

type ThemeProviderType = {
  theme: ThemeType;
  setTheme: (_theme: ThemeType) => void;
} | null;

const ThemeContext = createContext<ThemeProviderType>(null);

const { Provider } = ThemeContext;

const ThemeProviderImpl: FC<ThemeProviderPropsType> = ({ children }) => {
  const [theme, _setTheme] = useState<ThemeType>(
    () => (localStorage?.getItem(STORAGE_KEY) as ThemeType) || DEFAULT_THEME
  );

  useEffect(() => {
    const html = window.document.documentElement;

    html.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme: ThemeType = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
        ? 'dark'
        : 'light';

      html.classList.add(systemTheme);
      return;
    }

    html.classList.add(theme);
  }, [theme]);

  const setTheme = (theme: ThemeType) => {
    if (!THEMES.includes(theme)) {
      throw new Error(
        `provide a valid theme\nValid Themes: ${THEMES.join(',')}`
      );
    }

    localStorage.setItem(STORAGE_KEY, theme);
    _setTheme(theme);
  };

  return (
    <Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </Provider>
  );
};

const ThemeProvider: FC<ThemeProviderPropsType> = ({ children }) =>
  typeof window === 'undefined' ? (
    children
  ) : (
    <ThemeProviderImpl>{children}</ThemeProviderImpl>
  );

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const { setTheme, theme } = context!;

  return {
    theme,
    setTheme,
  };
};

export { useTheme };
export default ThemeProvider;
