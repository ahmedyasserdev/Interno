"use client";
import Image from "next/image";
import { Container, Button, Form } from "react-bootstrap";
const ContactForm = () => {
  return (
    <section className="section-padding">
      <Container>
        <div className="flex-center flex-column gap_2">
          <h2 className="text-4 text-dark fw-bold text-center">
            Creative project? Let's have <br />a productive talk.
          </h2>

          <Form className="d-flex flex-column gap-4 ">
            <div className="d-flex align-items-center gap-3">
              <Form.Group  controlId="name">
                <Form.Control
                  className="input-field focus-ring  focus-ring-light"
                  type="text"
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group  controlId="email">
                <Form.Control 
                className="input-field focus-ring  focus-ring-light"
                type="email" placeholder="Email" />
              </Form.Group>
            </div>

            <Form.Group className="my-4" style = {{outline : 'none'}} controlId="message">
              <Form.Control 

              className = "input-field focus-ring  focus-ring-light" 
                placeholder = "message"
              style = {{height  : "150px",}} as="textarea" />
            </Form.Group>

            <Button variant="dark button mx-auto d-flex gap-3 align-items-center " style = {{width : "max-content"}}  type="submit">
              Send Now
              <Image
               src={"/icons/right-arrow.svg"}
               width={19}
               height={19}
               className="object-fit-contain"
               alt="right arrow"
             />

            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
