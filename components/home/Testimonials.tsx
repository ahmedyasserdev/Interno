'use client'

import Image from "next/image";
import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { testimonials } from "@/constants";

const TestimonialCard = ({ testimonial , index } :{ testimonial :  Testimonial , index : number }) => {
  const { ref, controls , delay } = useScrollAnimation({index});

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  };

  return (
    <Col  lg={4} sm={6} className="p-5 bg-white rounded-md">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.8  , ease : "easeInOut" , delay }}
      >
        <Stack className="gap_2">
          <div className="flex-center gap_2">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={77}
              height={77}
              className="object-fit-contain"
            />
            <Stack gap={1}>
              <h6 className="text-2 text-dark fw-bold">{testimonial.name}</h6>
              <p className="text-dark fw-normal">{testimonial.desc}</p>
            </Stack>
          </div>
          <p className="text-2 text-dark fw-medium w-75 lh-lg">
            {testimonial.review}
          </p>
        </Stack>
      </motion.div>
    </Col>
  );
};


const Testimonials = () => {
  return (
    <section className="section-padding">
      <Container className="bg-light rounded-lg p-5" >
        <div className="flex-center text-center">
          <h1 className="text-primary text-4 text-dark fw-bold py-5">
            What the People Thinks <br /> About Us
          </h1>
        </div>

        <Row className={`  gap-4 gap-md-2 gap-lg-4  mt-4 ${testimonials.length > 3 ? "flex-wrap" : "flex-lg-nowrap"}`}>
          {testimonials.map((testimonial  : Testimonial , index : number ) =>   (
            <TestimonialCard key={testimonial.image} index = {index} testimonial={testimonial} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
