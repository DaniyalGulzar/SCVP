"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import ColorBar from "../ColorBar";
import Button from "../Button";
import axios from "axios";
import toast from "react-hot-toast";

const Footer = () => {
  const industries = [
    "Office",

    "Bank",

    "Convention Center",
    "Federal Building",
    "Gym",
    "Hotel",

    "Retail Store",
  ];
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}api/contact/subscribe`,
        formData
      );
      toast.success("Message sent successfully!");
      setFormData({
        email: "",
      });
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      {/* <ColorBar type={2} /> */}
      <footer className="bg-gradient bg-blue-500 text-white">
        <div className="max-w-[85%] mx-auto py-[50px] flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/4 md:w-1/2 px-4">
            <h3 className="text-left text-[22px] font-semibold text-black">
              Safe Car Valet Parking
            </h3>

            <p className="text-justify text-clip">
              {" "}
              Safe Car Valet Parking is more than just a service — we are a
              dedicated team of professionals committed to providing top-tier
              valet parking solutions that prioritize safety, efficiency, and
              customer satisfaction.
            </p>

            <h3 className="text-left text-[22px] font-semibold text-black">
              Contact Us
            </h3>

            <p className="text-justify text-clip"> Call us: +923024199048</p>
            <p className="text-justify text-clip"> Call us: +923136407924</p>
            <p className="text-justify text-clip"> Call us: +923084629101</p>

            <p className="text-justify text-clip">
              {" "}
              Cavalary Ground Lahore cantt (54810)
            </p>
          </div>

          <div className="lg:w-1/4 md:w-full px-4">
            <h3 className="text-lg font-bold text-left text-black">
              Industries
            </h3>
            <ul className="space-y-[10px] text-left mt-2 list-none p-0 text-[#ffffff]">
              {industries.map((industry, index) => (
                <li
                  key={index}
                  className="transition-transform transform hover:scale-105"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 px-4">
            <h3 className="text-lg text-left font-bold mb-4 text-black">
              Connect with us on
            </h3>
            <div className="social-links flex flex-wrap items-center gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/myImages/facebook.png"
                  width={32}
                  height={32}
                  alt="Facebook"
                  className="h-8 w-8 transition-transform duration-200 hover:scale-110"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/myImages/linkedin.png"
                  width={32}
                  height={32}
                  alt="LinkedIn"
                  className="h-8 w-8 transition-transform duration-200 hover:scale-110"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/myImages/insta.png"
                  width={32}
                  height={32}
                  alt="Instagram"
                  className="h-8 w-8 transition-transform duration-200 hover:scale-110"
                />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/myImages/tiktok.png"
                  width={32}
                  height={32}
                  alt="TikTok"
                  className="h-8 w-8 transition-transform duration-200 hover:scale-110"
                />
              </a>

              {/* Logo inside social section */}
              <div className="mt-2 sm:mt-0">
                <Image
                  src="/myImages/LOGO.png"
                  width={200}
                  height={152}
                  alt="Logo"
                  className="h-[60px] sm:h-[80px] md:h-[152px] w-auto transition-transform duration-200 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-full px-4">
            <h3 className="text-lg font-bold text-left text-black">Support</h3>
            <ul className="space-y-[24px] text-left mt-4 list-none p-0">
              <li className="transition-transform transform hover:scale-105 truncate">
                <Link
                  href="/"
                  className="text-sm font-semibold whitespace-nowrap overflow-hidden"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="transition-transform transform hover:scale-105 truncate">
                <Link
                  href="/about"
                  className="text-sm font-semibold whitespace-nowrap overflow-hidden"
                >
                  About Us
                </Link>
              </li>
              <li className="transition-transform transform hover:scale-105 truncate">
                <Link
                  href="/contact"
                  className="text-sm font-semibold whitespace-nowrap overflow-hidden"
                >
                  Contact Us
                </Link>
              </li>
              <li className="transition-transform transform hover:scale-105 truncate">
                <Link
                  href="/service"
                  className="text-sm font-semibold whitespace-nowrap overflow-hidden"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white mx-4"></div>
        <div className="py-4 text-center md:text-center text-black">
          Copyright © 2025 SafeCarValetParking.
        </div>
      </footer>
    </>
  );
};

export default Footer;
