// import localFont from "next/font/local";
import "./style/globals.css";
import "./style/custom.css"
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";


export const metadata = {
  title: "IT services",
  description: "We provide It services",
};

 function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-[#FCFCFC] overflow-x-hidden w-full `}
      >
        <Menu />

        {children}

        <Footer/>
      </body>
    </html>
  );
}
export default RootLayout