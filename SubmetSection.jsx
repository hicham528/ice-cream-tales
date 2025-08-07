
import SplitText from "./SplitText";
import AnimatedContent from './AnimatedContent '
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function SubmetSection() {
    return (
        <div className='flex p-8 flex-col gap-4 justify-center items-center xl:h-[100vh]'>
            <SplitText
                text={<>sign up for <span className="text-primary">exclusive deals</span> and updates</>}
                className="xl:text-5xl text-2xl font-bold capitalize"
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
                text="Get 10% off you next order and stay updated with our latest offers."
                className="text-gray-500 font-semibold capitalize"
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
            <div className="flex xl:w-[50%] w-[100%] h-[60px] shadow-xl rounded-xl ">
                    <input type="email" placeholder="enter your email" className="rounded-xl placeholder:capitalize placeholder:font-bold p-4 w-[70%] outline-none placeholder:text-gray-500" />
                    <button className='text-white w-[30%] xl:text-xl text-xs capitalize font-bold cursore-pointer bg-primary rounded-xl'
                    >
                        subscribe <ArrowForwardIcon className='xl:block hidden' />
                    </button>
                </div>

          

        </div>
    )
}

export default SubmetSection
