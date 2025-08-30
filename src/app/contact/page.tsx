"use client";

import Button from "@/components/Button";
import Carosel from "@/components/Carosel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaMailBulk,
  FaAddressBook,
  FaClock,
} from "react-icons/fa";

const page = () => {
  return (
    <>
      <Head>
        {/* <title>About Us | Safe Car Valet Parking</title> */}
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
      <div className="relative min-h-screen">
        <header>
          <Navbar />
        </header>

        <Carosel />

        <div className="text-center mt-16 px-4">
          <h2 className="text-4xl font-bold text-blue-900">Contact Us</h2>
          <p className="text-xl mt-4 text-gray-700">
            Professional Service You Can Trust.
          </p>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Contact us today to learn more about what we can do for you and your
            guests. We look forward to serving you!
          </p>
        </div>

        {/* Google Map */}
        <div className="flex justify-center items-center my-12 px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6803.7119900654925!2d74.36390799158215!3d31.50064184469572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905b7bfe005a9%3A0x9007fdd3229144a6!2sCavalry%20Ground%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1738239941602!5m2!1sen!2s"
            className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-20 mb-16">
          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <FaPhone className="text-4xl text-blue-700 mb-2" />
            <h4 className="text-lg font-semibold">Phone Number</h4>
            <p className="text-gray-600 mt-1">+92-302-4199048</p>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center text-center">
            <FaWhatsapp className="text-4xl text-blue-700 mb-2" />
            <h4 className="text-lg font-semibold">WhatsApp</h4>
            <p className="text-gray-600 mt-1">+92-302-4199048</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <FaMailBulk className="text-4xl text-blue-700 mb-2" />
            <h4 className="text-lg font-semibold">Email</h4>
            <p className="text-gray-600 mt-1">scvplahore@gmail.com</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center text-center">
            <FaAddressBook className="text-4xl text-blue-700 mb-2" />
            <h4 className="text-lg font-semibold">Address</h4>
            <p className="text-gray-600 mt-1">
              Cavalry Ground, Lahore Cantt, Pakistan
            </p>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center text-center">
            <FaClock className="text-4xl text-blue-700 mb-2" />
            <h4 className="text-lg font-semibold">Opening Hours</h4>
            <ul className="text-gray-600 mt-1">
              <li>Weekdays: 10:00 AM – 10:00 PM</li>
              <li>Saturday: 10:00 AM – 08:00 PM</li>
              <li>Sunday: OPEN</li>
            </ul>
          </div>
        </div>

        {/* Scroll to Top Image */}
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
    </>
  );
};

export default page;
