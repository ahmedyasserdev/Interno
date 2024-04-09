import PageHeader from '@/components/shared/PageHeader'
import PersonCard from '@/components/shared/PersonCard'
import { team } from '@/constants'
import React from 'react'
import { Container , Row } from 'react-bootstrap'

const page = () => {
  return (
    <>
        <PageHeader 
            title = "Our Professional"
            subTitle='Home / Team'
            image = "/images/team-banner.png"
        />


        <section className = "section-padding" >
            <Container>
            <Row  
                
            >
                {
                    team.map((person , index ) => (
                        <PersonCard  person = {person} index = {index}  />
                    ) )
                }
            </Row>


            </Container>
        </section>
    
    </>
  )
}

export default page