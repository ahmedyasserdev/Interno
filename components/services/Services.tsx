import { services } from '@/constants'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Services = () => {
  return (
    <section className='section-padding' >
      <Container >
        <Row  >
          {
            services.slice(0,3).map((service , index) => (
              <Col md = {6} lg = {4}  key = {index} >
                <div className = " service flex-center flex-column gap_1 bg-white rounded-3 py-5 px-4 text-center" >
                  <h5 className='text-2 text-dark fw-bold  text-capitalize' >{service.title}</h5>
                  <p>{service.desc}</p>
                  <a  href = "#" className = "flex-center gap-4 text-capitalize text-2 text-dark" >
                    {service.link}
                    <Image src={'/icons/right-arrow.svg'} alt="right-arrow" width={"20"} height="20" className="object-fit-contain" />
                  </a>
                </div>
              </Col>
            ) )
          }

        </Row>
        <Row  >
          {
            services.slice(3).map((service , index) => (
              <Col md = {6} lg = {4}  key = {index} >
                <div className = " service flex-center  flex-column gap_1 bg-white rounded-3 py-5 px-4  text-center" >
                  <h5 className='text-2 text-dark fw-bold  text-capitalize' >{service.title}</h5>
                  <p>{service.desc}</p>
                  <a  href = "#" className = "flex-center gap-4 text-capitalize text-2 text-dark" >
                    {service.link}
                    <Image src={'/icons/right-arrow.svg'} alt="right-arrow" width={"20"} height="20" className="object-fit-contain" />
                  </a>
                </div>
              </Col>
            ) )
          }

        </Row>

      </Container>
    </section>
  )
}

export default Services