// ServiceSection.tsx

"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Carosel from "@/components/Carosel";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Hotel Valet Parking",
    image: "/myImages/keys.png",
    description:
      "Ensure a premium welcome experience for your guests with efficient and professional hotel valet services. Our well-trained team manages all parking logistics seamlessly, allowing hotel staff to focus on hospitality. We prioritize safety, convenience, and guest satisfaction every time.",
  },
  {
    title: "Restaurant Valet Parking",
    image: "/myImages/keys.png",
    description:
      "Impress your diners with smooth and stylish valet services that complement fine dining. Our courteous attendants provide a hassle-free parking experience from arrival to departure. This ensures your guests can fully enjoy their meals without parking concerns.",
  },
  {
    title: "Event Parking Management",
    image: "/myImages/keys.png",
    description:
      "Streamline traffic flow and reduce wait times with expert valet support for private and public events. We create customized parking solutions to match the scale and layout of your venue. Your guests will arrive and leave with ease and professionalism.",
  },
  {
    title: "Corporate Valet Services",
    image: "/myImages/keys.png",
    description:
      "Deliver a professional first impression at your workplace with our tailored valet solutions. Our discreet and polished team reflects your company’s image while ensuring efficient parking operations. Perfect for meetings, conferences, and daily operations.",
  },
  {
    title: "Shopping Mall Valet",
    image: "/myImages/keys.png",
    description:
      "Provide convenience and safety to your mall visitors with our courteous parking attendants. We offer smooth entry and exit services, reducing congestion and enhancing visitor satisfaction. Make your mall a premium destination with added comfort.",
  },
  {
    title: "Airport Valet Parking",
    image: "/myImages/keys.png",
    description:
      "Simplify travel for your guests with drop-and-go valet services right at the terminal. Our trained staff ensures timely handling of cars, allowing passengers to focus on their journey. Safe, reliable, and fast parking for a stress-free travel start.",
  },
  {
    title: "Hospital Valet Parking",
    image: "/myImages/keys.png",
    description:
      "Support patients and visitors with a stress-free parking solution at healthcare facilities. Our team is trained for sensitivity and quick service in medical environments. We help reduce the burden during emergencies and routine appointments alike.",
  },
  {
    title: "Luxury Car Valet",
    image: "/myImages/keys.png",
    description:
      "Handle high-end vehicles with the care and professionalism they deserve. Our specialized valet team is trained to manage luxury, sports, and exotic cars with the utmost attention. Trust us to deliver security, discretion, and elegance.",
  },
  {
    title: "Private Party Valet",
    image: "/myImages/keys.png",
    description:
      "Add sophistication and ease to your private gatherings with reliable valet services. From birthdays to backyard weddings, we manage your guests' arrivals with elegance. Focus on your event while we handle the parking from start to finish.",
  },
  {
    title: "Residential Community Valet",
    image: "/myImages/keys.png",
    description:
      "Secure and manage parking efficiently for gated communities and high-rise residences. Our valet services reduce congestion and improve visitor experience. Residents enjoy added convenience and safety through consistent and courteous service.",
  },
  {
    title: "Nightclub & Lounge Valet",
    image: "/myImages/keys.png",
    description:
      "Enhance your nightlife experience with stylish valet drop-offs and pickups. We ensure guests arrive in style and leave without worrying about parking. Our team is fast, efficient, and trained for high-traffic entertainment environments.",
  },
  {
    title: "Wedding Valet Services",
    image: "/myImages/keys.png",
    description:
      "Give your wedding guests a grand and seamless arrival with elegant valet arrangements. From ceremony to reception, we manage parking with grace and attention. Let us make your special day even smoother with a touch of luxury.",
  },
];

const ServiceSection = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header>
        <Navbar />
      </header>

      <Carosel />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">Services</h2>
          <p className="text-xl mt-4 text-gray-700">Our Valet Services</p>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            We deliver excellent valet services for every client need with
            guaranteed satisfaction.
          </p>
        </section>

        <section className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 border border-gray-200 p-6 rounded-lg shadow-sm bg-white hover:shadow-md transition duration-300"
            >
              <div className="w-28 h-28 flex-shrink-0 border-2 border-dashed flex justify-center items-center rounded-md bg-gray-50">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

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
};

export default ServiceSection;
