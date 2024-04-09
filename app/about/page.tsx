import AboutUs from '@/components/about/AboutUs'
import Quotes from '@/components/about/Quotes'
import Result from '@/components/about/Result'
import WhatWeDo from '@/components/about/WhatWeDo'
import ContactForm from '@/components/shared/ContactForm'
import PageHeader from '@/components/shared/PageHeader'
import React from 'react'

const page = () => {
  return (
    <>
    <PageHeader image = "/images/about-banner.png" title = "about us"  subTitle='Home / About us' />
    <Quotes />
    <WhatWeDo />
   <Result />
   <AboutUs />
   <ContactForm
    title = "Creative project? Let's have a productive talk."
   />
    </>
  )
}

export default page