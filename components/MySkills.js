import {Divider, Grid, Image} from 'semantic-ui-react';

export default function MySkills(props) {
    return (
        <Grid centered stackable className='padding-section' style={{ backgroundColor: props.isBgColorWhite ? '#F0F0F0' : '#3F3F41'}}>
            <Grid.Row>
                <Grid.Column verticalAlign='middle' textAlign='center'>
                    <p className='section-header' style={{color: props.textColor}}>My Skills</p>
                </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row columns={10}>
                <Grid.Column verticalAlign='middle' textAlign='center'>
                    <div className='image-text'>
                    <Image src="react.png"  />
                    <p style={{color: props.textColor}}>React</p>
                    </div>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' textAlign='center'>
                    <div className='image-text'>
                    <Image src="angular.png"  />
                    <p style={{color: props.textColor}}>Angular</p>
                    </div>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' textAlign='center'>
                    <div className='image-text'>
                    <Image src="nextjs3.png"  />
                    <p style={{color: props.textColor}}>NextJS</p>
                    </div>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' textAlign='center'>
                    <div className='image-text'>
                    <Image src="java.png"  />
                    <p style={{color: props.textColor}}>Java</p>
                    </div>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' textAlign='center'>
                    <div className='image-text'>
                    <Image src="c++.png"  />
                    <p  style={{color: props.textColor}}>C++</p>
                    </div>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' textAlign='center'>
                    <div className='image-text'>
                    <Image src="node.png"  />
                    <p  style={{color: props.textColor}}>NodeJS++</p>
                    </div>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' textAlign='center'>
                    <div className='image-text'>
                    <Image src="mysql.png"  />
                    <p  style={{color: props.textColor}}>MySQL</p>
                    </div>
                    </Grid.Column>
                    </Grid.Row>
                    
            <Grid.Row columns={10}>
                <Grid.Column verticalAlign='middle' textAlign='center'>
                    <div className='image-text'>
                    <Image src="js.png"  />
                    <p  style={{color: props.textColor}}>JavaScript</p>
                    </div>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' textAlign='center'>
                    <div className='image-text'>
                    <Image src="ts.png"  />
                    <p  style={{color: props.textColor}}>TypeScript</p>
                    </div>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' textAlign='center'>
                    <div className='image-text'>
                    <Image src="css3.png"  />
                    <p  style={{color: props.textColor}}>CSS3</p>
                    </div>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' textAlign='center'>
                    <div className='image-text'>
                    <Image src="html5.png"  />
                    <p  style={{color: props.textColor}}>HTML5</p>
                    </div>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' textAlign='center'>
                    <div className='image-text'>
                    <Image src="bootstrap.png"  />
                    <p  style={{color: props.textColor}}>Bootstrap</p>
                    </div>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' textAlign='center'>
                    <div className='image-text'>
                    <Image src="git.png"  />
                    <p  style={{color: props.textColor}}>Git</p>
                    </div>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' textAlign='center'>
                    <div className='image-text'>
                    <Image src="Docker.png"  />
                    <p  style={{color: props.textColor}}>Docker</p>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}