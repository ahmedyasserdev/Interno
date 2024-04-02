'use client'
import { Button, Col, Container, Image,  Row } from "react-bootstrap";
import {motion} from "framer-motion"
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
const WhatWeDo = () => {
  const { ref, controls, delay } = useScrollAnimation(); 
  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 }
  };
  return (
    <section className="py-5">
      <Container>
        <Row className = "gap-5 gap-md-0" >
          <Col md={6} className=" text-center text-md-start ">
         <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5, delay }} 
      >
             <h2 className="text-4 text-dark fw-bold">What We Do</h2>
        
             <p className="fw-normal my-4 w-75 mx-auto mx-md-0">
               It is a long established fact that a reader will be distracted by
               the of readable content of a page when lookings at its layouts the
               points of using that it has a more-or-less normal.
             </p>
        
             <Button variant="dark button d-flex gap-3 align-items-center mx-auto mx-md-0">
               Our Concept
               <Image
                 src={"/icons/right-arrow.svg"}
                 width={19}
                 height={19}
                 className="object-fit-contain"
                 alt="right arrow"
               />
             </Button>
       </motion.div>
          </Col>

      <Col  md = {6} >

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5, delay }} 
      >


        <Image 
          src = "/images/wooden-room.png"
          alt = " wooden room"
          className="object-fit-contain"
/>
          </motion.div>
      </Col>

        </Row>
      </Container>
    </section>
  );
};

export default WhatWeDo;
