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
        src="https://res.cloudinary.com/juanito-om/image/upload/v1659640047/img/SearchIcon/Pink_iwfuki.png"
        alt="search-icon"
      />
    </button>
  </div>
);

export default Searcher;
