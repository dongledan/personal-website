import React from 'react';
import './styles.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

export default function Projects() {
  return (
    <div class='projects' id='projects'>
      <h1 class='projects-header' data-aos='fade'>Projects</h1>
      <CardGroup>
        <Card data-aos='fade-up-right' className='card'>
          <Card.Img variant='top' src='https://i.imgur.com/hIetqAS.png' data-aos='fade-up-right' className='card-img'/>
          <Card.Body>
            <Card.Title>SuperLike</Card.Title>
            <Card.Text >
              Social media has continued to have gotten bigger and bigger and allows
              us to have a bigger reach with people all over the world, however sometimes
              people are not who they say they are. SuperLike is a fun e-commerce website
              for fake profiles used on dating apps. We most definitely do not encourage catfishing,
              but it was a lot of fun using pictures from our cohort as well as some of our instructors!
              It features user carts, guest checkout, products, user authenication, and more!
              <br></br>
              <div>
                <a 
                  href='https://github.com/barrysmagnificantfireflies/Superlike'
                  target='_blank'
                  rel='noopener noreferrer'
                  >
                  <div class="btn btn-resume">
                    <ion-icon name="logo-github" id='ion-resume'/>
                      {'   '}
                    <span>View</span>
                  </div>
                  </a>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='card-footer'>React, React-Redux, Express.js, Node.js, Stripe API, Material UI, Axios, PostgreSQL</small>
          </Card.Footer>
        </Card>
        <Card data-aos='fade-up-left'>
          <Card.Img variant='top' src='https://i.imgur.com/qbx9PKt.png'/>
          <Card.Body>
            <Card.Title>MTALens</Card.Title>
            <Card.Text>
              We've all been burned by the MTA before. It's nice knowing when the next train is coming or delayed,
              but sometimes the train countdown sign is nowhere in sight or broken. With MTALens, all you have to do is point 
              and shoot to see the next upcoming trains as well as being able to alert or view if
              trains are crowded through our platform. The app uses OCR from google vision and feeds it into realtime firebase and
              the MTA API feed for up to the date alerts. Don't be late again!
              <br></br>
              <div>
                <a 
                  href='https://github.com/1906-fsa-foxs-flames/capstone'
                  target='_blank'
                  rel='noopener noreferrer'
                  >
                  <div class="btn btn-resume">
                    <ion-icon name="logo-github" id='ion-resume'/>
                      {'   '}
                    <span>View</span>
                  </div>
                  </a>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='card-footer'>React Native, Firebase, Google Vision, MTA API, Expo</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  )
}
