import React, {Component} from "react";
import "./styles.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import projects from "./variables/projects";

export default class Projects extends Component {
  render() {
  return (
    <div className={`container-section ${this.props.theme}`} id="projects">
      <h1 className="projects-header" data-aos="fade">
        Projects
      </h1>
      <CardGroup data-aos="fade">
        {projects.map(project => (
          <Card className={`card ${this.props.theme}`} key={project.id}>
            <Card.Img variant="top" src={project.src} className="card-img" />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>
                {project.desc}
                <br></br>
                <div className="btn-container">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={`btn btn-resume ${this.props.theme}`}>
                      {this.props.theme === 'dark' ?
                        <ion-icon name="logo-github" id="ion-resume" style={{color:"white"}}/>
                        :
                        <ion-icon name="logo-github" id="ion-resume" style={{color:"black"}}/>
                      }

                      {"   "}
                      <span className={`span ${this.props.theme}`}>View</span>
                    </span>
                  </a>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <p className={`card-footer ${this.props.theme}`}>{project.footer}</p>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}
}
