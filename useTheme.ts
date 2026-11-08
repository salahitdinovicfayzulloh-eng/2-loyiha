import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'uzt-theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light',
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
