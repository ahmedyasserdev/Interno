import Image from 'next/image'
import React from 'react'
import { Button, Container, Stack } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className='hero section-padding' >
        <Container>
         
             <Stack className="  gap_1 text-center text-md-start mt-md-4 ">
                 <h1 className="text-5 fw-bold text-dark text-capitalize ">Let your home  <br /> be unique</h1>
                 <p className="text-dark text-2 fw-normal   width-400   lh-base">
                 There are many variations of the passages of
lorem Ipsum fromavailable, majority.
                 </p>
                 <Button  variant = "dark"  className = "   gap-4 button mx-auto  mx-md-0 ">
                   Get Started
                    <Image  src = "/icons/right-arrow.svg" alt = "arrow" width = {20} height = {20} className = "    object-fit-contain"  />
                        
                 </Button>
             </Stack>
        </Container>
    </section>
  )
}

export default Hero