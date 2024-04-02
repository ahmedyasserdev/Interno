'use client'
import { aboutUsTeam } from "@/constants";
import { Col, Container, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { useScrollAnimation } from "@/hooks/useScrollAnimation"; // Import the custom hook
const variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -50 }
};
const PersonDetails = ({ person  ,} : PersonDetailsProps ) => {
  const { name, socials, email, number, job } = person;

  

  return (
    <div

      className="person_details flex-between gap-5 flex-column"
    >
      <div className="flex-center gap-1 flex-column">
        <h5 className="display-3 fw-bold text-dark">{name}</h5>
        <p className="text-capitalize text-gray-900">{job}</p>
      </div>

      <div className="d-flex align-items-center gap-4">
        {socials.map((icon) => (
          <Image key={icon} src={icon} alt="social" width={16} height={16} />
        ))}
      </div>

      <div className="text-gray-900 text-center">
        <p>
          {number} <br />
          {email}
        </p>
      </div>
    </div>
  );
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
          {aboutUsTeam.map((item , index) =>  { 
            const { ref, controls , delay } = useScrollAnimation({index});

            return (
            <Col key={item.image} md={6} lg={3}>
              <motion.div className="person_wrapper"
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={variants}
    transition={{ duration: 0.5, delay }} 
              
              >
                <div>
                  <Image
                    src={item.image}
                    alt={item.details[0].name}
                    width="88%"
                    height="85%"
                    className="object-fit-contain mx-auto"
                  />
                </div>
                <PersonDetails person={item.details[0]} index = {index}/>
              </motion.div>
            </Col>
 )})}
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
