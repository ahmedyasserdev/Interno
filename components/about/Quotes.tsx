import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";

const Quotes = () => {
  return (
    <section className="section-padding">
      <Container>
        <div>
          <div
            className="quotes flex-center  gap_2 mx-auto   flex-column text-center "
            style={{}}
          >
            <Image
              src="/icons/quotes.svg"
              alt="quotes"
              width={30}
              height={30}
            />
            <h3 className="text-3  fw-medium text-dark  fst-italic  w-75">
              I like an interior that defies labeling. I don't really want
              someone to walk into a room and know that I did it
            </h3>

            <p className="text-dark fw-normal text-2">-BUNNY WILLIAMS</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Quotes;
