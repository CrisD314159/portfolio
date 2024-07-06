import items from '../data/items.json';
import './education.css'
export default function Education() {
  return (
    <div className='educationContainer'>
      <h2 className='educationTittle'>Educación</h2>
      <div className='itemsContainer'>
        {items.education.map((education)=>{
          return (
            <div key={education.name} className='educationCard'>
              <div className='rowContainer'>
                <h3 className='cardTittle'>{education.name}</h3>
                <p className='educationDate'>{education.date}</p>
              </div>
              <p className='educationInst'>{education.institution}</p>
              {education.url? 
              <a href={education.url} className='educationUrl'>Ver certificado</a> :
              <></> 
            }
            </div>
          )
        })}
      </div>
    </div>
  )
}