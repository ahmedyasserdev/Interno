import { brands } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Brands = () => {
  return (
    <section className='section-padding'>
        <Container>
            <div className = " flex-between gap_2 flex-wrap" >
                {
                    brands.map((brand) => (
                        <div key = {brand.image} >
                            <Image  src = {brand.image} alt = {brand.alt} width = {116.71} height = {47.16}  />
                        </div>
                    ) )
                }

            </div>
        </Container>
    </section>
  )
}

export default Brands






