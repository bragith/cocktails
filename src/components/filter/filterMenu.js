import React, {useEffect, useState} from 'react';
import './filterMenu.scss';

// Custom components
import Filter from './filter'

// API calls
// import { getAlcoholic, getGlasses, getCategories } from '../../apiCalls/xhr';
import { getAlcoholic, getGlasses, getCategories } from '../../apiCalls/fetch';

const FilterMenu = ({history, location, toggleBurger = null}) => {
  const [alcoholic, setAlcoholic] = useState([]);
  const [glasses, setGlasses] = useState([]);
  const [categories, setCategories] = useState([]);

  const [filter, setFilter] = useState({
    type: "",
    value: ""
  });

  useEffect(() => {
    getAlcoholic().then(data => setAlcoholic(data.drinks));
  }, []);

  useEffect(() => {
    getGlasses().then(data => setGlasses(data.drinks));
  }, []);

  useEffect(() => {
    getCategories().then(data => setCategories(data.drinks));
  }, []);

  useEffect(() => {
    setFilter({
      type: new URLSearchParams(location.search).get('type'),
      value: new URLSearchParams(location.search).get('value')
    })
  }, [location.search]);

  const handleChange = data => {
    history.push(`/filter/?type=${data.name}&value=${data.value}`);
    toggleBurger && toggleBurger();
  };

  return(
    <nav id="filterMenu" className={location.pathname === '/' ? 'onFP' : 'offFP'}>
      <h1>Fancy a cocktail?</h1>
      
      <Filter 
        filterType='category'
        filterValue={filter.type === 'category' ? filter.value : ''}
        filterOptions={categories}
        handleChange={handleChange}
      />

      <Filter 
        filterType='alcoholic'
        filterValue={filter.type === 'alcoholic' ? filter.value : ''}
        filterOptions={alcoholic}
        handleChange={handleChange}
      />

      <Filter 
        filterType='glass'
        filterValue={filter.type === 'glass' ? filter.value : ''}
        filterOptions={glasses}
        handleChange={handleChange}
      />

    </nav>
  )
};

export default FilterMenu;