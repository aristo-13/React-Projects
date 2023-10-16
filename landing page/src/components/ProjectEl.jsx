import l1 from '../assets/l1.webp'
import l2 from '../assets/l2.webp'
import l3 from '../assets/l3.webp'


function ProjectEl() {
    const projectItems = {
        lead: 'More speed. less spend',
        title: 'Keep projects on schedule',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: [l1,l2,l3]
    }
  return (
    <div className='box-el'>
      {
        projectItems.img.map((box) => (
            <div className='project-box'>
                <div>
            <span className="lead">{projectItems.lead}</span>
            <h1 className="modalh1">{projectItems.title}</h1>
            <p>{projectItems.about}</p>
                </div>
            <img src={box}/>
           </div>
        ))
    }
     <div className="line"></div>
    </div>
  )
}

export default ProjectEl
