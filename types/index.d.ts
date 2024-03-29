type Testimonial = {
        name: string;
        image: string;
        desc: string;
        review: string;
};


type feature = {
    title : string ;
    desc : string ;
    icon : string ;
    link : string ;
}

type Project = {
    title: string;
    desc: string;
    image: string;
  };
  
  type ProjectCardProps = {
    project: Project;
    index: number;
  };

  type Article = {
    title : string ;
    image : string ;
    tag : string ;
    date : string ;
  }


  type AnimatedArticleCardProps = {
    item: Article;
    index: number;
    selected: boolean;
    handleCardClick: (index: number) => void;
  };
  