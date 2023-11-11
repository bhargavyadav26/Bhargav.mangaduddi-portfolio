import { Grid, Image, Divider } from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
import ContactMe from "./contactForm";

export default function Footer(props) {

    const [textColor, setTextColor] = useState('black');

    useEffect(() => {
        if(props.isBgColorWhite) {
            setTextColor('black');
        } else {
            setTextColor('white')
        }
    })

    return (
        <div style={{marginTop: '15px'}}>
            <Grid stackable>
                <Grid.Row columns={3} only="computer tablet">
                    
                    <Grid.Column textAlign="center" verticalAlign="middle">
                    {/* <ContactMe isModalOpen={props.isModalOpen} setIsModalOpen={props.setIsModalOpen} /> */}
                    <span style={{fontSize:"medium", fontWeight: "bold", color: textColor  }}>+1 (201)-932-9317&nbsp;&nbsp;|&nbsp;&nbsp;bhargavyadav26@gmail.com</span>
                    </Grid.Column>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                    <ContactMe isModalOpen={props.isModalOpen} setIsModalOpen={props.setIsModalOpen} />
                    </Grid.Column>
                    <Grid.Column>
                        <Grid  textAlign="center" verticalAlign="middle">
                            <Grid.Row>
                            <Image src='/twitterx.png'
                            as="a"
                            alt="twitter"
                            href='https://twitter.com/bhargav_yadav'
                            target='_blank' />
                    <Image src='/linkedin.png'
                    as="a"
                    alt="linkedin"
                    href='https://www.linkedin.com/in/bhargavmangaduddi'
                    target='_blank'
                     />
                         <Image src='/instagram.png'
                    as="a"
                    alt="instagram"
                    href='https://www.instagram.com/bhargav.yadav/'
                    target='_blank'
                     />
                     <Image src='/github.png'
                as="a"
                alt="github"
                href='https://github.com/bhargavyadav26'
                target='_blank'
                 />
                            </Grid.Row>
                            </Grid>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row only="mobile">
                <Grid.Column textAlign="center" verticalAlign="middle">
                    {/* <ContactMe isModalOpen={props.isModalOpen} setIsModalOpen={props.setIsModalOpen} /> */}
                    <span style={{fontSize:"medium", fontWeight: "bold", color: textColor  }}>+1 (201)-932-9317&nbsp;&nbsp;|&nbsp;&nbsp;bhargavyadav26@gmail.com</span>
                    <ContactMe isModalOpen={props.isModalOpen} setIsModalOpen={props.setIsModalOpen} />

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row only="mobile" style={{padding: 0, margin: 0}}>
                    
                <Grid.Column>
                        <Grid  textAlign="center" verticalAlign="middle">
                            <Grid.Row>
                            <Image src='/twitterx.png'
                            as="a"
                            alt="twitter"
                            href='https://twitter.com/bhargav_yadav'
                            target='_blank' />
                    <Image src='/linkedin.png'
                    as="a"
                    alt="linkedin"
                    href='https://www.linkedin.com/in/bhargavmangaduddi'
                    target='_blank'
                     />
                         <Image src='/instagram.png'
                    as="a"
                    alt="instagram"
                    href='https://www.instagram.com/bhargav.yadav/'
                    target='_blank'
                     />
                     <Image src='/github.png'
                as="a"
                alt="github"
                href='https://github.com/bhargavyadav26'
                target='_blank'
                 />
                            </Grid.Row>
                            </Grid>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row only="mobile" style={{padding: 0, margin: 0}}>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                        <span className={props.isBgColorWhite ?"text-animation-when-white" : "text-animation-when-black"} style={{fontSize:"medium", fontWeight: "bold", color: textColor  }} aria-label="copyright bhargav mangaduddi">
                        &copy; 2023 Bhargav Mangaduddi. All Rights Reserved.
                        </span>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </div>
    )
}