import React from 'react';
import './styles.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

export default function Projects() {
  return (
    <div class='projects' id='projects'>
      <h1>Projects</h1>
      <CardGroup>
        <Card>
          <Card.Img variant='top' src='https://i.imgur.com/kFgNiK6.jpg' />
          <Card.Body>
            <Card.Title>SuperLike</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead in to additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Javascript, React</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='https://i.imgur.com/kFgNiK6.jpg' />
          <Card.Body>
            <Card.Title>SuperLike</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead in to additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Javascript, React</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  )
}
