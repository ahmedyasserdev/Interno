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
  type?: string;
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
type Person = {
  person: {
    image: string;
    details: {
      name: string;
      job: string;
      socials: string[];
      number: string;
      email: string;
    }[];
  };
  index: number;
};

type PersonDetailsProps = {
  person: {
    name: string;
    job: string;
    socials: string[];
    number: string;
    email: string;
  };
  index: number;
};
type HowWeWorkInfoProps = {
  title: string | undefined;
  count: string | undefined;
  desc: string | undefined;
  icon: string | undefined;
};

type HowWeWorkItemProps = {
  title?: string;
  count?: string;
  desc?: string;
  icon?: string;
  imageSrc?: string;
  delay?: number;
};

type PricingPlanProps = {
  plan: {
    isPopular?: boolean;
    title: string;
    price: string;
    features: string[];
    action: string;
  };
  index: number;
};

type ProjectTypesProps = {
  types: string[];
  selectedType: string;
  handleUpdateSearchParams: (type) => void;
  searchParams: { type: string };
};
type ContactFormProps = { title: string; contactPage?: boolean };


type CustomAccordionProps = 

{
  question: string;
  answer: string;
  eventKey: string;
}