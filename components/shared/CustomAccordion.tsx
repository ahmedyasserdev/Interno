'use client'
import Accordion from "react-bootstrap/Accordion";
import {motion} from "framer-motion"
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const CustomAccordion = ({
  question,
  answer,
  eventKey,
}: CustomAccordionProps ) => {
  const { ref, controls, delay } = useScrollAnimation({index : Number(eventKey)});
  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 }
  };
  
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={variants}
    transition={{ duration: 0.5, delay }} 
    
    >
      <Accordion  flush>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Header>{question}</Accordion.Header>
          <Accordion.Body>
            <p>{answer}</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </motion.div>
  );
};

export default CustomAccordion;
