import Carosel from "@/components/Carosel";
import Navbar from "@/components/Navbar";
import { Button, Carousel } from "antd";
import Money from "../../../public/myImages/money.png";
import Clock from "../../../public/myImages/clock.png";
import Man from "../../../public/myImages/man.png";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>About Us | Autospar</title>
      </Head> */}

      <div className="bg-gray-100 min-h-screen">
        <header className="">
          <Navbar />
        </header>

        <div>
          <Carosel />
        </div>

        <div className="bg-blue-500 bg-image-resume md:mb-[100px] mt-[100px] lg:h-[377px]">
          <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 text-center"></div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-4 md:mx-8 lg:mx-20 my-[48px]">
            <div className="flex flex-col items-center">
              <Image src={Money} alt="resImg" />
              {/* <h5>Save Money</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p> */}
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
                Step 3
              </span>
              <span className="text-center font-normal text-base leading-[30px] text-white">
                Behind every parked car is a professional you can trust — our
                valet staff delivers service with care and courtesy
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
