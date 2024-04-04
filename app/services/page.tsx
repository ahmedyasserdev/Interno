import HowWeWork from '@/components/services/HowWeWork'
import Services from '@/components/services/Services'
import CTA from '@/components/shared/CTA'
import PageHeader from '@/components/shared/PageHeader'
import React from 'react'

const page = () => {
  return (
    <>
        <PageHeader  title = "Services" image = "/images/services-banner.png" subTitle='Home / Services' />
        <Services />
        <HowWeWork />
        <CTA />
    </>
  )
}

export default page