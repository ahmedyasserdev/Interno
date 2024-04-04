type Testimonial = {
  name: string;
  image: string;
  desc: string;
  review: string;
};

type feature = {
  title: string;
  desc: string;
  icon: string;
  link: string;
};

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
  title: string;
  image: string;
  tag: string;
  date: string;
};

type AnimatedArticleCardProps = {
  item: Article;
  index: number;
  selected: boolean;
  handleCardClick: (index: number) => void;
};

type PageHeaderProps = { subTitle: string; title: string; image: string };

type PersonDetailsProps = {
  person : {

    name: string;
    socials: string[];
    email: string;
    number: string;
    job: string;
  };
  index : number;
};


type HowWeWorkInfoProps = {
  title : string  | undefined ;
  count : string  | undefined ;
  desc : string  | undefined ;
  icon : string  | undefined ;

}

type HowWeWorkItemProps  = {
  title?: string ;
  count?: string ;
  desc?: string ;
  icon?: string ;
  imageSrc?: string ;
  delay?: number ;
}