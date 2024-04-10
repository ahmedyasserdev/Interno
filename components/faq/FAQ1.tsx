"use client";
import { Container, Image } from "react-bootstrap";
import CustomAccordion from "../shared/CustomAccordion";
import { faqs1 } from "@/constants";
const FAQ1 = () => {
    
  return (
    <section className="section-padding">
      <Container>
        <div className="flex-center">
          <h2 className="text-4 text-dark fw-bold">Every Answered Question</h2>
        </div>

        <div
          className="flex-center  gap_4  flex-column flex-lg-row   "
          style={{
            marginTop: "7rem",
          }}
        >
          <div className="faq align-self-lg-start pt-lg-5 ">
            <div className="d-flex flex-column  gap_4">
              {faqs1.map((item, index) => 
             {

                 return(
                 
                        <CustomAccordion
                     key={index}
                     question={item.title}
                     answer={item.answer}
                     eventKey={String(index)}
                
                     />
              )})}
              
            </div>
          </div>

          <div className="faq">
            <Image
              src="/images/living-room.png"
              alt="living room"
              width={555}
              height={678}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ1;
