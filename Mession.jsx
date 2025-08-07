import mession from "../../assets/our_mission.png"
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SplitText from "./SplitText";
import AnimatedContent from './AnimatedContent '
function Mession() {
    return (
        <div className='flex justify-center xl:flex-row flex-col items-center  bg-purple-700 '>
            {/* ============text side================== */}
            <div className='flex justify-start items-start xl:w-1/2 w-full p-8 flex-col gap-4'>

                <SplitText
                    text="Our Mission is to Create Momentes"
                    className="xl:text-6xl text-2xl font-bold capitalize xl:text-start text-center text-white "
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
                    text="We strive to foster a welcoming and joyful environment where customers of all ages can gather, celebrate, and make lasting memories. OUr commitment extends beyond serving great ice cream,"
                    className="xl:text-lg text-xs capitalize font-semibold text-white"
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
                        read more
                    </Button>
                </AnimatedContent>


            </div>
            {/*===========img side============== */}
            <div className="flex justify-center items-center xl:w-1/2 w-full">
                <img src={mession} alt="mession" /></div>
        </div>
    )
}

export default Mession
