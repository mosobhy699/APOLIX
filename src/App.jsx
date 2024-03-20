import background from './assets/Apolix-background.mp4'
import Navbar from './sectionone/Navbar'
import SectionOne from './sectionone/SectionOne'
import SectionTwo from './sectiontwo/SectionTwo'

function App() {

  return (

    <>
      <div className='relative overflow-hidden '>

        <video src={background} loop autoPlay muted className=' h-screen object-fill' />
        <Navbar />
        <SectionOne />
      </div>
      <div id='section2' className='lg:h-screen min-h-full relative  bg-[#c7dbe6] object-cover overflow-visible lg:overflow-hidden '>
        <SectionTwo />
      </div>
    </>
  )
}

export default App
