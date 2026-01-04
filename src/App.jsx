
import { gsap } from "gsap";
import { ScrollTrigger, SplitText, ScrollToPlugin } from "gsap/all"
import Navbar from "./components/Navbar";
import Hero from './components/Hero.jsx'
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

const App = () => {


    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails/>
            <About/>
            <Art/>
            <Menu/>
            <Footer/>
            <BackToTop/>
        </main>
    )
}

export default App