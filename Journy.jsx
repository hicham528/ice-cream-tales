import journy from "../../assets/about_image.jpg"
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import SplitText from "./SplitText";
import AnimatedContent from './AnimatedContent '
function Journy() {
    return (
        <div className='flex gap-2 p-8 xl:flex-row flex-col'>
            {/* =============img side============ */}
            <div className='flex justify-center items-center xl:w-1/2 w-full'>
                <img src={journy} alt="journy" className="rounded-full" />
            </div>
            {/* ==============text side=============== */}
            <div className="flex flex-col gap-4 justify-center items-start xl:w-1/2 w-full">
                <SplitText
                    text={<>our <span className="text-primary">journey</span> began
                        with a simple dream</>}
                    className="xl:text-5xl text-2xl font-bold capitalize "
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
                    text="We take pride in offering a diverse range of options, including dairy-free, vegan, and gluten-free choices, so everyone can find their perfect scoop"
                    className="text-gray-500 font-semibold capitalize xl:text-lg text-xs"
                    delay={100}
                    duration={0.1}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
                <SplitText
                    text="Our goal is to make the best ice cream using only the finest, natural ingredients, From rich, cream classics to adventurous ne creations, every flavors is meticulously crafted in-house to ensure tha highest quality and freshness."
                    className="text-gray-500 font-semibold capitalize xl:text-lg text-xs"
                    delay={100}
                    duration={0.1}
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
        </div>
    )
}

export default Journy
