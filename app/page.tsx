import Features from "@/components/home/Features";
import Hero from "../components/home/Hero";
import GetFreeEstimate from "@/components/home/GetFreeEstimate";
import Testimonials from "@/components/home/Testimonials";
import Brands from "@/components/home/Brands";
import Projects from "@/components/shared/Projects";
import Info from "@/components/home/Info";
import ArticlesAndNews from "@/components/shared/ArticlesAndNews";
import CTA from "@/components/shared/CTA"
import { articlesAndNews } from "@/constants";
export default function Home() {
  return (
    <>
    <Hero />
    <Features />
    <GetFreeEstimate/>
    <Testimonials />
    <Brands />
    <Projects />
    <Info />
    <ArticlesAndNews data = {articlesAndNews.slice(0,3)}   />
    <CTA />
    </>
  );
}
