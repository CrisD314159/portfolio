
import items from '../data/items.json';
import './styles.css'
export default function Projects() {
    return (
        <div className='projectsContainer'>
            <h1 className="projectsTitle">Proyectos</h1>
            <div className='slider'>
                <div className="projectsCards">
                    {items.projects.map((project)=>{
                        return (
                            <div className='projectCard' id={project.name}>
                                <div className='projectImage' style={{backgroundImage: `url("${project.image}")`}}/>
                                <h2 className='projectTitle'>{project.name}</h2>
                                <p className='projectDescription'>{project.description}</p>
                                <h3 className='projectTechTitle'>Tecnologías</h3>
                                <div className='projectTech'>
                                    {project.technologies.map((tech)=>{
                                        return (
                                            <div className='tech'>
                                                <img src={tech}  className='techIcon'/>
                                            </div>
                                        )
                                    })}
                        
                                </div>
                                <div className='buttonContainer'>
                                    <a href={project.github}>
                                        <button className='gitButton'>
                                            <div className='gitImageContainer'>
                                                <img src="https://pngimg.com/d/github_PNG63.png" alt="" className='gitImage'/>
                                            </div>
                                        </button>
                                    </a>
                                    <a href={project.url}>
                                        <button className='urlButton'>Ir al sitio</button>
                                    </a>
                                    
                                </div>

                            </div>
                        )
                        
                    })}

                </div>

            </div>
        </div>
    )
}