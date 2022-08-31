import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadSpaceQuery } from '../../store/action/space';
import './style.scss';

const Searcher = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const spaceQuery = useSelector((state) => state.space.spaceQuery);

  const handleChange = (e) => {
    setQuery(e.target.value);

    dispatch(loadSpaceQuery({ ...spaceQuery, query }));
  };
  return (
    <div className="searcher searcher--queri-bgscreen">
      <button className="searcher__input searcher__input--queri-bgscreen" type="submit">
        <div className="text-conatiner">
          <div className="text1"><strong>Where to?</strong></div>
          <div className="text2">Anywhere | Anyweek</div>
        </div>
        <img
          className="searcher__icon searcher__icon--queri-bgscreen"
          src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659662866/images/SearchIcons/Pink_c3vedc.png"
          alt="search-icon"
        />
        <div className="searcher__input-container">
          <label htmlFor="query">
            <input
              className={query === ''
                ? 'searcher__input--false'
                : 'searcher__input--true'}
              type="search"
              id="query"
              onChange={handleChange}
            />
          </label>
        </div>
      </button>
    </div>
  );
};

export default Searcher;
