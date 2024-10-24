// import localFont from "next/font/local";
import "./style/globals.css";
import "./style/custom.css"
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-[#F4F4F4]`}
      >
        <Menu />

        {children}

        <Footer/>
      </body>
    </html>
  );
}
