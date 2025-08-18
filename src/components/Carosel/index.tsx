import React from "react";
import { Carousel, Button } from "antd";
import Sliderimage from "../../../public/myImages/slider-bg.png";

const slideData = [
  {
    title: "Safe Car Valet Parking",
    subtitle: " The Best Deals For Parking lots",
    description: (
      <>
        Exceptional Service Reliable Staff Timely Delivery
        <br />
        We take pride in offering seamless parking experiences with a focus on
        safety, speed, and professionalism.
      </>
    ),
    buttonText: "Contact us",
    buttonLink: "tel:+923024199048",
  },
  {
    title: "Safe Car Valet Parking",
    subtitle: " The Fastest Way to Find Parking",
    description: (
      <>
        Redefining Valet Parking with Excellence and Trust.
        <br />
        Driven by a passion for service, our team ensures every guest feels
        valued and every car is secure.
      </>
    ),
    buttonText: "Learn More",
    buttonLink: "about",
  },
];

const Carosel: React.FC = () => (
  <section className="relative w-full">
    <Carousel autoplay autoplaySpeed={4000} dots arrows draggable>
      {slideData.map((slide, index) => (
        <div key={index}>
          {/* Background Image with Text */}
          <div
            className="h-[760px] bg-cover bg-center flex items-center justify-center text-white px-4"
            style={{ backgroundImage: `url(${Sliderimage.src})` }}
          >
            <div className="text-center max-w-3xl">
              <span className="text-4xl md:text-6xl font-bold leading-tight">
                {slide.title}
              </span>
              <br />
              <span className="text-2xl md:text-3xl font-bold leading-tight">
                {" "}
                {slide.subtitle}
              </span>
              <p className="mt-4 text-lg">{slide.description}</p>
              <a href={slide.buttonLink}>
                <Button
                  type="primary"
                  size="large"
                  className="mt-6 md:w-[150px]"
                >
                  {slide.buttonText}
                </Button>
              </a>
            </div>
          </div>

          {/* Floating Bottom Card */}
          {/* <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-11/12 md:w-[70%] bg-white shadow-xl rounded-lg p-6 z-10">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder="City"
                className="flex-1 px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Place"
                className="flex-1 px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="flex-1 px-4 py-2 border rounded-md"
              />
            </div>
            <div className="text-center">
              <Button type="primary" size="large" className="w-full md:w-auto">
                {slide.buttonText}
              </Button>
            </div>
          </div> */}
        </div>
      ))}
    </Carousel>
  </section>
);

export default Carosel;
