import { useCallback, useEffect,useState } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

export default function ParticlesComp(props) {
    const [logo, setLogo] = useState('https://picsum.photos/id/2/200/200')

    useEffect(() => {

    })
    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
    <Particles
    backgroundImage="https://picsum.photos/id/2/200/200"
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    style={{
        width: '100%',
        backgroundImage: `url(${logo})` 
      }}
    options={{
        // background: {
        //     color: {
        //         value: props.textColor,
        //       }
        // },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 1,
                },
                repulse: {
                    distance: 100,
                    duration: 0.5,
                },
            },
        },
        particles: {
            color: {
                value: props.particlesColor,
            },
            links: {
                color: props.particlesColor,
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
                // image: {
                //     src: "https://picsum.photos/id/2/200/200",
                //     width: '1000px',
                //     height: '100%'
                //   }
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }}
/>
  );
}