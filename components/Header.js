import {useState} from 'react';
import ContactMe from './contactForm';
import { Grid, Image, Popup, Button, Form, Modal, Label, Icon } from "semantic-ui-react"

export default function Header(props) {
    const [isNightMode, setIsNightMode] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const toggle = () => {
    console.log('isNightMode',isNightMode);
    setIsNightMode(!isNightMode);
    if(isNightMode) {
        props.changeBackgroundColor('white');
    } else {
        props.changeBackgroundColor('black')
    }
  };
    
    return (
        <Grid style={{paddingTop: "1rem"}}>
            <Grid.Row columns={3}>
                <Grid.Column/>
                <Grid.Column>
                    {/* <span style={{color: isNightMode ? 'white' : 'black'}}>
                    Welcome
                    </span> */}
                </Grid.Column>
                <Grid.Column textAlign='center' verticalAlign='middle'>
                    <div style={{display: "flex", flexDirection: "row-reverse"}}>
      &nbsp;&nbsp;
      &nbsp;&nbsp;
      &nbsp;&nbsp;
      &nbsp;&nbsp;
                <Popup
        content="This website is ADA compliance. Turn on narrator or voice over."
        trigger={<Image alt="This website is ADA compliance. Turn on narrator or voice over." src="/ada.png" size="mini" />}
      />
      &nbsp;&nbsp;
      &nbsp;&nbsp;
                <div>
      <input
        type="checkbox"
        id="custom-checkbox"
        className="custom-checkbox"
        checked={!isNightMode}
        onChange={toggle}
        aria-hidden="true"
      />
      <label htmlFor="custom-checkbox" className="custom-label">
        <img
          src={isNightMode ? '/sun.png' : '/moon.png'}
          alt={isNightMode ? 'Day' : 'Night'}
          className="custom-image"
        />
      </label>
    </div>
    &nbsp;&nbsp;
      &nbsp;&nbsp;
    <div>
    <Label as='a' size='large' basic color='blue' onClick={() => setIsModalOpen(!isModalOpen)}>
    <Icon name='mail' />Contact Me
  </Label>
      {/* <Button basic onClick={() => setIsModalOpen(!isModalOpen)}><span style={{fontWeight: 'bolder', color: isNightMode ? 'white':'black'}}>Contact Me</span></Button> */}
      <ContactMe isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}