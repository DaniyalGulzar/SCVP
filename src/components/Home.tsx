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
    role: "Hotel Manager",
    image: AVATAR_PIXEL,
    testimonial:
      "Safe Car Valet Parking provided outstanding service at our hotel. Their attendants were professional, courteous, and ensured our guests’ cars were handled with the utmost care. It truly elevated the hospitality experience for everyone.",
  },
  {
    name: "Sarah Munir",
    role: "Event Planner",
    image: AVATAR_PIXEL,
    testimonial:
      "I hired Safe Car Valet Parking for a corporate event, and I couldn’t be more satisfied. The team managed parking for hundreds of guests smoothly. Their reliability and professionalism gave us peace of mind throughout the event.",
  },
  {
    name: "Daniyal",
    role: "Wedding Organizer",
    image: AVATAR_PIXEL,
    testimonial:
      "We booked Safe Car Valet Parking for a wedding, and the service was flawless. Guests were impressed by the quick, safe, and organized valet system. It added a premium touch to the event and ensured everything ran seamlessly.",
  },
  {
    name: "Ali Irshad",
    role: "Restaurant Owner",
    image: AVATAR_PIXEL,
    testimonial:
      "Our restaurant partnered with Safe Car Valet Parking, and the difference was remarkable. Guests appreciated the convenience, and we noticed an improvement in overall customer satisfaction. Highly recommended for any business in Lahore.",
  },
  {
    name: "Danish",
    role: "Corporate Executive",
    image: AVATAR_PIXEL,
    testimonial:
      "Safe Car Valet Parking has become our go-to choice for corporate gatherings. Their staff is punctual, disciplined, and always dressed professionally. They make a lasting impression on our clients and employees every time.",
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Safe Car Valet Parking Lahore",
    image: "https://www.scvplahore.com/myImages/valet1.png",
    description:
      "Safe Car Valet Parking Lahore provides secure and professional valet services for hotels, restaurants, weddings, and events in Lahore, Pakistan.",
    url: "https://www.scvplahore.com",
    telephone: "+92-318-407-3284",
    email: "info@scvplahore.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Boulevard",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.5204",
      longitude: "74.3587",
    },
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    serviceArea: {
      "@type": "City",
      name: "Lahore",
    },
    services: [
      "Hotel Valet Parking",
      "Restaurant Valet Service",
      "Event Valet Parking",
      "Corporate Valet Services",
    ],
    sameAs: [
      "https://www.facebook.com/scvplahore",
      "https://www.instagram.com/scvplahore",
    ],
  };
  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>
          Safe Car Valet Parking Lahore | Professional Valet Services
        </title>
        <meta
          name="description"
          content="Safe Car Valet Parking Lahore provides secure and professional valet services for hotels, restaurants, weddings, and events. Trusted by businesses and guests across Lahore."
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.scvplahore.com/" />

        {/* Language and Charset */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en-PK" />
        <html lang="en" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="valet parking Lahore, safe car valet parking, valet services Lahore, hotel valet, restaurant valet, event valet Lahore, parking management Lahore, professional valet, secure parking"
        />

        {/* Author and Publisher */}
        <meta name="author" content="Safe Car Valet Parking" />
        <meta name="publisher" content="Safe Car Valet Parking Lahore" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Safe Car Valet Parking Lahore | Professional Valet Services"
        />
        <meta
          property="og:description"
          content="Professional valet parking services in Lahore for hotels, restaurants & events. Safe, Secure, and Affordable valet solutions."
        />
        <meta
          property="og:image"
          content="https://www.scvplahore.com/myImages/valet1.png"
        />
        <meta property="og:url" content="https://www.scvplahore.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Safe Car Valet Parking Lahore" />
        <meta property="og:locale" content="en_PK" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Safe Car Valet Parking Lahore | Professional Valet Services"
        />
        <meta
          name="twitter:description"
          content="SCVP Lahore - Secure, professional, and reliable valet parking services for hotels, restaurants, and events."
        />
        <meta
          name="twitter:image"
          content="https://www.scvplahore.com/myImages/valet1.png"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="application-name" content="Safe Car Valet Parking" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BGL2LD1VS6"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BGL2LD1VS6');
    `,
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
                depend on for any occasion.
              </p>

              <p className="my-4 text-sm md:text-xl text-black-600">
                Whether you’re arriving at a corporate event, luxury hotel,
                private gathering, wedding, or a high-traffic shopping
                destination, our trained staff ensures a smooth and courteous
                handover every time. We focus on leaving a positive first
                impression that reflects your standards of hospitality.
              </p>

              <p className="my-4 text-sm md:text-xl text-black-600">
                With 24/7 customer support, real-time vehicle tracking options,
                and a customer-first approach, Safe Car Valet brings you
                convenience with complete peace of mind. Our team is committed
                to providing not just parking, but a worry-free experience from
                start to finish.
              </p>

              <p className="my-4 text-sm md:text-xl text-black-600">
                From private venues and residential communities to large-scale
                corporate functions, commercial complexes, and entertainment
                events, our team is equipped with the expertise and resources to
                manage parking operations efficiently and professionally.
              </p>

              <p className="my-4 text-sm md:text-xl text-black-600">
                Every member of our staff is trained to handle vehicles of all
                makes and models with care and precision. We follow strict
                safety protocols and maintain comprehensive insurance coverage
                so that every client feels confident their vehicle is in safe
                hands.
              </p>

              <p className="my-4 text-sm md:text-xl text-black-600">
                Choosing Safe Car Valet Parking means choosing reliability,
                punctuality, and trust. Our goal is to go beyond simple valet
                services — we aim to enhance your guests’ overall experience and
                contribute to the success of your event or business.
              </p>

              <p className="my-4 text-sm md:text-xl text-black-600">
                Your car is in safe hands – that’s our promise, and it’s what
                sets us apart as Lahore’s leading valet parking service
                provider.
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
