import React, {useEffect, useState} from 'react';
import './previewList.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CocktailCard from './preview';

// API calls
// import { filterByCat, filterByGlass, filterByAlc } from '../../apiCalls/xhr';
import { filterByCat, filterByGlass, filterByAlc } from '../../apiCalls/fetch';

const PreviewList = ({location}) => {
  const [list, setList] = useState();

  useEffect(() => {
    const filter = new URLSearchParams(location.search).get('value');
    const type = new URLSearchParams(location.search).get('type');
    switch (type) {
      case "category":
        filterByCat(filter).then(data => setList(data.drinks));
        break;
      case "glass":
        filterByGlass(filter).then(data => setList(data.drinks));
        break;
      case "alcoholic":
          filterByAlc(filter).then(data => setList(data.drinks));
        break;
      default:
        break;
    }
  }, [location.search]);

  return(
    <section id="previewList">
      <h1>{new URLSearchParams(location.search).get('value')}</h1>
      <ul>
        {list && list.map((data, i) => 
          <li key={i}>
            <Link to={`/cocktail/?id=${data.idDrink}`}>
              <CocktailCard details={data}/>
            </Link>
          </li>
        )}
      </ul>
    </section>
  )
};

PreviewList.propTypes = {
  filter: PropTypes.object,
}

export default PreviewList; 