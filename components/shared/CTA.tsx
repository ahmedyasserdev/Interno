import { Button, Container } from "react-bootstrap";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding">
      <Container className="container bg-dark  cta_container"
        style = {{
          borderRadius: "70px", 
        }}
      >
        <div className="flex-center flex-column gap-3 text-center">
          <h1 className="text-white display-2 fw-bold">
            Wanna join the interno?
          </h1>
          <p className="text-white">
            It is a long established fact will be distracted.
          </p>
          <Button variant="primary button text-white ">
            Contact with Us <ArrowRight size={24} className="ml-4 text-dark" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CTA;









