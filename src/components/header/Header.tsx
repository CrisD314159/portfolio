import './styles.css'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <header className='mainHeader'>
      <div className="headerImageContainer">
        <a href="/">
          <img src="/crisdevlogo.png" alt="Crisdev" />
        </a>
      </div>
      <nav className="nav">
        <ul className="navList">
          <li className='navListItem'>
            <NavLink to={'https://www.linkedin.com/in/cristian-david-vargas-loaiza-982314271/'}>LinkedIn</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}