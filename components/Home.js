import {useState,useEffect} from 'react'
import { Grid, Header } from "semantic-ui-react";
import Timeline from './Timeline';


export default function Home(props) {

    const [textColor, setTextColor] = useState('black');
    useEffect(() => {
        if(props.isBgColorWhite) {
            setTextColor('black');
        } else {
            setTextColor('white')
        }
    })

    return (
        <>
        <div style={{position: 'absolute',  color: textColor, width: '100%', height: '100%'}} >
            <Grid className="container">
                <Grid.Row>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                        <Header as="h1"><span style={{fontSize: '2.5rem', fontStyle: 'italic', color: textColor }}>Hey, I'm <span className={props.isBgColorWhite ?"text-animation-when-white" : "text-animation-when-black"}>Bhargav Mangaduddi</span>. Welcome to my website.</span></Header>
                        <Header as="h2"><span style={{fontSize: '2rem',fontStyle: 'italic',  color: textColor }}>I'm a Software Engineer, Computer Science Graduate, Philomath, Pacifist, Hermit, Sciphile, and Tech Enthusiast.</span></Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        </>
    )
}