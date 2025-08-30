"use client";

import Carosel from "@/components/Carosel";
import Footer from "@/components/Footer";
import Motiondiv from "@/components/Motiondiv";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const imageData = [
  {
    src: "/myImages/about_valet1.png",
    heading: "Parking 1",
    orientation: "horizontal", // 👈 Add this
  },
  {
    src: "/myImages/about_valet2.png",
    heading: "Parking 2",
    orientation: "vertical",
  },
  {
    src: "/myImages/about_valet3.png",
    heading: "Parking 3",
    orientation: "horizontal",
  },
  {
    src: "/myImages/about_valet4.png",
    heading: "Parking 4",
    orientation: "vertical",
  },
  {
    src: "/myImages/about_valet5.png",
    heading: "Parking 5",
    orientation: "horizontal",
  },
  {
    src: "/myImages/about_valet6.png",
    heading: "Parking 6",
    orientation: "vertical",
  },
  {
    src: "/myImages/about_valet7.png",
    heading: "Parking 7",
    orientation: "horizontal",
  },
  {
    src: "/myImages/about_valet8.png",
    heading: "Parking 8",
    orientation: "vertical",
  },
  {
    src: "/myImages/about_valet9.png",
    heading: "Parking 9",
    orientation: "horizontal",
  },
  {
    src: "/myImages/about_valet10.png",
    heading: "Parking 10",
    orientation: "vertical",
  },
  {
    src: "/myImages/about_valet11.png",
    heading: "Parking 11",
    orientation: "horizontal",
  },
  {
    src: "/myImages/about_valet12.png",
    heading: "Parking 12",
    orientation: "vertical",
  },
];

// Sort: horizontal first, then vertical
const sortedImageData = [
  ...imageData.filter((img) => img.orientation === "horizontal"),
  ...imageData.filter((img) => img.orientation === "vertical"),
];

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header>
        <Navbar />
      </header>

      <div>
        <Carosel />
      </div>

      <div className="min-h-screen bg-gray-50 px-4 md:px-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-gray-800">
          <h2 className="text-4xl font-bold mb-4">About</h2>
          <h3 className="text-3xl font-bold mb-8 text-blue-700">
            Professional Service: You Can Trust.
          </h3>

          <div className="text-justify leading-relaxed space-y-6 text-[17px]">
            <p>
              Safe Car Valet Parking Lahore is more than just a service — it is
              a complete hospitality experience designed to provide safety,
              convenience, and professionalism at every level. We specialize in
              valet parking for hotels, restaurants, weddings, private parties,
              exhibitions, corporate offices, and special events across Lahore.
            </p>
            <p>
              Our company was founded on the principles of trust, respect, and
              excellence. Over the years, we have built a reputation for
              reliability and outstanding customer service. Every guest we serve
              is welcomed with professionalism, courtesy, and care, ensuring
              their first impression of your venue is nothing short of
              exceptional.
            </p>
            <p>
              Our team is made up of highly motivated, educated young
              professionals, including graduates and industry trainees. Each
              valet attendant undergoes intensive training in guest interaction,
              vehicle handling, and safety management. Through hands-on
              experience, our staff continually adapts to the evolving needs of
              the hospitality and parking industry.
            </p>
            <p>
              Safety is the cornerstone of our service. We follow strict
              protocols and best practices to ensure that every vehicle
              entrusted to us is handled with the utmost care. With real-time
              vehicle tracking, comprehensive insurance coverage, and 24/7
              support, we provide complete peace of mind to our clients and
              their guests.
            </p>
            <p>
              Our management team brings years of leadership and industry
              experience. They are committed to innovation, introducing modern
              systems and eco-friendly practices to make valet operations
              smoother and more efficient. We believe in personal and
              professional growth, offering continuous training and advancement
              opportunities to our employees.
            </p>
            <p>
              Integrity and transparency are values we live by. Whether you
              operate a hotel, restaurant, corporate office, or event venue, we
              tailor our valet services to match your unique requirements. No
              matter the scale — from small private gatherings to high-profile
              corporate events — we deliver the same standard of excellence.
            </p>
            <p>
              Choosing Safe Car Valet Parking means choosing a dependable
              partner. We aim to create lasting positive impressions, not only
              through seamless parking management but also by being a trusted
              extension of your team. Our mission is to be Lahore’s most
              reliable valet parking service provider, setting new standards in
              safety, service, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <Motiondiv imageData={sortedImageData} />
        </div>
      </div>

      {/* Scroll to top button */}
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

      <Footer />
    </div>
  );
}
