import emailjs from 'emailjs-com';
import {Form, Modal, Icon, Button, Grid, Loader, Dimmer, Message, Label} from 'semantic-ui-react';
import {serviceId, templateId, userPublicKey} from '../config/Config'
import { useState, useRef } from 'react';

export default function ContactMe(props) {
    const form = useRef();

    const [from_name, setName] = useState('');
    const [from_email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailSuccess, setIsEmailSuccess] = useState(false);
    const [isEmailFailed, setIsEmailFailed] = useState(false);

    const sendEmail = (e) => {
      //  const form = JSON.stringify({ name, email, phone, message }, null, 2)
        console.log('form', form)
        e.preventDefault();
        setIsLoading(true)
        emailjs.sendForm(serviceId, templateId, form.current, userPublicKey)
          .then((result) => {
              console.log(result.text);
              setIsLoading(false)
              setIsEmailSuccess(true)
          }, (error) => {
              console.log(error.text);
              setIsLoading(false)
              setIsEmailFailed(true)
          });
    };
    
    const resetModal = () => {
        setName('');
        setEmail('');
        setMessage('');
        setIsLoading(false);
        setIsEmailFailed(false);
        setIsEmailSuccess(false);
        props.setIsModalOpen(!props.isModalOpen)
    };

    return (
        <div>
        <Label as='a' size='large' basic color='blue' onClick={() => props.setIsModalOpen(!props.isModalOpen)}>
        <Icon name='mail' />Contact Me
      </Label>
        <Modal
        dimmer= 'blurring'
        closeIcon
        size="tiny"
        open={props.isModalOpen}
        onClose={() => resetModal()}
      >
        <Modal.Header textAlign="center"><Icon name='mail' />Contact Me</Modal.Header>
        <Modal.Content>
            {
                isLoading
                ?
                <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
              :
              null
            }
            {
                isEmailSuccess ?
                <Grid>
                    <Grid.Row>
                        <Grid.Column>

                        <Message positive>
                            <Message.Header>Thank you!</Message.Header>
                            <p>
                           I will get back to you as early as possible. Have a great day!
                            </p>
                        </Message>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                :
                <>
                {
                    isEmailFailed
                    ?
                    <Message negative>
                            <Message.Header>Uh oh!</Message.Header>
                            <p>
                           Looks like there's some issue with the server. Please try after sometime.
                            </p>
                        </Message>
                        :
                        null
                }
                <form class="ui form" ref={form}  onSubmit={sendEmail}>
                <Form.Field required>
          <label>Full Name</label>
          <input placeholder='First Name' name="from_name" id="from_name" required value={from_name} onChange={(e) => setName(e.target.value)} />
          </Form.Field>
          <Form.Field required>
          <label>Email</label>
          <input type="email" required placeholder='Email'name="from_email" id="from_email" value={from_email} onChange={(e) => setEmail(e.target.value)}  />
          </Form.Field>
          {/* <label>Phone (xxx-xxx-xxxx)</label> */}
          {/* <input placeholder='Phone Number' type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone} onChange={(e) => setPhone(e.target.value)}  /> */}
        <Form.TextArea required label='Message' name="message" id="message" placeholder='Message...' value={message} onChange={(e) => setMessage(e.target.value)} />
        <Grid>
          <Grid.Row>
            <Grid.Column textAlign='center' verticalAlign='middle'>
    
            <Button negative basic onClick={() => resetModal()}>Cancel</Button>
        <Button positive basic type='submit' onClick={() => {setIsEmailFailed(false); setIsEmailSuccess(false);}}>Submit</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </form>
        </>
            }
    </Modal.Content>
      </Modal>
      </div>
    )
}