'use client'
import { contactFormInfo, socials } from "@/constants";
import { Container, Form, Button } from "react-bootstrap";
import Image from "next/image";
import ContactInfoItem from "./ContactInfoItem";
import ContactFormFields from "./ContactFormFields";

const ContactForm = ({ title, contactPage = false }: ContactFormProps) => {
  return (
    <section className="section-padding">
      <Container>
        <div className="flex-center flex-column gap_2">
          <h2
            className={`${
              contactPage && "mb-5"
            } text-4 text-dark fw-bold text-center text-wrap width-400`}
          >
            {title}
          </h2>

        <div className = "flex-center  gap-5  flex-wrap " >
        {contactPage && (
            <div
              className="bg-light d-flex flex-column gap-5   align-self-md-start "
              style={{
                padding: "76px 32px",
                borderRadius: "50px",
              }}
            >
              {contactFormInfo.map((info, index) => (
                <ContactInfoItem key={index} info={info} />
              ))}

              <div className="slef-start d-flex align-items-center gap-5">
                {socials.map((social, index) => (
                  <SocialMediaItem key={index} social={social} />
                ))}
              </div>
            </div>
          )}

          <ContactFormFields contactPage={contactPage} />
        </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;


const SocialMediaItem = ({ social } : {social : {icon : string ; alt : string ;  } }) => {
  return (
    <Image
      src={social.icon}
      alt={social.alt}
      width={17}
      height={17}
    />
  );
};

