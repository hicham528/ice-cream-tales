import AddIcon from '@mui/icons-material/Add';
import PercentIcon from '@mui/icons-material/Percent';

import SplitText from "./SplitText";
import AnimatedContent from './AnimatedContent '
function Statistics() {
    const dataStatistics = [
        {
            id: 1,
            number: "91",
            text: "awards win",
            situation: <AddIcon />,
        }, {
            id: 2,
            number: "95",
            text: "satisfied clients",
            situation: <PercentIcon />,
        }, {
            id: 3,
            number: "48",
            text: "years of experience",
            situation: <AddIcon />,
        }, {
            id: 4,
            number: "143",
            text: "employees working",
            situation: <AddIcon />,
        },
    ]
    return (
        <div className='flex justify-center items-center flex-col gap-4 xl:mt-8'>
            <SplitText
                text={<>our <span className='text-primary'>statistics</span></>}
                className="xl:text-6xl text-2xl capitalize font-bold xl:text-start text-center"
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
                text="What makes us special through our impressive statistics"
                className="xl:text-lg text-xs capitalize font-semibold text-gray-500"
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

            {/* ===========dataStatistics============ */}
            <div className='flex gap-4 justify-center items-center flex-wrap'>
                {dataStatistics.map((stat, index) => (
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
                        <div style={{ borderBottom: "2PX SOLID #FF2DD1" }} key={index} className='flex flex-col justify-center items-center gap-4 p-16 rounded-xl shadow-xl'>
                            <h1 className='xl:text-4xl text-xl capitalize font-bold '>{stat.number} <sup className='text-primary'>{stat.situation}</sup> </h1>
                            <p className='text-gray-500 font-bold capitalize '>{stat.text}</p>
                        </div>
                    </AnimatedContent>

                ))}
            </div>
        </div>
    )
}

export default Statistics
