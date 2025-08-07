import Journy from "../../Components/Journy/Journy"
import MainAbout from "../../Components/MainAbout/MainAbout"
import Mession from "../../Components/Mession/Mession"
import Statistics from "../../Components/statistics/Statistics"
import SubmetSection from "../../Components/SubmetSection/SubmetSection"
import Team from "../../Components/Team/Team"
import AnimatedList from './AnimatedList '


function AboutUse() {
  const items = [<MainAbout />, <Journy />, <Mession />, <Statistics />, <Team />, <SubmetSection />];
  return (
    <div>

      <AnimatedList
        items={items}
        onItemSelect={(item, index) => console.log(item, index)}
        showGradients={true}
        enableArrowNavigation={true}
        displayScrollbar={true}
      />




    </div>
  )
}

export default AboutUse
