import SplitText from "./SplitText";
import AnimatedContent from './AnimatedContent '
import { Link } from "react-router-dom"
function MainAbout() {
  return (
    <div className="flex justify-center flex-col gap-4 items-center p-8 bg-gray-400 h-[80vh]">
      <SplitText
        text="about us"
        className="xl:text-6xl text-2xl capitalize font-bold"
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
 <div className="flex p-4 gap-2 bg-white rounded-xl ">
        <li className="text-primary list-none font-bold"><Link to='/'>Home</Link></li>
        <span className="font-bold">/</span>
        <p className="font-bold">About</p>
      </div>
</AnimatedContent>
      
    </div>
  )
}

export default MainAbout
