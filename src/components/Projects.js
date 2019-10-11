import React from 'react';
import './styles.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Projects() {
  return (
    <div class='projects' id='projects'>
      <h1 class='projects-header'>Projects</h1>
      <CardGroup>
        <Card>
          <Card.Img variant='top' src='https://i.imgur.com/EieTNhW.png' />
          <Card.Body>
            <Card.Title>SuperLike</Card.Title>
            <Card.Text>
              Social media has continued to have gotten bigger and bigger and allows
              us to have a bigger reach with people all over the world, however sometimes
              people are not who they say they are. SuperLike is a fun e-commerce website
              for fake profiles used on dating apps. We most definitely do not encourage catfishing,
              but it was a lot of fun using pictures from our cohort as well as some of our instructors!
              It features user carts, guest checkout, products, user authenication, and more!
              <br></br>
                <Button
                  variant="dark"
                  id="resume-btn"
                  className="mt-5"
                  href='https://github.com/barrysmagnificantfireflies/Superlike'
                  target="_blank"
                  size='md'
                  >
                <ion-icon name="logo-github"/>
                  {'   '}
          <p>View</p>
        </Button>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">React, React-Redux, Express.js, Node.js, Stripe API, Material UI, Axios, PostgreSQL</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='https://i.imgur.com/29P4NcO.png' />
          <Card.Body>
            <Card.Title>MTALens</Card.Title>
            <Card.Text>
              We've all been burned by the MTA before. It is nice knowing when the next train is coming for the peace of mind,
              but sometimes the train countdown sign is on the opposite side of the platform or even worse-- broken. With MTALens,
              all you have to do is point and shoot to see the next upcoming trains as well as being able to alert or view if
              trains are crowded through our platform. The app uses OCR from google vision and feeds it into realtime firebase and also
              uses the MTA API feed for up to the date alerts.
              <br></br>
                <Button
                  variant="dark"
                  id="resume-btn"
                  className="mt-5"
                  href='https://github.com/1906-fsa-foxs-flames/capstone'
                  target="_blank"
                  size='md'
                  >
                  <ion-icon name="logo-github"/>
                  {'   '}
                  <p>View</p>
                </Button>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">React Native, Firebase, Google Vision, MTA API, Expo</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  )
}
