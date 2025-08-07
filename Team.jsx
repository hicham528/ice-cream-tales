import avatar1 from "../../assets/team_members_1.jpg";
import avatar2 from "../../assets/team_members_2.jpg";
import avatar3 from "../../assets/team_members_3.jpg";
import React from "react";
import Slider from "react-slick";
//=============MUI ICONS===================
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


import AnimatedContent from './AnimatedContent '
import SplitText from "./SplitText";
function Team() {
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
  const teamData = [
    {
      id: 1,
      src: avatar1,
      name: "Sarah Johnson",
      work: "Marketing Manager",
      fab: <FacebookIcon />,
      insst: <InstagramIcon />,
      yout: <YouTubeIcon />,
    },
    {
      id: 2,
      src: avatar2,
      name: "Ali Bensalah",
      work: "Lead Developer",
      fab: <FacebookIcon />,
      insst: <InstagramIcon />,
      yout: <YouTubeIcon />,
    },
    {
      id: 3,
      src: avatar3,
      name: "Emily Nguyen",
      work: "UX Designer",
      fab: <FacebookIcon />,
      insst: <InstagramIcon />,
      yout: <YouTubeIcon />,
    },
  ];
  return (
    <div className="flex flex-col mt-8 gap-4 justify-center items-center p-8 bg-gray-400">

      <SplitText
        text={<>our <span className="text-primary">team</span> members</>}
        className="xl:text-6xl text-4xl font-bold capitalize "
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
        text="Get to know the friendly faces behind your favorite flavors."
        className="xl:text-lg text-xs text-gray-200"
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
  
      {/* slider team==================== */}
      <div className="w-full max-w-[1200px] px-4 py-8 min-h-[300px] relative">
        <Slider {...settings}>
          {teamData.map((team, index) => (
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
              <div key={index} className="flex flex-col items-center justify-center gap-4 p-6  rounded-xl  mx-2">
                <img
                  src={team.src}
                  alt={team.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-primary"
                />
                <h1 className="text-xl font-bold capitalize  text-gray-800">{team.name}</h1>
                <p className="text-sm font-medium capitalize  text-gray-500">{team.work}</p>

                {/* Social Media */}
                <div className="flex gap-4 mt-2">
                  <a href="#" className="rounded-full p-2 bg-primary text-white hover:bg-purple-800 transition">
                    {team.fab}
                  </a>
                  <a href="#" className="rounded-full p-2 bg-primary text-white hover:bg-purple-800 transition">
                    {team.insst}
                  </a>
                  <a href="#" className="rounded-full p-2 bg-primary text-white hover:bg-purple-800 transition">
                    {team.yout}
                  </a>
                </div>
              </div>
            </AnimatedContent>

          ))}
        </Slider>
      </div>


    </div>
  )
}

export default Team
