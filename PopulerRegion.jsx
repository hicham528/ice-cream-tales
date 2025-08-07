import React from "react";
import Slider from "react-slick";

import img1 from "../../assets/best_image_1.png";
import img2 from "../../assets/best_image_2.png";
import img3 from "../../assets/best_image_3.png";

import SplitText from "./SplitText";
import AnimatedContent from './AnimatedContent '
// MUI
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";

function PopulerRegion() {
  const dataProduct = [
    { id: 1, img: img1, title: "Classic Vanilla", stars: 4.0, review: 480, price: "$3.49" },
    { id: 2, img: img2, title: "Chocolate Fudge", stars: 4.5, review: 625, price: "$3.99" },
    { id: 3, img: img3, title: "Strawberry Dream", stars: 4.2, review: 310, price: "$3.79" },

  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex p-8 justify-center flex-col gap-4 items-center bg-gray-900 overflow-hidden">
      <SplitText
        text={<>   our <span className="text-primary">vegan</span> treats</>}
        className="xl:text-6xl text-white text-2xl capitalize font-bold"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"

      />

      <SplitText
        text={<>   Check out our favorite vegan ice cream flavors</>}
        className="text-gray-500 capitalize mb-4"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"

      />
 

      <div className="w-full max-w-[1200px] px-4 min-h-[300px] relative">
        <Slider {...settings} className=" flex justify-center items-center">

          {dataProduct.map((prod, index) => (
                      <AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
      <div key={index} className="p-2">
              <div className="flex flex-col bg-white gap-4 rounded-xl shadow-xl p-4 items-center text-center">
                <img src={prod.img} alt={prod.title} className="h-40 object-cover rounded" />
                <h1 className="font-semibold text-lg">{prod.title}</h1>

                {/* ======= stars dynamic ======= */}
                <div className="flex gap-1 items-center justify-center ">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      fontSize="small"
                      className={i < Math.round(prod.stars) ? "text-yellow-500" : "text-gray-300"}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({prod.review})</span>
                </div>

                <h3 className="font-bold text-primary">{prod.price}</h3>

                <Button
                  variant="contained"
                  className="cnt-btn bg-primary shadow-xl"
                  endIcon={<ArrowForwardIcon />}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
</AnimatedContent>
        
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PopulerRegion;
