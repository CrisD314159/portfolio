import { NavLink } from "react-router-dom";
import './styles.css'
import linkedin from '/linkedin.svg'

export default function Presentation() {
  return(
    <div className="presentationContainer">
      <div className="background">
        <div className="profilePicture"/>
        <div className="welcomeContainer">
          <h1 className="title">Bienvenid@, es un gusto tenerte. <NavLink to='https://www.linkedin.com/in/cristian-david-vargas-loaiza-982314271/'>
          <img src={linkedin} alt="" className="intImage"/>
          </NavLink>
          <NavLink to='https://github.com/CrisD314159'>
          <img src='https://pngimg.com/d/github_PNG63.png' alt="" className="intImage"/>
          </NavLink>
          
          </h1>
          
        </div>
      </div>
      <div className="aboutContainer">
        <h1 className="aboutTittle">Sobre Mi</h1>
        <p className="aboutText">Soy Cristian David Vargas, un entusiasta del desarrollo del software, apacionado por la tecnología y el conocimiento.
          Nací y crecí en la hermosa Colombia, un país lleno de cultura y diversidad.
          A lo largo de los años, he dedicado mi tiempo a explorar y aprender sobre diferentes tecnologías 
          que impulsen mi crecimiento personal y profesional, y que además me permitan alcanzar
          mi sueño en la industria tecnológica.</p>
      </div>

    </div>
  
  )
  
}