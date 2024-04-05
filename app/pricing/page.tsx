import Pricing from '@/components/pricing/Pricing'
import PageHeader from '@/components/shared/PageHeader'
import React from 'react'

const page = () => {
  return (
    <>

        <PageHeader 
            title = "Pricing & Plan"
            subTitle='Home / Pricing'
            image='/images/pricing-banner.png'
        
        />

        <Pricing />


    </>
  )
}

export default page