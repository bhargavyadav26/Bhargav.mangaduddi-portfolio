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
                Accomplished and results-driven Full Stack Developer with over 8 years of experience in the software development industry. Proficient in a wide array of technologies, including React, Angular, and Java, among others. Demonstrated expertise in developing scalable, high-performance applications from concept to deployment. Skilled in both front-end and back-end development, with a strong focus on creating intuitive user interfaces and robust backend architectures. Proven ability to collaborate effectively within cross-functional teams to deliver innovative solutions that meet and exceed client expectations. Possess a passion for staying updated with emerging technologies and implementing best practices to drive continuous improvement.
                </p>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    )
}