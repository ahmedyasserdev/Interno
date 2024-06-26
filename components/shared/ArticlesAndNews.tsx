'use client'
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { articlesAndNews } from "@/constants";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import Image from "next/image";
import {motion} from 'framer-motion'

const ArticlesAndNews = ({data , isBlog = false }   : {data : {}[] , isBlog? : boolean  } ) => {
  const [selectedCard, setSelectedCard] = useState<number>(1);

  const handleCardClick = (index: number) => {
    setSelectedCard(index === selectedCard ? 1 : index);
  };

  return (
    <section className="section-padding">
      <Container>

      <div className={` ${isBlog  ? "text-md-start " : "flex-center flex-column  gap_1" } text-center  mb-4`}>
          <h1 className=" text-4 text-dark fw-bold  ">Article & News</h1>
          {
            !isBlog && (
              <p
              className="text-dark fw-normal  "
              style={{ width: "45rem" }}
            >
              It is a long established fact that a reader will be distracted by
              the of readable content of page lookings at its layouts points.
            </p>
            ) 
          }
        </div>
        <Row>
          {data.map((item, index) => (
            <Col key={index} lg={4} md={6}>
              <AnimatedArticleCard
              //@ts-ignore
                item={item}
                index={index}
                selected={selectedCard === index}
                handleCardClick={handleCardClick}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const AnimatedArticleCard = ({ item, index, selected, handleCardClick } : AnimatedArticleCardProps) => {
  const { ref, controls, delay } = useScrollAnimation({index});

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
  };

  return (
    <motion.div ref={ref} style={{ width: "100%" }}
     //@ts-ignore
     initial="hidden"
     animate={controls}
     variants={variants}
     transition={{ duration: 0.5, delay }}
    >
      <Card
        className={`p-4 article__card ${selected ? 'bg-light' : ''}`}
        style={{ width: "95%" }}
        onClick={() => handleCardClick(index)}
       
      >
        <Card.Img variant="top" src={item.image} loading="lazy" className="object-fit-contain" />
        <Card.Body>
          <Stack gap={2}>
            <Card.Title className="flex-grow-1 text-dark fw-bold text-2">{item.title}</Card.Title>
           
          <div className="flex-between">
          <Card.Text>{item.date}</Card.Text>
          <Image  src = {'/icons/right-angel.svg'}   alt = "right angel" width = {55} height = {55} />
          </div>

          </Stack>
        </Card.Body>
        <div className="article__card-tag">
          <h6>{item.tag}</h6>
        </div>
      </Card>
    </motion.div>
  );
};

export default ArticlesAndNews;
