import './style.scss'

function Searcher() {
  return (
    <div class="searcher searcher--queri-bgscreen">
      <form>
        <button class="searcher__input searcher__input--queri-bgscreen"
          type="submit">
          <div class="container-image container-image--queri-bgscreen">
            <img class="container-image__image container-image__image--queri-bgscreen"
              src="img/SearchIcons/Pink.png"
              alt="search-icon" />
          </div>
          <b>Any where</b> | <b>Any week</b>
        </button>
      </form>
    </div>
  )
}

export default Searcher
