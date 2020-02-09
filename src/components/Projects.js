import React from "react";
import "./styles.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import projects from "./variables/projects";

export default function Projects() {
  return (
    <div class="projects" id="projects">
      <h1 class="projects-header" data-aos="fade">
        Projects
      </h1>
      <CardGroup data-aos="fade">
        {projects.map(project => (
          <Card className="card" key={project.id}>
            <Card.Img variant="top" src={project.src} className="card-img" />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>
                {project.desc}
                <br></br>
                <div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="btn btn-resume">
                      <ion-icon name="logo-github" id="ion-resume" />
                      {"   "}
                      <span>View</span>
                    </div>
                  </a>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="card-footer">{project.footer}</small>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}
