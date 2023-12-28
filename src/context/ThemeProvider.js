import React, { useState, useEffect, useCallback } from 'react';
import ThemeContext from './ThemeContext';
import { applyStyles, setBodyBackground } from '../utils/themeUtils';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const applyTheme = useCallback(() => {
    if (theme === 'dark') {
      applyStyles('.textAboutMe', { 'color': '#ffffff' });
      applyStyles('.ContainerAboutMe', { 'background': '#141414' });
      applyStyles('.ContainerPhoto', { 'background': '#363636' });
      applyStyles('.ContainerApre', { 'color': '#ffffff' });
      applyStyles('.Photo-img', { 'box-shadow': '14px -14px 28px #1f1f1f, -14px 14px 28px #414141' });
      setBodyBackground('#141414');
    } else {
      applyStyles('.textAboutMe', { 'color': '#141414' });
      applyStyles('.ContainerAboutMe', { 'background': '#ffffff' });
      applyStyles('.ContainerPhoto', { 'background': '#cfccbb' });
      applyStyles('.ContainerApre', { 'color': '#363636' });
      applyStyles('.Photo-img', { 'box-shadow': '14px -14px 49px #707070,-14px 14px 49px #e8e8e8' });
      setBodyBackground('#ffffff');
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    applyTheme();
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;