'use client'
import { team } from "@/constants";
import { Col, Container, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { useScrollAnimation } from "@/hooks/useScrollAnimation"; // Import the custom hook
import PersonCard from "../shared/PersonCard";
const variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -50 }
};

const AboutUs = () => {

  return (
    <section className="py-5">
      <Container className="bg-light section-padding">
        <div className="flex-center">
          <h2 className="text-4 text-dark fw-bold text-center">
            What People Think <br /> About Us
          </h2>
        </div>

        <Row className="mt-5 px-3 gap-5 gap-lg-0 justify-content-center">
        {team.slice(0,4).map((item, index) => (
            <PersonCard key={item.image} person={item}  index = {index}/>
          ))}
      
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
