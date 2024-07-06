
import items from '../data/items.json'
import './styles.css'
export default function Skills() {

    return (
        <div className='skillsMain'>
            <h1 className='skillsTittle'>Skills</h1>
            <div className='sliderMainContainer'>
                <div className='slider'>
                    {
                        items.skills.map((skill)=>{
                            return (
                                <div key={skill.name} style={{backgroundColor:`${skill.color}`}} className='item'>
                                    <div className='itemImageContainer'>
                                        <img src={skill.image} alt="" className='itemImage'/>
                                    </div>
                                    <h2 className='tittleItem'>{skill.name}</h2>
                                    
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )

}