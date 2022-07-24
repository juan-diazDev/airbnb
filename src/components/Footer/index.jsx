import './style.scss'
import { Link } from "react-router-dom"

function Footer() {
  return(
    <footer className='footer'>

      <div className='footer__call-to-action-conatiner'>
        <Link to="/Signupform" ><button className='footer__call-to-action'>
          <strong>Sing-up</strong>
        </button></Link>
      </div>

      <div className='footer__bg-screen-container'>
        <div className='footer__left-container'>
          <div>© 2022, Equipo Maravilla</div>
          <div>
          <Link to='/Privacity'>
            Privacity
          </Link>
          </div>
        </div>

        <div className='footer__right-container'>
          <div>
            <Link to='/Loginform'>Log-in</Link>
          </div>
          <div>
            <Link to='/Signupform'>Sing-up</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
