import './style.scss'

function Searcher() {
  return (
    <div className="searcher searcher--queri-bgscreen">
      <form>
        <button className="searcher__input searcher__input--queri-bgscreen"
          type="submit">
          <div className="container-image container-image--queri-bgscreen">
            <img className="container-image__image container-image__image--queri-bgscreen"
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
