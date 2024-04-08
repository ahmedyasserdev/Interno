import { Container , Image } from "react-bootstrap";

const LatestBlog = () => {
  return (
    <section className="section-padding">
      <Container>
      
        <div className="flex-center flex-column  gap-5">
            <h1 className="fw-bold text-4 text-capitlize text-start w-100 text-dark" >Latest Post</h1>
          <div className="flex-center  flex-column-reverse flex-md-row gap_5" >
          <div className="blog_hero" >
            <Image
              src="/images/kitchen-2.png"
              alt="kitchen"
              className="object-fit-contain"
            />
          </div>

        <div className = "d-flex  flex-column align-self-start gap_4 text-start justify-content-start  mt-md-5   blog_hero" > 
            <h3 className="text-2 fw-bold text-dark">
            Low Cost Latest Invented Interior <br /> Designing Ideas
            </h3>
     <div className="d-flex  flex-column gap_3 width-400" >
         <p>
         Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere  in.Contrary to popular belief.
      
         </p>
         <p className = "width-400" >
       Ipsum is not simply random text. It has roots in a piece of classica.
      
         </p>
      
     </div>

        <div className="flex-between">
          <p>
          26 December,2022 

          </p>
          <Image  src = {'/icons/right-angel.svg'}   alt = "right angel" width = {55} height = {55} />
          </div>


        </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default LatestBlog;


