import React, { useState, useEffect, useCallback } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    
    const applyTheme = useCallback(() => {
        const textAboutMe = document.querySelector('.textAboutMe')
        const ContainerAboutMe = document.querySelector('.ContainerAboutMe')
        const ContainerPhoto = document.querySelector('.ContainerPhoto')
        const PhotoImg = document.querySelector('.Photo-img')
        const ContainerApre = document.querySelector('.ContainerApre')
        

        if (theme === 'dark') {
            document.body.style.setProperty('background', '#141414');
            textAboutMe.style.setProperty('color', '#ffffff');
            ContainerAboutMe.style.setProperty('background', '#141414');
            ContainerPhoto.style.setProperty('background', '#363636');
            ContainerApre.style.setProperty('color', '#ffffff');
            PhotoImg.style.setProperty('box-shadow', ( '14px -14px 28px #1f1f1f, -14px 14px 28px #414141'));
          } else {
            document.body.style.setProperty('background', '#ffffff');
            textAboutMe.style.setProperty('color', '#141414');
            ContainerAboutMe.style.setProperty('background', '#ffffff');
            ContainerPhoto.style.setProperty('background', '#cfccbb');
            ContainerApre.style.setProperty('color', '#363636');
            PhotoImg.style.setProperty('box-shadow', ( '14px -14px 49px #707070,-14px 14px 49px #e8e8e8'));
          }
      }, [theme])

      
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      applyTheme();
    } else {
      setTheme('dark');
      applyTheme();
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
