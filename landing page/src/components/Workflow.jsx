import { useState } from "react"
import Features from "./Features"
import { FaStar,FaNewspaper,FaGlobe,FaThumbsUp,FaComment,FaTablet } from 'react-icons/fa'

function Workflow() {
  const [features,setFeatures] = useState([
    {
      id: 1,
      title: 'Instant Features',
      about: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      icon: <FaStar />
    },
    {
      id: 2,
      title: 'Instant Features',
      about: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      icon: <FaNewspaper />
    },
    {
      id: 3,
      title: 'Instant Features',
      about: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      icon: <FaGlobe />
    },
    {
      id: 4,
      title: 'Instant Features',
      about: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      icon: <FaTablet />
    },
    {
      id: 5,
      title: 'Instant Features',
      about: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      icon: <FaThumbsUp />
    },
    {
      id: 6,
      title: 'Instant Features',
      about: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      icon: <FaComment />
    }
  ])

  return (
    <section className="workflow">
       <h1 className="modalh1">
        <span>The majority of our customers do not</span>
  <span>understand their workflows.</span>
</h1>
<p className="modalp">
    <span className="modal-span"> sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</span>
<span className="modal-span">mollit anim id est laborum.</span>
</p>
   <Features features={features}/>
   <div className="line"></div>
    </section>
  )
}

export default Workflow
