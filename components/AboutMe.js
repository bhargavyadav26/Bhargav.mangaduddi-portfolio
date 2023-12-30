import { Grid, Image, Header, Divider } from "semantic-ui-react";


export default function AboutMe(props) {
    return (
        <Grid centered padded stackable className="padding-section" style={{backgroundColor: props.isBgColorWhite ? '#F0F0F0' : '#3F3F41'}} >
        <Grid.Row centered columns={2}>
            <Grid.Column verticalAlign="middle" textAlign="center" mobile={16} tablet={8} computer={4}>
                <Image src="profile.jpg" size="medium" centered circular  />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={12} textAlign="center" verticalAlign="middle">
                <p className="section-header" style={{color: props.textColor}}>Get to know me!</p>
                <Divider inverted={!props.isBgColorWhite} style={{padding: 0}} />
                <p style={{textAlign: 'justify', fontSize: 'medium', color: props.textColor}}>
                    With 5 years of professional experience, I have showcased my proficiency in full stack development, along with strategizing and implementing  User Interface (UI) Design, UX configurations across diverse industries,
                     including Finance, e-commerce, and transporation industries. My expertise spans a wide range of technologies, for both client-side and server-side applications. I boast a commendable history of collaborating with designers and product managers to craft user-friendly interfaces. My unwavering dedication to creating optimal, user-centric web solutions, combined with my prowess in object-oriented programming, positions me as a valuable
                        asset in both collaborative team environments and independent projects.I possess a skill set that encompasses effective problem-solving and the optimal utilization of data structures in algorithm development. At present, I am actively seeking career opportunities that would allow me to engage with highly intelligent individuals, engage in fruitful discussions, make meaningful contributions on prominent platforms, and participate in the creation of innovative solutions that could potentially impact and benefit a large user base
                </p>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    )
}