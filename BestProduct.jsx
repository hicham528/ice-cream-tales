import React from "react";
import Slider from "react-slick";
import AnimatedContent from './AnimatedContent '
import SplitText from "./SplitText";

import img4 from "../../assets/featured_product_1.png";
import img5 from "../../assets/featured_product_2.jpg";
import img6 from "../../assets/featured_product_3.jpg";
import img7 from "../../assets/featured_product_4.jpg";

// MUI
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";

function BestProduct() {
    const dataProduct = [
        { id: 1, img: img4, title: "Mint Chip", stars: 4.4, review: 255, price: "$3.89" },
        { id: 2, img: img5, title: "Salted Caramel", stars: 4.7, review: 710, price: "$4.29" },
        { id: 3, img: img6, title: "Pistachio Delight", stars: 4.3, review: 375, price: "$4.19" },
        { id: 4, img: img7, title: "Cookie Dough Blast", stars: 4.6, review: 540, price: "$4.39" },
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
        <div>
            <div className="flex p-8 justify-center flex-col gap-4 items-center bg-gray-900 overflow-hidden">
                <SplitText
                    text={<>    best
                    <span className="text-primary"> vegan
                    </span> ice
                    creams</>}
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
                    text=" Our best-selling vegan ice creams and desserts"
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
        </div>
    )
}

export default BestProduct
