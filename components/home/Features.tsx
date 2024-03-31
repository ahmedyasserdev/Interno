'use client'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { homeFeatures } from '@/constants'

const FeatureCard = ({ feature, index } : {feature : feature ; index : number}) => {
  const { ref, controls, delay } = useScrollAnimation({index}); 

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 }
  };

  return (
    <Col xs={"auto"} lg={4} className="justify-content-center text-center ">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5, delay }} 
      >
        <Stack gap={3}>
          <h5 className='text-2 fw-bold text-dark'>{feature.title}</h5>
          <p className="fw-light text-dark lh-base w-75 mx-auto">{feature.desc}</p>
          <a href="#" className="flex-center text-dark gap-3 text-2 fw-medium">
            {feature.link}
            <Image src={feature.icon} alt="right-arrow" width={20} height="20" className="object-fit-contain" />
          </a>
        </Stack>
      </motion.div>
    </Col>
  );
};

const Features = () => {
  return (
    <section className="section-padding">
      <Container>
        <Row className={`gap_4 ${homeFeatures.length > 3 ? "flex-wrap" : "flex-lg-nowrap"}`}>
          {homeFeatures.map((feature : feature, index : number ) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Features;
