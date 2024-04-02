import Image from "next/image";
import React from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";

const GetFreeEstimate = () => {
  return (
    <section className="section-padding free_estimate">
      <Container>
        <Row className = "gap_2 flex-lg-nowrap"  >
          <Col lg={6} className = "postion-relative z-1 " >
            <Stack className = "gap_3" >
              <h2 className="text-dark text-4 fw-bold">
                We Create The Art Of Stylish Living Stylishly
              </h2>

              <p className="text-dark fw-light lh-base   w-75  mw-100  ">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>

                <div className="d-flex align-items-center  justify-content-center  gap_1  ">
                    <Image  src =  {'/icons/call.svg'}  alt = "call " width = {75} height = {75} className = "object-fit-contain" />

                    <Stack className  = "mt-3"  >
                        <p className="text-3 fw-bold text-dark">
                            12345678
                        </p>
                        <p className="text-dark text-2 fw-lg">Call Us Anytime</p>
                    </Stack>



                </div>


                



            </Stack>
            <Button  variant = "dark"  className = "  mt-5  gap-4 button w-auto  ">
                   Get  Free Estimate
                    <Image  src = "/icons/right-arrow.svg" alt = "arrow" width = {20} height = {20} className = "    object-fit-contain"  />
                        
                 </Button>
          </Col>


            <Col  lg  = {6}  className = "d-none d-md-block ">
                <Image  className = "object-fit-contain" src = {"/images/kitchen.svg"} alt = "kitchen" width = {653}  height = {700}   />
            </Col>


        </Row>
      </Container>
    </section>
  );
};

export default GetFreeEstimate;






