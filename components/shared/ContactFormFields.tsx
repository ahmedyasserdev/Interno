import Image from "next/image";
import { Button, Form } from "react-bootstrap";

const ContactFormFields = ({ contactPage } : {contactPage : boolean} ) => {
    return (
      <Form
        className={`d-flex flex-column ${
          contactPage ? "gap_4" : "gap-4"
        }`}
      >
        <div className="d-flex align-items-center gap-3">
          <Form.Group controlId="name">
            <Form.Control
              className="input-field focus-ring focus-ring-light"
              type="text"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Control
              className="input-field focus-ring focus-ring-light"
              type="email"
              placeholder="Email"
            />
          </Form.Group>
        </div>
        {contactPage && (
          <div className="d-flex align-items-center gap-3">
            <Form.Group controlId="subject">
              <Form.Control
                className="input-field focus-ring focus-ring-light"
                type="text"
                placeholder="Subject"
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Control
                className="input-field focus-ring focus-ring-light"
                type="text"
                placeholder="Phone"
              />
            </Form.Group>
          </div>
        )}
        <Form.Group
          className="my-4"
          style={{ outline: "none" }}
          controlId="message"
        >
          <Form.Control
            className="input-field focus-ring focus-ring-light"
            placeholder="message"
            style={{ height: "150px" }}
            as="textarea"
          />
        </Form.Group>
        <Button
          variant={`dark button ${contactPage ? "ms-auto" : "mx-auto"} d-flex gap-3 align-items-center`}
          style={{ width: "max-content" }}
          type="submit"
        >
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
    );
  };
  
  export default ContactFormFields;
  