import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import linkedin from './assets/linkedin.svg';
import messenger from './assets/messenger.svg';
import twitter from './assets/twitter.svg';
import twoo from './assets/twoo.svg';
import Arrow from './assets/Arrow.svg';


export default function App() {
  return (
    <div className='footer'>
    <Container id='container-body'>
    <Row>
      <Col sm={6}> 
      <div className='container1'>
        <Container>
          <Row>
            <div>
                  <p className='tripbae'>Tripbae</p> 
                  <img src={Arrow} className="Arrow" alt="logo"/>
            </div>
         
              <Col sm={4}>
                <div className='icon-div'>
                  <p className='footer-quote'>Connecting Passionate Travelers Worldwide.Explore, Connect, and Embark on Adventures with Us!</p>
                  <div className='icons'>
                     <img src={linkedin} className="App-logo" alt="logo" />
                     <img src={messenger} className="App-logo" alt="logo" />
                     <img src={twitter} className="App-logo" alt="logo" />
                     <img src={twoo} className="App-logo" alt="logo" />

                  </div>
                </div>
                </Col>
              <Col sm={4}>
                  <ul>
                  <p className='Company'>Company</p>

                    <p>About</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                  </ul>
                
                
                </Col>
              <Col sm={4}>
                
              <ul>
                  <p className='Company'>Destinations</p>

                    <p>India</p>
                    <p>Maldives</p>
                    <p>Nepal</p>
                    <p>Sri Lanka</p>
                  </ul>                
        
                
                </Col>
          </Row>
        </Container>
      </div>
        
        </Col>

      <Col id='footerpic' sm={6}>
        <Container>
        <div className='container2' >
          <p className='signup-blank'>Sign up for the latest deals and drops!</p>  
          <form className='subscribe-form'>
              <input className='email-address' type="email" name="name" placeholder='Your email address'/>
              <button className='subscribe' >Subscribe</button>
          </form>
          <p className='offer'>Get 10% off on your first purchase when you sign up for our newsletter.</p>
        </div>       
        </Container>
      </Col>
      <div className='bottom-border'></div>
      <p className='copyright'>Copyright @tripbae 2022. All Rights Reserved.</p>
    </Row>
 

 
  </Container>

  </div>
  );
}