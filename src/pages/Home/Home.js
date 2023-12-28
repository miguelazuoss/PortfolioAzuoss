import React, { useContext, useEffect } from 'react';
import Photo from '../../assets/Miguel.png';
import background from '../../assets/fotopretobranco.png';
import backgroundInverse from '../../assets/fotopretobrancoinvertido.png';
import './Home.css';
import { useInView } from 'react-intersection-observer';
import ThemeContext from '../../context/ThemeContext';
import { applyStyles } from '../../utils/themeUtils';

function Home() {
  const { theme } = useContext(ThemeContext);
  const [refAboutMe, inViewAboutMe] = useInView({ threshold: 0.3 });
  const [refPhoto, inViewPhoto] = useInView({ threshold: 0.3 });

  useEffect(() => {
    applyStyles('.textAboutMe', { 'color': theme === 'light' ? '#363636' : '#ffffff' });
    applyStyles('.ContainerAboutMe', { 'background': theme === 'light' ? '#ffffff' : '#141414' });
    applyStyles('.ContainerPhoto', { 'background': theme === 'light' ? '#cfccbb' : '#363636' });
    applyStyles('.ContainerApre', { 'color': theme === 'light' ? '#363636' : '#ffffff' });
    applyStyles('.Photo-img', {
      'box-shadow': theme === 'light' ? '14px -14px 49px #707070, -14px 14px 49px #e8e8e8' : '14px -14px 28px #1f1f1f, -14px 14px 28px #414141'
    });
  }, [theme]);

  return (
    <div>
      <div className='ContainerMain'>
        <div ref={refAboutMe} className={inViewAboutMe ? 'ContainerAboutMe visible' : 'ContainerAboutMe init-hidden'}>
          <img src={background} alt="Descrição da sua foto" className='background-img' />
          <div className='textAboutMe'>
            <h2> Sobre mim:</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
          <img src={backgroundInverse} alt="Descrição da sua foto" className='backgroundInverse-img' />
        </div>
        <div ref={refPhoto} className={inViewPhoto ? 'ContainerPhoto visible' : 'ContainerPhoto init-hidden'}>
          <div className='ContainerApre'>
            <h2>
              <span>Hello,</span>
              <span> my</span>
              <span> name</span>
              <span> is</span>
              <span> Miguel</span>
              <span> Augusto</span>
            </h2>
            <p>I am a full stack developer</p>
          </div>
          <div className='ContainerImagem'>
            <a className='ImagemLink' href="https://www.linkedin.com/in/miguelazuoss/" target="_blank" rel="noopener noreferrer">
              <img src={Photo} alt="Descrição da sua foto" className='Photo-img' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;