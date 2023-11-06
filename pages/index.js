import Image from "next/image";
import Services from "@/components/Services";
import HorizontalFeature from "@/components/HorizontalFeature";
import TestimonialCard from "@/components/TestimonialCard";
import Head from "next/head";

// Home component definition
export default function Home() {
  return (
    <>
      {/* Head section with metadata */}
      <Head>
        <title>Frontend Mentor | Sunnyside agency landing page</title>
        <meta
          name="description"
          content=" We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>

      {/* Main content of the page */}
      <main>
        {/* Hero section */}
        <section className="hero-section min-h-[667px] lg:min-h-screen w-full">
          <h1 className="hero-title text-center text-5xl pt-48 text-White uppercase font-fraunces tracking-widest leading-snug lg:text-6xl lg:pt-40">
            we are creatives
          </h1>
          <div className="arrow flex justify-center items-center mt-8 lg:mt-20">
            <Image
              src={"/icon-arrow-down.svg"}
              className="w-10"
              width={1080}
              height={1080}
              alt="down arrow"
            />
          </div>
        </section>

        {/* Horizontal feature sections */}
        <HorizontalFeature
          sectionImage={"/mobile/image-transform.jpg"}
          sectionTitle={"Transform your brand"}
          sectionInfo={
            "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          }
          underlineColor={"decoration-Yellow"}
          flexDirection={"lg:flex-row"}
        />
        <HorizontalFeature
          sectionImage={"/mobile/image-stand-out.jpg"}
          sectionTitle={"Stand out to the right audience"}
          sectionInfo={
            "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
          }
          underlineColor={"decoration-soft-red"}
          flexDirection={"lg:flex-row-reverse"}
        />

        {/* Services section */}
        <section className="services lg:flex ">
          {/* Graphic Design service */}
          <Services
            serviceTitle={"Graphic design"}
            serviceInfo={
              "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
            }
            largeImage={"md:bg-image-large"}
            smallImage={"sm:bg-image-small"}
            titleColor={"text-Dark-desaturated-cyan"}
            infoColor={"text-Dark-desaturated-cyan/90"}
          />
          {/* Photography service */}
          <Services
            serviceTitle={"Photography"}
            serviceInfo={
              "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
            }
            largeImage={"md:bg-image-large-1"}
            smallImage={"sm:bg-image-small-1"}
            titleColor={"text-Dark-blue"}
            infoColor={"text-Dark-blue/90"}
          />
        </section>

        {/* Testimonial section */}
        <section className="testimonial w-full min-h-screen flex flex-col justify-center items-center">
          <div className="section-heading ">
            <h2 className="text-center text-lg text-Grayish-blue font-fraunces uppercase tracking-widest lg:text-2xl lg:mb-8">
              Client Testimonials
            </h2>
          </div>
          {/* Testimonial cards */}
          <div className="testimonial-container lg:flex lg:px-36">
            <TestimonialCard
              clientImage={"/image-emily.jpg"}
              testimonial={
                "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
              }
              clientName={"Emily R."}
              clientWork={"Marketing Director"}
            />
            <TestimonialCard
              clientImage={"/image-jennie.jpg"}
              testimonial={
                "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
              }
              clientName={"Thomas S."}
              clientWork={"Chief Operating Officer"}
            />
            <TestimonialCard
              clientImage={"/image-thomas.jpg"}
              testimonial={
                "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
              }
              clientName={"Jennie F."}
              clientWork={"Business Owner"}
            />
          </div>
        </section>

        {/* Gallery section */}
        <section className="gallery-section grid grid-cols-2 lg:grid-cols-4">
          {/* Gallery images */}
          <Image
            className="h-44 lg:h-full"
            src={"/desktop/image-gallery-milkbottles.jpg"}
            alt="milk bottles"
            width={1024}
            height={1024}
            priority
          />
          <Image
            className="h-44 lg:h-full"
            src={"/desktop/image-gallery-orange.jpg"}
            width={1024}
            height={1024}
            priority
            alt="orange"
          />
          <Image
            className="h-44 lg:h-full"
            src={"/desktop/image-gallery-cone.jpg"}
            width={1024}
            height={1024}
            priority
            alt="cone"
          />
          <Image
            className="h-44 lg:h-full"
            src={"/desktop/image-gallery-sugarcubes.jpg"}
            width={1024}
            height={1024}
            priority
            alt="cubes"
          />
        </section>
      </main>
    </>
  );
}
