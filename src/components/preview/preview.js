import React from 'react';
import './preview.scss';
import PropTypes from 'prop-types';

const CocktailCard = ({details: {strDrink, strDrinkThumb}}) => {

  return(
    <figure className="preview">
      <img src={strDrinkThumb} alt={strDrink} />
      <figcaption>{strDrink}</figcaption>
    </figure>
  )
}; 

CocktailCard.propTypes = {
  details: PropTypes.object,
}

export default CocktailCard;