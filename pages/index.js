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
import AboutMe from '../components/AboutMe';
import MySkills from '../components/MySkills';
import { Divider, Grid } from 'semantic-ui-react';
import { Analytics } from '@vercel/analytics/react';

export default function HomePage() {
  const [bgColor, setBgColor] = useState('#f9f9f9');
  const [isBgColorWhite, setIsBgColorWhite] = useState(true);
  
  const [textColor, setTextColor] = useState('black');
  const [particlesColor, setParticlesColor] = useState('#000000');
  const [isModalOpen, setIsModalOpen] = useState(false);
  // useEffect(() => {
  //   changeBackgroundColor('rgb(5, 5, 5)')
  // });

const changeBackgroundColor = (color) => {
  setBgColor(color)
  if(color === '#f9f9f9') {
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
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/man.png" />
      </Head>
      <header>
        <Header changeBackgroundColor={changeBackgroundColor} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </header>
        <main className="container">
          <ParticlesComp textColor={textColor} particlesColor={particlesColor}/>
          <Home isBgColorWhite={isBgColorWhite}/>
        </main>
        <Divider hidden/>
        <AboutMe textColor={textColor} isBgColorWhite={isBgColorWhite} />
        <Divider hidden />
        <Timeline textColor={textColor} isBgColorWhite={isBgColorWhite}/>
        <Divider hidden />
        &nbsp;
        &nbsp;
        <MySkills textColor={textColor} isBgColorWhite={isBgColorWhite}/>
        &nbsp;
        <div>
        <footer>
            <Footer isBgColorWhite={isBgColorWhite}  isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <Grid>
              
            <Grid.Row only="computer tablet">
                <Grid.Column textAlign="center">
                        <span className={isBgColorWhite ?"text-animation-when-white" : "text-animation-when-black"} style={{fontSize:"medium", fontWeight: "bold", color: textColor  }} aria-label="copyright bhargav mangaduddi">
                        &copy; 2023 Bhargav Mangaduddi. All Rights Reserved.
                        </span>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </footer>
            </div>
            <Analytics />
      </div>
    </div>
    </>
  );
}
