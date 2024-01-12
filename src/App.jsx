import { useState, useEffect } from 'react';
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { About } from './components/about';
import { Gallery } from './components/gallery';
import { Testimonials } from './components/testimonials';
import { Footer } from './components/footer';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Footer />
    </div>
  )
}

export default App
