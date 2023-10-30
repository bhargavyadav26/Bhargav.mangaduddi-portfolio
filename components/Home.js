import React, {useState,useEffect} from 'react'
import { Grid, Header } from "semantic-ui-react";
import Timeline from './Timeline';
import Typed from 'typed.js';

export default function Home(props) {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);
    const [textColor, setTextColor] = useState('black');
    useEffect(() => {
        if(props.isBgColorWhite) {
            setTextColor('black');
        } else {
            setTextColor('white')
        }
        const options = {
            loop: true,
            loopCount: Infinity,
            shuffle: true,
            strings: [
            "I'm a Software Engineer.",
            "I'm a Computer Science Graduate",
            "I'm a Philomath.",
            "I'm a Pacifist.",
            "I'm a Hermit.",
            "I'm a Sciphile.",
            "I'm a Tech Enthusiast.",
          ],
          typeSpeed: 70,
          backSpeed: 80,
        };
        console.log('typed',typed)
        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);
    
        return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
        }
    })

    return (
        <>
        <div style={{position: 'absolute',  color: textColor, width: '100%', height: '100%'}} >
            <Grid className="container">
                <Grid.Row>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                        <Header as="h1"><span style={{fontSize: '2.5rem', fontStyle: 'italic', color: textColor }}>Hey, I'm <span className={props.isBgColorWhite ?"text-animation-when-white" : "text-animation-when-black"}>Bhargav Mangaduddi</span>. Welcome to my website.</span></Header>
                        <Header as="h2" ><span style={{fontSize: '2rem',fontStyle: 'italic',  color: textColor }} ref={el}></span></Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        </>
    )
}