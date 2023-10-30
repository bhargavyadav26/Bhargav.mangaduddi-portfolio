import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Grid, Image, Menu, Icon, Label, Button } from 'semantic-ui-react';

import Link from 'next/link';

export default function Timeline(props) {
 return (
     <Grid>
         <Grid.Row>
             <Grid.Column>

             <VerticalTimeline>
             <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="July 2023 - Present"
      dateClassName={props.isBgColorWhite ? 'verticalDateBlackColor' : 'verticalDateWhiteColor'}
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      icon={<Image src="work.png" style={{marginTop: '4px', marginLeft: '6px'}} />}
    >
      <h3 className="vertical-timeline-element-title">Ecommerce Developer Graduate Extern</h3>
      <h4 className="vertical-timeline-element-subtitle">Amtrak</h4>
      {/* <p>
        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
      </p> */}
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="March 2023 - May 2023"
      dateClassName={props.isBgColorWhite ? 'verticalDateBlackColor' : 'verticalDateWhiteColor'}
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      icon={<Image src="work.png" style={{marginTop: '4px', marginLeft: '6px'}}/>}
    >
      <h3 className="vertical-timeline-element-title">Ecommerce Developer Intern</h3>
      <h4 className="vertical-timeline-element-subtitle">Amtrak</h4>
      
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      contentStyle={{background: 'rgb(16, 204, 82)', color: '#fff' }}
      date="Jan 2022 - May 2023"
      dateClassName={props.isBgColorWhite ? 'verticalDateBlackColor' : 'verticalDateWhiteColor'}
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
      icon={<Image src="school.png" style={{marginTop: '3px', marginLeft: '5px'}}/>}
    >
      <h3 className="vertical-timeline-element-title">Master's in Computer Science</h3>
      <h4 className="vertical-timeline-element-subtitle">Wichita State University</h4>
      {/* <p>
        I completed master's with 3.81 GPA
      </p> */}
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="December 2017 - January 2022"
      dateClassName={props.isBgColorWhite ? 'verticalDateBlackColor' : 'verticalDateWhiteColor'}
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      icon={<Image src="work.png" style={{marginTop: '4px', marginLeft: '6px'}}/>}
    >
      <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
      <h4 className="vertical-timeline-element-subtitle">WML IT Solutions</h4>
      {/* <p>
        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
      </p> */}
    </VerticalTimelineElement>
    
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      contentStyle={{background: 'rgb(16, 204, 82)', color: '#fff' }}
      date="September 2010 - May 2014"
      dateClassName={props.isBgColorWhite ? 'verticalDateBlackColor' : 'verticalDateWhiteColor'}
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
      icon={<Image src="school.png" style={{marginTop: '3px', marginLeft: '5px'}}/>}
    >
      <h3 className="vertical-timeline-element-title">Bachelor's in Electronics and Communications</h3>
      <h4 className="vertical-timeline-element-subtitle">Osmania University</h4>
      
    </VerticalTimelineElement>
    
    
  </VerticalTimeline>
             </Grid.Column>
         </Grid.Row>
         <Grid.Row>
             
         <Grid.Column verticalAlign='middle' textAlign="center">
             <Link href="/Bhargav Mangaduddi.pdf" target="_blank">
                 <Button animated color='blue' as="a">
                     <Button.Content visible>
                   <Icon name='linkify' />
                   Full Resume
                   </Button.Content>
                   <Button.Content hidden>
                       Click here
                   </Button.Content>
                 </Button>
                 </Link>
                        </Grid.Column>
         </Grid.Row>
     </Grid>
 );
}