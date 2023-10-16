import Button from "./Button"
import modalimg from '../assets/modalimg.webp'

function ModalSection() {
  return (
    <section className="modal-section">
       <h1 className="modalh1">Landing template for startups</h1>
       <p className="modalp">
       <span className="modal-span"> Our landing page template works on all devices, so you only have to</span>
           <span className="modal-span">set it up once, and get beautiful results forever</span>
     </p>
     <div className="modalbtns">
     <Button 
          text={'Start Free Trial'}
          bg={'rgba(13, 46, 195, 0.942)'}
          color={'whitesmoke'}
        />
     <Button 
          text={'Learn More'}
          bg={'#151819a0'}
          color={'whitesmoke'}
        />
     </div>
     <div className="modal-image">
        <img 
         src={modalimg}  
        />
     </div>
    </section>
  )
}

export default ModalSection
