
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Presentation from './components/presentation/Presentation'
import Education from './components/education/Education'


function App() {

  return (
    <>
      <Header/>
      <Presentation/>
      <Projects/>
      <Education/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App
