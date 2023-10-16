
import lines from '../assets/lines.png'
import Button from './Button'

function Header() {
  return (
    <header>
      <div className="logo"><img src={lines}/></div>
      <div className="headerbtns">
        <Button 
          text={'Sign In'}
          bg={'transparent'}
          color={'rgba(13, 46, 195, 0.942)'}
        />
        <Button 
          other={'sign-up'}
          text={'Sign Up'}
          bg={'rgba(13, 46, 195, 0.942)'}
          color={'whitesmoke'}
        />
        <img
        className='headerimg'
         src={lines}
         />
      </div>
    </header>
  )
}

export default Header
