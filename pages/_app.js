import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Barlow } from "next/font/google";
import { Fraunces } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["600","800"],
  variable: "--font-barlow",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700","900"],
  variable: "--font-fraunces",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${barlow.variable} ${fraunces.variable}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </main>
  );
}
