import { useEffect } from 'react';
import { useGlobalContext } from 'context/rootContext';
import { applyTheme } from '@actions/theme.action';

import { Button } from '@lib/ui';

const ThemeSwitcher = () => {
  const { themeOption, themeDispatch } = useGlobalContext();

  const handleThemeMode = () => {
    if (themeOption === 'light') {
      themeDispatch(applyTheme('dark'));
    } else {
      themeDispatch(applyTheme('light'));
    }
  };

  // Needed to load the initial theme option state from the local storage if it exists
  useEffect(() => {
    const themeModeFromStorage = localStorage.getItem('theme-mode') as
      | 'dark'
      | 'light'
      | null;

    if (themeModeFromStorage) {
      themeDispatch(applyTheme(themeModeFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme-mode', themeOption);
  }, [themeOption]);

  return <Button variant='outlined' label='Switch' onClick={handleThemeMode} />;
};

export default ThemeSwitcher;
