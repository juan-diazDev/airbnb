import './style.scss';

const Searcher = () => (
  <div className="searcher searcher--queri-bgscreen">
    <button className="searcher__input searcher__input--queri-bgscreen" type="button">
      <div className="text-conatiner">
        <div className="text1"><strong>Where to?</strong></div>
        <div className="text2">Anywhere | Anyweek</div>
      </div>
      <img
        className="searcher__icon searcher__icon--queri-bgscreen"
        src="img/SearchIcons/Pink.png"
        alt="search-icon"
      />
    </button>
  </div>
);

export default Searcher;
