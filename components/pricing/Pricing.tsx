'use client'
import { Button, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { pricingPlans } from "@/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Pricing = () => {
  return (
    <section className="section-padding">
      <Container>
        <Row className="gap-4 gap-md-0">
          {pricingPlans.map((plan ,index) => (
            <PricingPlan key={plan.title} plan={plan} index = {index}  />
          ))}
        </Row>
      </Container>
    </section>
  );
};

const PricingPlan = ({ plan , index } : PricingPlanProps ) => {
  const { ref, controls, delay } = useScrollAnimation({index});

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
  };

  return (
    <Col md={6} lg={4}>
      <motion.div
        className="flex-center flex-column gap-4 bg-light px-2"
        style={{ borderRadius: "33px", paddingBlock: "64px" }}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.8, delay }}
      >
        <h5 className="text-3 fw-bold text-dark text-capitalize">
          {plan.title}
        </h5>
        <h3 className="fw-bold text-dark text-center text-2">
          $ <span className={`text-7 ${plan.isPopular ? "text-primary" : "text-dark"}`}>
            {plan.price}
          </span>
          <br />
          /month
        </h3>
          <div className="most_popular-wrapper" style={{ backgroundColor: plan.isPopular ?  "#292f36" :   "#cda274"}}>
        {plan.isPopular && (
            <div className="most_popular">
              <p className="text-white fw-bold flex-center lh-sm">Most Popular Plans</p>
            </div>
        )}
          </div>
        <div className="flex-center flex-column gap-2">
          {plan.features.map((feature, index) => (
            <p className="text-2 fw-normal text-gray-900" key={index}>{feature}</p>
          ))}
        </div>
        <Button variant={plan.isPopular ? "dark" : "primary"} className="button text-white text-capitalize d-flex align-items-center gap-2 fw-medium">
          {plan.action}
          <ArrowRight size={20} className={plan.isPopular ? "text-primary" : "text-dark"} />
        </Button>
      </motion.div>
    </Col>
  );
};

export default Pricing;
