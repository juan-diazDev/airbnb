function Header() {
  return (
    <div>
      <header class=" header header--bgscreen">

          <div class="container-logo">
            <img src=/* "/Airbnbn-Clone/fotos/Logo-Airbnb.png" */ alt="airbnb-logo" class="container-logo__logo" />
          </div>

          <div class="searcher searcher--queri-bgscreen">
            <form>
              <button class="searcher__input searcher__input--queri-bgscreen"
                type="submit">
                <div class="container-image container-image--queri-bgscreen">
                  <img class="container-image__image container-image__image--queri-bgscreen"
                    src=/* "/Airbnbn-Clone/fotos/image.png" */
                    alt="search-icon" />
                </div>
                <b>¿A dónde quieres ir?</b>
              </button>
            </form>
          </div>

          <div class="menu--queri-bgscreen">
            <nav>
              <ul>
                <li>
                  <a href="#0">
                    <div class="menu__icon"></div>
                    <div class="menu__icon"></div>
                    <div class="menu__icon"></div>
                  </a>
                  <ul class="menu__item1">
                    <li><a href="#0">Regístrate</a></li>
                    <li><a href="#0">Inicia Sesión</a></li>
                    <hr class="menu__horiLine" />
                      <li><a href="#0">Contacto</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </header><hr class="horiLine"></hr>
      </div>
  )
}

export default Header
