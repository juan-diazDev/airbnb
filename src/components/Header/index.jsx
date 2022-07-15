import Searcher from '../Searcher';
import Menu from '../Menu'
import './style.scss'

function Header() {
  return (
    <div>
      <header class=" header header--bgscreen">

          <div class="container-logo">
            <img src="img/Logo/Pink.png" alt="airbnb-logo" class="container-logo__logo" />
          </div>

          <Searcher />
          <Menu />

        </header><hr class="horiLine"></hr>
      </div>
  )
}

export default Header
