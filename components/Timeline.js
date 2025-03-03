import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Grid, Image, Menu, Icon, Label, Button, Divider } from 'semantic-ui-react';

import Link from 'next/link';

export default function Timeline(props) {
 return (
     <Grid className='padding-section'>
      <Grid.Row>
        <Grid.Column textAlign='center'>
        <p className='section-header' style={{color: props.textColor}}>My Timeline</p>
        </Grid.Column>
      </Grid.Row>
      <Divider inverted={!props.isBgColorWhite} />
         <Grid.Row>
             <Grid.Column>

             <VerticalTimeline>
             <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="July 2023 - January 2024"
      dateClassName={props.isBgColorWhite ? 'verticalDateBlackColor' : 'verticalDateWhiteColor'}
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      icon={<Image src="work.png" style={{marginTop: '4px', marginLeft: '6px'}} />}
    >
      <h3 className="vertical-timeline-element-title">E-Commerce Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">Client: Amtrak (Internship)</h4>
      <p style={{margin: 0}}>
        Washington, D.C.
      </p>
    </VerticalTimelineElement>
             {/* <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="July 2023 - Jan 2024"
      dateClassName={props.isBgColorWhite ? 'verticalDateBlackColor' : 'verticalDateWhiteColor'}
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      icon={<Image src="work.png" style={{marginTop: '4px', marginLeft: '6px'}} />}
    >
      <h3 className="vertical-timeline-element-title">Ecommerce Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">Amtrak</h4>
      <p style={{margin: 0}}>
        Washington, D.C.
      </p>
    </VerticalTimelineElement> */}
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="March 2023 - May 2023"
      dateClassName={props.isBgColorWhite ? 'verticalDateBlackColor' : 'verticalDateWhiteColor'}
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      icon={<Image src="work.png" style={{marginTop: '4px', marginLeft: '6px'}}/>}
    >
      <h3 className="vertical-timeline-element-title">E-Commerce Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">Client: Amtrak (Internship)</h4>
      <p style={{margin: 0}}>
        Washington, D.C.
      </p>
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
      <h4 className="vertical-timeline-element-subtitle">Wichita State University &#183; <span>GPA - 3.81</span></h4>
      <p style={{margin: 0}}>
        Wichita, Kansas
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="November 2020 - January 2022"
      dateClassName={props.isBgColorWhite ? 'verticalDateBlackColor' : 'verticalDateWhiteColor'}
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      icon={<Image src="work.png" style={{marginTop: '4px', marginLeft: '6px'}}/>}
    >
      <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
      <h4 className="vertical-timeline-element-subtitle">WML IT Solutions</h4>
      <p style={{margin: 0}}>
        Hyderabad, India
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="December 2017 - October 2020"
      dateClassName={props.isBgColorWhite ? 'verticalDateBlackColor' : 'verticalDateWhiteColor'}
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      icon={<Image src="work.png" style={{marginTop: '4px', marginLeft: '6px'}}/>}
    >
      <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">WML IT Solutions</h4>
      <p style={{margin: 0}}>
        Hyderabad, India
      </p>
    </VerticalTimelineElement>
    {/* <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="February 2015 - November 2017"
      dateClassName={props.isBgColorWhite ? 'verticalDateBlackColor' : 'verticalDateWhiteColor'}
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      icon={<Image src="work.png" style={{marginTop: '4px', marginLeft: '6px'}}/>}
    >
      <h3 className="vertical-timeline-element-title">Software Engineer</h3>
      <h4 className="vertical-timeline-element-subtitle">Webpatshala Solutions</h4>
      <p style={{margin: 0}}>
        Bangalore, India
      </p>
    </VerticalTimelineElement> */}
    
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
      <p style={{margin: 0}}>
        Hyderabad, India.
      </p>
    </VerticalTimelineElement>
    
    
  </VerticalTimeline>
             </Grid.Column>
         </Grid.Row>
         <Grid.Row>
             
         <Grid.Column verticalAlign='middle' textAlign="center">
             <Link href="/Bhargav Mangaduddi.pdf" target="_blank">
                 <Button animated color='blue'>
                     <Button.Content visible>
                   <Icon name='linkify' />
                   Full Résumé
                   </Button.Content>
                   <Button.Content hidden>
                       View
                   </Button.Content>
                 </Button>
                 </Link>
                 <Button as="a" href="/Bhargav Mangaduddi.pdf" download="Bhargav Mangaduddi Resume" floated icon="download" color="green"/>
                        </Grid.Column>
         </Grid.Row>
     </Grid>
 );
}