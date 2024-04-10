import FAQ1 from '@/components/faq/FAQ1'
import FAQ2 from '@/components/faq/FAQ2'
import PageHeader from '@/components/shared/PageHeader'
import React from 'react'

const page = () => {
  return (
    <>
        <PageHeader 
            title = "Faq&apos;s"
            subTitle='Home / FAQ'
            image='/images/FAQ-banner.png'
        
        />

       <FAQ1/>
      <FAQ2 />
    
    
    </>
  )
}

export default page