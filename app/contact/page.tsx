import ContactForm from '@/components/shared/ContactForm'
import PageHeader from '@/components/shared/PageHeader'
import React from 'react'

const page = () => {
  return (
    <>


      <PageHeader 
        title = "Contact Us"
        subTitle='Home / Contact'
        image = "/images/contact-banner.png"
      />

        <ContactForm 
            title = {'We love meeting new people and helping them.'}
            contactPage
        />
    </>
  )
}

export default page