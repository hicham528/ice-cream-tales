
import AboutProduct from '../../Components/AboutProduct/AboutProduct'
import BestProduct from '../../Components/BestProduct/BestProduct'
import CommentClient from '../../Components/CommentClient/CommentClient'
import MainSection from '../../Components/MainSection/MainSection'
import Offre from '../../Components/Offre/Offre'
import PopulerRegion from '../../Components/PopulerRegion/PopulerRegion'
import SubmetSection from '../../Components/SubmetSection/SubmetSection'

import AnimatedList from './AnimatedList '
function HomePage() {
  const items = [<MainSection/>, <PopulerRegion/>, <AboutProduct/>, <Offre/>,  <BestProduct/>,<CommentClient/>,<SubmetSection/>];
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

export default HomePage
