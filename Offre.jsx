import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SplitText from "./SplitText";
import AnimatedContent from './AnimatedContent '
function Offre() {
    return (
        <div className='p-8 flex flex-col gap-4 justify-center items-center bg-primary'>
            <SplitText
                text={<>limited <br />
                    time offer!</>}
                className="xl:text-8xl text-center text-2xl text-white xl:w-[50%] w-[70%] capitalize font-bold"
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
                text={<>get <span className='text-yellowe'>20% off </span>all vegan ice creams!</>}
                className="capitalize text-white font-semibold xl:text-xl text-md"
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
                    className="cnt-btn bg-green shadow-xl"
                    endIcon={<ArrowForwardIcon />}
                >
                    get this deal
                </Button>
            </AnimatedContent>



            <SplitText
                text="Use code VEGAN20 all checkout"
                className="text-lg font-semibold text-center text-white"
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
            <p className=''></p>
        </div>
    )
}

export default Offre
