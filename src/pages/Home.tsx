
import Deals from '../components/HomeComp/Deals'
import Faq from '../components/HomeComp/Faq'
import Hero from '../components/HomeComp/Hero'
// import News from '../components/HomeComp/News'
import Plans from '../components/HomeComp/Plans'

function Home() {
  return (
    <>
    <Hero/>
    <Deals/>
    {/* <Testimonials/> */}
    <Plans/>
    <Faq/>
    {/* <News/> */}
    </>
  )
}

export default Home