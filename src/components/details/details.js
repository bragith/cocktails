import React, {useState, useEffect, Fragment} from 'react';
import './details.scss';

// API
// import { cocktailDetail } from '../../apiCalls/xhr';
import { cocktailDetail } from '../../apiCalls/fetch';


const CocktailDetails = ({location}) => {
  const [cocktail, setCocktail] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  // Fetching the cocktail details
  useEffect(() => {
    const cocktailId = new URLSearchParams(location.search).get('id');
    cocktailDetail(cocktailId).then(data => setCocktail(data.drinks[0]));
  }, [location.search]);

  // Filtering and changing the data so it will be easyer to work with
  useEffect(() => {
    setIngredients(filterDetails(cocktail));
    if(cocktail.strInstructions)
      setInstructions(cocktail.strInstructions.split(". "));
  }, [cocktail]);
  
  // Filtering out empty values from the data object
  const filterDetails = object => {
    const regexIngredient = RegExp('^strIngredient[0-9]{1,2}$');
    const regexMeasure = RegExp('^strMeasure[0-9]{1,2}$');

    const entries = Object.entries(object);

    const ingredients = [];
    const measurements = [];
    
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if(regexIngredient.test(entry[0]) && entry[1] !== ""){
        ingredients.push(entry[1]);
      }else if (regexMeasure.test(entry[0]) && entry[1] !== ""){
        measurements.push(entry[1]);
      }
    }
  
    // Creating a new object where ingredients and measure units are maped together.
    const filtered = ingredients.map((ingredient, i) => {
      return {ingredient: ingredient, measure: measurements[i]};
    });

    return filtered;
  };

  return(
    <section id="cocktailDetails">
      {cocktail && 
        <Fragment>
          <img id="cocktailThumb" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <article>
            <h1>{cocktail.strDrink}</h1>
            <h2>Ingredients:</h2>
            <ul>
              {ingredients.map(({ingredient, measure}, i) => 
                <li key={i}>{`${ingredient}: ${measure}`}</li>
              )}
            </ul>
            <h2>Instructions:</h2>
            <ol>
              {instructions.map((step, i) => 
                <li key={i}>
                  { `
                    ${step}
                    ${instructions.length !== (i + 1) ? '.' : ''}
                  `}
                </li>
              )}
            </ol>
          </article>
        </Fragment>
      }
    </section>
  )
};

export default CocktailDetails;