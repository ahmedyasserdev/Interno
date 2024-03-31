import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/sass/globals.scss";
import Header from "@/components/shared/Header";
import Template from "./template";
import Footer from "@/components/shared/Footer";


export const metadata: Metadata = {
  title: "Interno",
  description: "Find your dream property",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
          <body >
            
  <div className=" root" >
    <Header /> 
            <Template>
          <main className="flex-grow-1 " > 
            {children}
          </main>
            </Template>
            <Footer />
  </div>
      
          </body>
        </html>
  );
}
