"use client";
import { Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import PersonDetails from "./PersonDetails";

const PersonCard = ({ person, index }: Person) => {
  const { ref, controls, delay } = useScrollAnimation({index});
  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 }
  };
  
  return (
    <Col md={6} lg={3}>
      <motion.div
        className="person_wrapper py-4"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5, delay }} 
      >
        <div>
          <Image
            src={person.image}
            alt={person?.details[0].name}
            width="88%"
            height="85%"
            className="object-fit-contain mx-auto"
          />
        </div>

        <PersonDetails
          person={person?.details[0]}
          index={index}
        />
      </motion.div>
    </Col>
  );
};

export default PersonCard;
