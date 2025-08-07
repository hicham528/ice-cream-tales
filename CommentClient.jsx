import peri from "../../assets/happy_fans_1.jpg"
import Naurth from "../../assets/happy_fans_2.jpg"
import Kevin from "../../assets/happy_fans_3.jpg"
import StarIcon from "@mui/icons-material/Star";
import Slider from "react-slick";

import SplitText from "./SplitText";
import AnimatedContent from './AnimatedContent '
function CommentClient() {
    const dataClient = [
        {
            id: 1,
            text: "Ruin your diet, not your taste buds! Our vegan ice creams are a guilt-free indulgence that will leave you craving for more.",
            src: peri,
            name: "Peri James",
            situation: "Happy Client",
            stars: 4.0,
            review: 480,
        },
        {
            id: 2,
            text: "This vegan ice cream exceeded my expectations. Creamy, delicious, and totally dairy-free. I'm obsessed!",
            src: Naurth,
            name: "Emily North",
            situation: "Happy Client",
            stars: 5.0,
            review: 625,
        },
        {
            id: 3,
            text: "Best vegan ice cream I’ve ever had! It’s now a regular treat in our home.",
            src: Kevin,
            name: "Kevin Moore",
            situation: "Happy Client",
            stars: 4.5,
            review: 310,
        },
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
        <div className="flex p-8 justify-center flex-col gap-4 items-center bg-white overflow-hidden">
            <SplitText
                text={<> our <span className="text-primary">vegan</span> treats</>}
                className="xl:text-6xl text-black text-2xl capitalize font-bold"
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
                text="Check out our favorite vegan ice cream flavors"
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
                    {dataClient.map((cl, i) => (
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
                            <div key={i} className="flex flex-col gap-4 rounded-xl p-8 shadow-xl">
                                <p className="text-gray-500">{cl.text}</p>
                                {/* ===========info user================= */}
                                <div className="flex gap-4 justify-around items-start mt-4">
                                    <img src={cl.src} alt={cl.name} />
                                    <div className="flex flex-col gap-4">

                                        <div className="flex flex-col ">
                                            {/* ======= stars dynamic ======= */}
                                            <div className="flex gap-1 items-center justify-center ">
                                                {[...Array(5)].map((_, i) => (
                                                    <StarIcon
                                                        key={i}
                                                        fontSize="small"
                                                        className={i < Math.round(cl.stars) ? "text-yellow-500" : "text-gray-300"}
                                                    />
                                                ))}



                                            </div>
                                        </div>
                                        <h1 className="text-primary font-bold capitalize">{cl.name}</h1>
                                        <p>{cl.situation}</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>

                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default CommentClient
