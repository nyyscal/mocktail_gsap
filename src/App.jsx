import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"
import About from "./components/About"
import Art from "./components/Art"
import Menu from "./components/Menu"
import Footer from "./components/Footer"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
   <main className="overflow-auto scrollbar-hide">
    <Navbar/>
    <Hero/>
    <Cocktails/>
    <About/>
    <Art/>
    <Menu/>
    <Footer/>
   </main>
  )
}

export default App