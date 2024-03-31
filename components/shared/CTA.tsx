
import { Button, } from "react-bootstrap";
import { ArrowRight } from "lucide-react";
const CTA = () => {
  return (
<section className="section-padding d-none d-lg-block">
        <div
          className="container  bg-dark"
          style={{ borderRadius: "70px", padding: "8rem 30.15rem" }}
        >
       <div className = "  flex-center flex-column gap_1 text-center w-100" >
           <h1 className="text-white text-4 fw-bold">Wanna join the interno?</h1>
           <p className="text-white ">
             It is a long established fact will be distracted.
           </p>
           <Button variant="primary button text-white ">
             Contact with Us
             <ArrowRight size={28} className="text-dark ml-4" />
           </Button>
       </div>
        </div>
      </section>
  )
}

export default CTA