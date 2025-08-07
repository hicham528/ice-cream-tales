import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import homeImg from "../../assets/banner_image.png"
import SplitText from "./SplitText";
import AnimatedContent from './AnimatedContent '
import banner from "../../assets/banner_bg.jpg"
function MainSection() {
    return (
<div
  className="flex justify-center xl:p-8 p-4 items-center h-[90vh] xl:flex-row flex-col w-full bg-cover bg-center"
  style={{ backgroundImage: `url(${banner})` }}
>
            {/* ===================left side==================== */}
            <div className="flex flex-col gap-8 justify-start items-start xl:w-[42%] w-full ">
                <SplitText
                    text={
                        <>
                            vegan ice <br />
                            cream <br />
                            delights
                        </>
                    }
                    className="xl:text-8xl text-6xl text-start font-bold capitalize text-white"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="start"
                />

                <SplitText
                    text="Discover a world of tasty vegan ice cream flavors and desserts that everyone can enjoy"
                    className="text-white capitalize text-start font-semibold"
                    delay={100}
                    duration={0.2}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="start"

                />
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
                    <Button
                        variant="contained"
                        className="cnt-btn bg-primary shadow-xl"
                        endIcon={<ArrowForwardIcon />}
                    >
                        Contact Us
                    </Button>
                </AnimatedContent>

            </div>
            {/*============rigth side================ */}
            <div className='flex relative justify-center items-center xl:w-1/2 w-full xl:mt-0 mt-8'>
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
                    <div>                <img src={homeImg} alt="banner_image" />
                        <span className="absolute flex justify-center items-center text-center text-2xl top-0 left-0 p-4 rounded-full bg-yellow-400 text-white font-bold xl:h-[150px] h-[100px] xl:w-[150px] w-[100px]">20% OFF</span></div>
                </AnimatedContent>

            </div>
        </div>
    )
}

export default MainSection
