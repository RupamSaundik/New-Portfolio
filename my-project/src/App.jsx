
import Hero from "./Components/Hero"
import Navbar from "./Components/Navar"
import Projects from "./Components/project"
import Bio from "./Components/Bio"
import Skills from "./Components/Skills"
import ContactForm from "./Components/contact"
import Footer from "./Components/Footer"
const App = () => {
   return (
     <div className="relative h-full overflow-y-auto antialised"> 
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
           <Hero/>
           <Navbar/>
           <Projects/>
           <Bio/> 
           <Skills/>
           <ContactForm/>
           <Footer/>
        </div>       
     </div>
   )
}

export default App
