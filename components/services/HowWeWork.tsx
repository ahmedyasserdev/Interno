'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Col, Container, Image, Row } from 'react-bootstrap';
import HowWeWorkInfo from './HowWeWorkInfo';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';



const HowWeWork = () => {
    const desc = "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.";
    const delay = [0.1, 0.2]; 

    return (
        <section className="section-padding">
            <Container className="bg-light">
                <div className="flex-center flex-column gap-2 py-5">
                    <h2 className="text-4 text-dark fw-bold">How We Work</h2>
                    <p className="text-dark text-center" style={{ maxWidth: "60rem" }}>
                        It is a long established fact will be distracted. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                <div className="p-5 d-flex flex-column  gap-4">
                    <Row>
                        <HowWeWorkItem
                            imageSrc="/images/how-we-work-1.png"
                            delay={delay[0]}
                        />
                        <HowWeWorkItem
                            title="Concept & Details"
                            desc={desc}
                            icon="/icons/board.svg"
                            count="01"
                            delay={delay[1]}
                        />
                    </Row>
                    <Row>
                        <HowWeWorkItem
                            title="Idea for work"
                            desc={desc}
                            icon="/icons/tools.svg"
                            count="02"
                            delay={delay[1]}
                        />
                        <HowWeWorkItem
                            imageSrc="/images/how-we-work-2.png"
                            delay={delay[0]}
                        />
                    </Row>
                    <Row>
                        <HowWeWorkItem
                            imageSrc="/images/how-we-work-3.png"
                            delay={delay[0]}
                        />
                        <HowWeWorkItem
                            title="Design"
                            desc={desc}
                            icon="/icons/tools-2.svg"
                            count="03"
                            delay={delay[1]}
                        />
                    </Row>
                    <Row>
                        <HowWeWorkItem
                            title="Perfection"
                            desc={desc}
                            icon="/icons/steps.svg"
                            count="04"
                            delay={delay[1]}
                        />
                        <HowWeWorkItem
                            imageSrc="/images/how-we-work-4.png"
                            delay={delay[0]}
                        />
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default HowWeWork;




const HowWeWorkItem = ({ imageSrc, title, desc, icon, count, delay } : HowWeWorkItemProps) => {
    const { ref, controls } = useScrollAnimation();

    const variants = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -20 }
    };

    return (
        <Col md={6}>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ duration: 0.5, delay: delay }}
            >
                {imageSrc ? (
                    <Image src={imageSrc} alt="how we work" />
                ) : (
                    <HowWeWorkInfo title={title} desc={desc} icon={icon} count={count} />
                )}
            </motion.div>
        </Col>
    );
}