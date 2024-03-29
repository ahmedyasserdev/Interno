import { info } from '@/constants'
import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'

const Info = () => {
  return (
    <section className = "section-padding bg-light" >
        <Container>

                <Row>

                        {
                            info.map((item)   => (
                                <Col className = "info" key = {item.value}  xs= {6} lg = {3} >

                                        <Stack className = "text-center" >

                                            <h5 className="text-primary text-8 fw-bold">
                                                {item.value}
                                            </h5>

                                            <p className = " text-2 fw-normal text-dark text-capitalize" >{item.title}</p>

                                        </Stack>



                        
                                </Col>
            
                            ))
                        }



                </Row>





        </Container>



    </section>
  )
}

export default Info





