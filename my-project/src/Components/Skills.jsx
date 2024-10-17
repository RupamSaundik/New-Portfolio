import {SKILLS} from "../constants"

const Skills = () => {
    return (
        <section className='pt-20' id='skills'>
        <h2 className='mb-8 text-center text-3xl lg:text-4xl'>Skills</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((Skills) => (
                <div key={Skills.id} className='group relative overflow-hidden rounded-3xl '>
                    <img src={Skills.image} alt={Skills.name}
                    className="h-64 w-64  transition-transform duration-500 group-hover:scale-110"/>
                </div>
            ))}
        </div>
    </section>
    )
}

export default Skills;