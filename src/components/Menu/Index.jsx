import './styles.scss'
import { Link } from "react-router-dom"

function Menu() {
  return (
    <div className="menu--queri-bgscreen">
      <ul className='nav-menu'>
        <li>
          <div className="menu__icon"></div>
          <div className="menu__icon"></div>
          <div className="menu__icon"></div>
          <ul className="menu__item1">
            <li><Link to="/Signinform" >Sing up</Link></li>
            <li><Link to="/Loginform" >Log in</Link></li>
            <hr className="menu__horiLine" />
            <li><Link to="/" >Contact</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Menu
