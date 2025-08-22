import Carosel from "@/components/Carosel";
import Navbar from "@/components/Navbar";
import Money from "../../public/myImages/money.png";
import Clock from "../../public/myImages/clock.png";
import Man from "../../public/myImages/man.png";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import Head from "next/head";
import AVATAR_PIXEL from "../../public/myImages/Avatar pixel.png";
import LEFT_ARROW from "../../public/myImages/left-arrow-caro.png";
import RIGHT_ARROW from "../../public/myImages/right-arrow-caro.png";
import Footer from "./Footer";

const testimonials = [
  {
    name: "Ashfaq Ahmad",
    role: "Managing Director ",
    image: AVATAR_PIXEL,
    testimonial:
      "What I like about Zety resumes is their user-friendly interface and customization options. You can choose from 18 sleek templates and easily modify the design, layout, colors, and fonts to create a unique and professional-looking resume. Additionally, Zety offers pre-written content tailored to different job positions, saving users valuable time compared to crafting their resumes from scratch.",
  },
  {
    name: "Sarah Munir",
    role: "HR MANAGER",
    image: AVATAR_PIXEL,
    testimonial:
      "SharpDesk made it so easy for me to build a resume that stands out. The guided process ensures that all critical aspects of a resume are covered, and the templates are top-notch. I highly recommend it to anyone looking to land a job quickly.",
  },
  {
    name: "Daniyal ",
    role: "REGIONAL MANAGER",
    image: AVATAR_PIXEL,
    testimonial:
      "I was able to create a professional resume in no time with SharpDesk. The tips and suggestions were incredibly helpful, and the templates were exactly what I was looking for. It made my job search process much more manageable.",
  },
  {
    name: "Ali Irshad",
    role: "MARKETING SPECIALIST",
    image: AVATAR_PIXEL,
    testimonial:
      "The AI-driven resume builder from SharpDesk is a game-changer. It helped me tailor my resume to specific job applications with ease. I got multiple interview calls within a week after using it. Highly recommended!",
  },
  {
    name: "Danish",
    role: "SOFTWARE ENGINEER",
    image: AVATAR_PIXEL,
    testimonial:
      "I had been struggling to create a resume that truly represented my skills and experience. SharpDesk made it so simple and efficient. The end result was a polished, professional resume that I'm proud to share.",
  },
];

const services = [
  {
    title: "Valet Parking for Hotels & Restaurants",
    image: "/myImages/valet1.png", // replace with your own image path
    description: `Our group has executed flawless valet parking approach for endless hotels, restaurants, airports, and retail outlets. Every location has unique needs that Safe Car Valet Parking is ready to handle.`,
  },
  {
    title: "Premium Guest Experience",
    image: "/myImages/valet2.png",
    description: `Safe Car Valet Parking is experienced and committed to exceeding client expectations. We aim to represent your business with professionalism and leave a lasting impression.`,
  },
  {
    title: "Custom Parking Solutions",
    image: "/myImages/valet3.png",
    description: `Our service commitments are ever-expanding. If you have a specific request for your organization, let us know — we’re happy to tailor solutions to meet your valet needs.`,
  },
];
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  const { name, role, image, testimonial } = testimonials[currentSlide];
  return (
    <>
      <Head>
        {/* ✅ Canonical */}
        <link rel="canonical" href="https://www.scvplahore.com/" />

        {/* ✅ Title */}
        <title>
          Safe Car Valet Parking Lahore | Professional Valet Services
        </title>

        {/* ✅ Meta Description (160 chars) */}
        <meta
          name="description"
          content="Safe Car Valet Parking Lahore provides secure and professional valet services for hotels, restaurants, weddings, and events. Trusted by businesses and guests."
        />

        {/* ✅ Keywords */}
        <meta
          name="keywords"
          content="valet parking Lahore, safe car valet parking, valet services Lahore, hotel valet, restaurant valet, event valet Lahore, parking management Lahore"
        />
        <meta name="author" content="Safe Car Valet Parking" />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Safe Car Valet Parking Lahore" />
        <meta
          property="og:description"
          content="Professional valet parking services in Lahore for hotels, restaurants & events. Safe, Secure, and Affordable."
        />
        <meta
          property="og:image"
          content="https://www.scvplahore.com/myImages/valet1.png"
        />
        <meta property="og:url" content="https://www.scvplahore.com/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Safe Car Valet Parking Lahore" />
        <meta
          name="twitter:description"
          content="SCVP Lahore - Secure, professional, and reliable valet parking services."
        />
        <meta
          name="twitter:image"
          content="https://www.scvplahore.com/myImages/valet1.png"
        />

        {/* ✅ Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Safe Car Valet Parking Lahore",
              image: "https://www.scvplahore.com/myImages/valet1.png",
              url: "https://www.scvplahore.com",
              telephone: "+92-318-407-3284",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lahore",
                addressLocality: "Lahore",
                addressRegion: "Punjab",
                postalCode: "54000",
                addressCountry: "PK",
              },
              priceRange: "$$",
              openingHours: "Mo-Su 00:00-23:59",
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourpage",
              ],
            }),
          }}
        />
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <header className="">
          <Navbar />
        </header>

        <div>
          <Carosel />
        </div>

        <div className="mb-[10px]">
          <div className="my-10 grid grid-cols-12 gap-4  px-6 md:px-8 items-center">
            <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end mr-0 md:mr-[50px] ">
              <Image
                src="/myImages/testimage.png"
                alt="Background"
                width={600}
                height={370}
                className="w-full h-full md:w-[700px] md:h-[470px] rounded-md"
              />
            </div>
            <div className="col-span-12 md:col-span-6 text-left md:py-2">
              <span className="text-2xl md:text-5xl font-bold leading-tight block">
                Why Choose{"  "}
                <span className="text-black-600 border-b-4 border-blue-500 inline-block pb-1">
                  Us
                </span>
              </span>

              <p className="my-4 text-sm md:text-xl text-black-600">
                At Safe Car Valet Parking, we understand that your time,
                comfort, and vehicle safety are top priorities. That’s why we
                offer seamless, secure, and professional valet services you can
                depend on.
              </p>
              <p className="my-4 text-sm md:text-xl text-black-600">
                Whether you’re arriving at a corporate event, luxury hotel,
                private gathering, or a high-traffic location, our trained staff
                ensures a smooth and courteous handover every time.
              </p>
              <p className="my-4 text-sm md:text-xl text-black-600">
                With 24/7 support, real-time tracking options, and a
                customer-first approach, Safe Car Valet brings you convenience
                with peace of mind.
              </p>
              <p className="my-4 text-sm md:text-xl text-black-600">
                From private venues to large-scale commercial setups, our team
                is ready to serve you with professionalism, punctuality, and a
                smile.
              </p>
              <p className="my-4 text-sm md:text-xl text-black-600">
                Your car is in safe hands – that’s our promise.
              </p>

              <Link href="/about">
                <button className="mt-4 px-6 py-2 text-black-600 bg-blue-500 font-semibold border border-blue-500 hover:text-black-400 hover:bg-blue-100 transition duration-300 cursor-pointer">
                  Read More &gt;&gt;
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-blue-500 bg-image-resume md:mb-[50px] mt-[50px] lg:h-[377px]">
          <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 text-center"></div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-4 md:mx-8 lg:mx-20 my-[48px]">
            <div className="flex flex-col items-center">
              <Image src={Money} alt="resImg" />

              <span className="my-4 text-lg font-semibold text-white">
                Save Money
              </span>
              <span className="text-center font-normal text-base leading-[30px] text-white">
                Experience luxury parking made affordable — our valet service
                gives you comfort and savings
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Clock} alt="resImg" />
              <span className="my-4 text-lg font-semibold text-white">
                Save Time{" "}
              </span>
              <span className="text-center font-normal text-base leading-[30px] text-white">
                Time is precious — let us handle the parking while you focus on
                what truly matters
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Man} alt="resImg" />
              <span className="my-4 text-lg font-semibold text-white">
                Save Stress
              </span>
              <span className="text-center font-normal text-base leading-[30px] text-white">
                Behind every parked car is a professional you can trust — our
                valet staff delivers service with care and courtesy
              </span>
            </div>
          </div>
        </div>

        <div
          className="py-16"
          style={{
            backgroundImage: `url('/myImages/client-bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-[955px] mx-auto text-center px-4">
            <div className="font-semibold text-[40px] pt-[60px]">
              What Our Customer{" "}
              <span className="text-black-600 border-b-4 border-blue-600 inline-block pb-1">
                Say
              </span>
            </div>
            <div className="w-full bg-white rounded-3xl shadow-[0_4px_60px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800 mt-12 py-8">
              <Image
                className="w-[90px] h-auto text-gray-500 dark:text-gray-400 mb-5 mx-auto"
                src={image}
                height={90}
                width={90}
                alt="testimonial"
              />
              <span className="text-2xl font-medium text-gray-900 dark:text-white">
                {name}
              </span>
              <div className="mt-3">
                <span className="text-sm text-[#555370] font-normal">
                  {role}
                </span>
              </div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 mt-4 leading-relaxed px-4 lg:px-[48px]">
                {testimonial}
              </p>
              <div className="flex justify-center mt-5">
                {/* <Image src={socialImage} height={40} width={40} alt="social" /> */}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-12">
            <Image
              src={LEFT_ARROW}
              alt="left"
              className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
              height={56}
              width={56}
              onClick={prevSlide}
            />
            <Image
              src={RIGHT_ARROW}
              alt="right"
              className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
              height={56}
              width={56}
              onClick={nextSlide}
            />
          </div>
        </div>
        <section className="bg-white py-16 px-4 md:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Our{" "}
              <span className="text-black-600 border-b-4 border-blue-500 inline-block pb-1">
                Services
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Safe Car Valet Parking gives magnificent valet services with a
              focus on creating the ultimate client experience. Discover how we
              serve you and your guests.
            </p>
          </div>

          <div className="space-y-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start gap-6 border p-6 rounded-lg shadow-sm"
              >
                <div className="w-28 h-28 flex-shrink-0 border-2 border-dashed flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="/service">
                    <button className="border border-blue-700 text-blue-700 px-6 py-2 rounded hover:bg-blue-700 hover:text-white transition">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="fixed right-6 bottom-6 z-50">
          <div className="flex justify-center items-center rounded-full w-[70px] h-[70px] shadow-md hover:shadow-lg transition">
            <Image
              src="https://drive.google.com/uc?export=view&id=1_acUtitgK5-P0EFU5RYf_BfYX__zEwjB"
              alt="Scroll to Top"
              width={60}
              height={60}
              className="cursor-pointer hover:opacity-60 transition-opacity duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>
        </div>

        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
