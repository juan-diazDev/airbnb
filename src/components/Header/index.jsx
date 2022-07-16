import Searcher from '../Searcher';
import Menu from '../Menu'
import './style.scss'

function Header() {
  return (
    <div>
      <header className=" header header--bgscreen">

          <div className="container-logo">
            <img src="img/Logo/Pink.png" alt="airbnb-logo" className="container-logo__logo" />
          </div>

          <Searcher />
          <Menu />

        </header><hr className="horiLine"></hr>
      </div>
  )
}

export default Header
