import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { footerPages, footerServices, socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      

      <section className="p-3">
        <div className="container">
          <Row className = "justify-content-between gap-lg-5 flex-lg-nowrap " >
            <Col md={6} lg={3} className = " mb-5 mb-md-0"   >
              <Logo />
              <p className="text-dark my-4 w-100  text-2"  >
                It is a long established fact that a reader will be distracted
                lookings.
              </p>

              <div className="d-flex align-items-center justify-content-start gap_3  justify-content-lg-between w-75">
                {socials.map((social) => (
                  <a href="#" key={social.icon}>
                    <Image
                      src={social.icon}
                      alt={social.alt}
                      width={17}
                      height={33}
                      className="object-fit-contain"
                    />
                  </a>
                ))}
              </div>
            </Col>


            <Col xs={6} lg={3}   >
                  {
                    footerPages.map((item , index ) => (
                      <div key = {index}  >

                         <ul className = "d-flex flex-column gap_3 text-start   align-items-start"
                         >
                                <li className="text-dark  fw-bold " style = {{fontSize : "2.4rem"}}>
                          {item.title}
                        </li>
                         {
                            item.pages.map((page) => (
                              <li className= "text-2 text-capitalize" key = {page.route}>
                                <Link href = {`${page.route}`} className = "text-dark" >{page.label}</Link>
                              </li>
                            ) )
                          }
                         </ul>

                      </div>
                    ) )
                  }



            </Col>


            <Col xs={6} lg={3}   >
                   

                         <ul className = "d-flex flex-column gap_3 text-start   align-items-start" 
                         >
                                <li className="text-dark  fw-bold " style = {{fontSize : "2.4rem"}}>
                         Services
                        </li>
                         {
                           footerServices.map((item , index ) => (
                              <li  key = {index}  className= "text-2 text-capitalize text-dark" >
                               {item}
                              </li>
                        
                        ) )
                      }

                      </ul>

</Col>


                        <Col  className = " mt-5 mt-lg-0" md = {6} lg = {3}>
                          <div className = "d-flex align-items-start text-start gap_2 flex-column " >
                        <h5 className="text-dark  fw-bold " style = {{fontSize : "2.4rem"}} >Contact </h5>
                          <p className="text-dark" >
                          55 East Birchwood Ave. Brooklyn, New York 11201 
                          </p>

                          <p className="text-dark" >
                          contact@interno.com
                          </p>
                         
                         <p className="text-dark" >
                         (123) 456 - 7890
                         </p>
                         
                          </div>


                        </Col>
                        


          </Row>
        </div>
      </section>
    </>
  );
};

export default Footer;






