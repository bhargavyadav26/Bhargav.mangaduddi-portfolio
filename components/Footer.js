import { Grid, Image } from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";

export default function Footer(props) {

    const [textColor, setTextColor] = useState('black');

    useEffect(() => {
        if(props.isBgColorWhite) {
            setTextColor('black');
        } else {
            setTextColor('white')
        }
    })

    console.log('isBgColorWhite',props.isBgColorWhite, textColor);
    return (
        <div style={{marginTop: '15px'}}>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                        <span style={{fontSize:"medium", fontWeight: "bold", color: textColor  }} aria-label="copyright bhargav mangaduddi">
                        &copy; 2023 Bhargav Mangaduddi. All Rights Reserved.
                        </span>
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
            </Grid>
        </div>
    )
}