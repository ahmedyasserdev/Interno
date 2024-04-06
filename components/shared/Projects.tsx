'use client'
import { Container, Row, Card, Col } from "react-bootstrap";
import { projects } from "@/constants";
import ProjectCard from "./ProjectCard";



const Projects = () => {
  return (
    <section className="section-padding">
      <Container>
        <div className="flex-center flex-column gap_1 text-center">
          <h1 className=" text-4 text-dark fw-bold  ">Follow Our Projects</h1>
          <p
            className="text-dark fw-normal px-4 px-md-0 "
            style={{ width: "45rem" }}
          >
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>

        <Row className="mt-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
