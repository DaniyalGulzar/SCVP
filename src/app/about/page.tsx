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
              Safe Car Valet Parking is more than just a service — we are a
              dedicated team of professionals committed to providing top-tier
              valet parking solutions that prioritize safety, efficiency, and
              customer satisfaction. Our company was founded on the principles
              of trust, respect, and excellence.
            </p>
            <p>
              Our staff is made up of highly motivated, educated young
              professionals, including college graduates and industry trainees.
              Through rigorous training and hands-on experience, our team
              continually hones their skills to meet the ever-evolving demands
              of the hospitality and parking industry.
            </p>
            <p>
              At Safe Car Valet Parking, we understand that a valet experience
              is often the first impression a client or guest has of your
              establishment. That’s why we place immense importance on
              professionalism and courtesy in every interaction.
            </p>
            <p>
              Safety is a cornerstone of our service. We follow strict protocols
              and best practices to ensure that every vehicle entrusted to us is
              handled with the utmost care and security.
            </p>
            <p>
              Our management team brings years of experience and leadership,
              guiding our employees to continually improve and innovate our
              services. We are committed to personal and professional growth,
              providing ongoing training and opportunities for advancement.
            </p>
            <p>
              Integrity and transparency are values we hold dear. Whether you
              operate a hotel, restaurant, event venue, or corporate office, we
              tailor our valet services to suit your unique requirements.
            </p>
            <p>
              Choosing Safe Car Valet Parking means choosing peace of mind and
              excellence. We aim to create lasting positive impressions — not
              just through exceptional service but also by being a dependable
              extension of your team.
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
