import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-vertical-timeline-component/style.min.css';
import Layout from '../components/Layout';
import Home from '../components/Home';
import { useEffect, useState } from 'react';
import ParticlesComp from '../components/Particles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
export default function HomePage() {
  const [bgColor, setBgColor] = useState('white');
  const [isBgColorWhite, setIsBgColorWhite] = useState(true);
  
  const [textColor, setTextColor] = useState('black');
  const [particlesColor, setParticlesColor] = useState('#000000');
  // useEffect(() => {
  //   changeBackgroundColor('rgb(5, 5, 5)')
  // });

const changeBackgroundColor = (color) => {
  console.log('col', color)
  setBgColor(color)
  if(color === 'white') {
    setIsBgColorWhite(true);
    setParticlesColor('#000000')
    setTextColor('black');
  } else {
    setIsBgColorWhite(false);
    setParticlesColor('#ffffff')
    setTextColor('white');
  }
  // document.documentElement.style.setProperty('--background-color', color);
}

  return (
    <>
    {/* <video src="bg_video.mp4" autoplay loop playsinline muted></video> */}
    <div >
      <div style={{backgroundColor: bgColor, transition: 'all 1s linear'}}>
        
      <header>
        <Header changeBackgroundColor={changeBackgroundColor} />
        </header>
        <main className="container">
          <ParticlesComp textColor={textColor} particlesColor={particlesColor}/>
          
          <Home isBgColorWhite={isBgColorWhite}/>
        </main>
        
        <Timeline isBgColorWhite={isBgColorWhite}/>
        &nbsp;
        <footer>
            <Footer isBgColorWhite={isBgColorWhite}/>
            </footer>
      </div>
    </div>
    </>
  );
}
