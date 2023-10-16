import lines from '../assets/lines.png'
import { FaFacebook,FaInstagram,FaTwitter,FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
    <div className="top">
        <div className="conclude">
           <div className="logo"><img src={lines}/></div>
           <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
       </div>
       <div className="tables">
          <table>
            <tr>
                <td>RESOURCES</td>
                <td>FOLLOW US</td>
                <td>LEGAL</td>
            </tr>
            <tr>
                <td>React.js</td>
                <td>Github</td>
                <td>Privacy Policy</td>
            </tr>
            <tr>
                <td>Css</td>
                <td>Discord</td>
                <td>Terms & Conditions</td>
            </tr>
          </table>
       </div>
    </div>
        <div className="line"></div>
       <div className="bottom">
           <p>Made by Aristo. All rights reserved.</p>
           <div className="socials">
               <FaFacebook />
               <FaInstagram />
               <FaTwitter />
               <FaGithub />
           </div>
       </div>
    </footer >
  )
}

export default Footer
