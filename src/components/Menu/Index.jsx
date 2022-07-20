import './style.scss'

function Menu() {
  return (
    <div className="menu--queri-bgscreen">
            <nav>
              <ul>
                <li>
                  <a href="#0">
                    <div className="menu__icon"></div>
                    <div className="menu__icon"></div>
                    <div className="menu__icon"></div>
                  </a>
                  <ul className="menu__item1">
                    <li><a href="#0">Sing up</a></li>
                    <li><a href="#0">Log in</a></li>
                    <hr class="menu__horiLine" />
                      <li><a href="#0">Contact</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
  )
}

export default Menu
