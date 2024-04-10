'use client'
import { Container , Image } from "react-bootstrap"
import CustomAccordion from "../shared/CustomAccordion"
import { faqs2 } from "@/constants"
const FAQ2 = () => {
  return (

    <section className="section-padding">
    <Container>
        <div className="flex-center">
            <h2 className="text-4 text-dark fw-bold">
               Project Related Quetions
            </h2>
        </div>


        <div className = "flex-center  gap_4  flex-column-reverse flex-lg-row   "
            style = {{
                marginTop : "7rem"
            }}
        >
       

       
            <div className="faq" >
                <Image 
                    src = "/images/sofa.png"
                    alt = "sofa"
                    width = {555}
                    height  = {678}

                />
            </div>










            <div className="faq align-self-lg-start pt-lg-5 " >

<div className="d-flex flex-column  gap_4" >

{
            faqs2.map((item , index) => (
                <CustomAccordion 
                key = {index}
                question = {item.title}
                answer={item.answer}
                eventKey= {String(index)}
/>
            ) )
        }

</div>

</div>
   


            

        </div>

    </Container>
</section>


)
}

export default FAQ2