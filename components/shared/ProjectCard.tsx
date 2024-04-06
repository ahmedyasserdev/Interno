'use client'
import Image from "next/image";
import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProjectCard = ({ project, index } :ProjectCardProps ) => {
    const { ref, controls, delay } = useScrollAnimation({ index });
  
    const variants = {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -50 },
    };
  
    return (
      <Col key={index} sm={6} className="my-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5, delay }}
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
        >
          <Card style={{ width: "90%" }} className="project-card"  >
            <motion.div
              whileHover={{ rotate: 10 }} // Rotate the image on hover
              whileTap={{ rotate: -10 }} // Rotate the image slightly on tap
            >
              <Card.Img variant="top" src={project.image} loading = "lazy" />
            </motion.div>
            <Card.Body className="mt-2 flex-between">
              <div>
                <Card.Title className="text-2 text-dark fw-bold">
                  {project.title}
                </Card.Title>
                <Card.Text className="text-dark fw-normal">
                  {project.desc}
                </Card.Text>
              </div>
              <div>
                <Image
                  src={"/icons/right-angel.svg"}
                  alt="right"
                  width={70}
                  height={70}
                />
              </div>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>
    );
  };

  export default ProjectCard