import ImgAbout from "../../assets/our_guilt_image.png"
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SplitText from "./SplitText";
import AnimatedContent from './AnimatedContent '
function AboutProduct() {
  return (
    <div className='flex justify-center items-center p-4 bg-[url(src/assets/our_guilt_bg.png)]'>
      <div className='flex xl:flex-row flex-col bg-white rounded-xl shadow-xl xl:w-[80%] w-full'>
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
             <img src={ImgAbout} alt="our_guilt_image" />
          </AnimatedContent>
      
        {/* ===============right side============== */}
        <div className="flex flex-col xl:p-8 p-8 items-center justify-center  gap-4">
          <SplitText
            text={<>our guilt-free <span className="text-primary">vegan</span> ice cream</>}
            className="font-bold xl:text-5xl text-xl  capitalize"
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
            text="Enjoy creamy, dairy-free ice cream that's both testy and kind to the planet"
            className="text-gray-500 font-semibold"
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
            text="Delicious flavors made with only the best plant based ingredients"
            className="text-gray-500 font-semibold"
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
      </div>

    </div>
  )
}

export default AboutProduct
