"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ...existing code...
import Image from "next/image";

const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  // ... apni 50 images ka path yahan daalein
  "/images/photo50.jpg",
];

export default function StaffCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // ek waqt me 3 images dikhenge (desktop)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds per slide
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <Image
              src={src}
              alt={`Staff photo ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
