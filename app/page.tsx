import Features from "@/components/home/Features";
import Hero from "../components/home/Hero";
import GetFreeEstimate from "@/components/home/GetFreeEstimate";
import Testimonials from "@/components/home/Testimonials";
import Brands from "@/components/home/Brands";
import Projects from "@/components/home/Projects";
import Info from "@/components/home/Info";
import ArticlesAndNews from "@/components/home/ArticlesAndNews";

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
    <ArticlesAndNews />
    </>
  );
}
