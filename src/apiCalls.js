// Base async fetch function
export const apiCall = async (url) => {
  const apiKey = "ca3fd1a238mshe1c3ddd63ed1096p1af01bjsn8740566c429b";
  const apiHost = "the-cocktail-db.p.rapidapi.com";
  
  // await response of fetch
  // await response of res.json()
  let data = await (await fetch(
    url,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": apiHost,
        "x-rapidapi-key": apiKey
      }
    })
    .then(res => res.json())
    .catch(err => console.log('Error: ', err))
  )
  
  return data;
}

//LISTS______________________
// Get a list of all the categories
export const getCategories = () => apiCall("https://the-cocktail-db.p.rapidapi.com/list.php?c=list");

// Get a list of all the glasses
export const getGlasses = () => apiCall("https://the-cocktail-db.p.rapidapi.com/list.php?g=list");

// Get a list of all ingredients
export const getIngredients = () => apiCall("https://the-cocktail-db.p.rapidapi.com/list.php?i=list");

// Get a list of all alcaholic filters
export const getAlcoholic = () => apiCall("https://the-cocktail-db.p.rapidapi.com/list.php?a=list");


//FILTERS
// Get a list of cocktails filtered by category
export const filterByCat = filter => apiCall(`https://the-cocktail-db.p.rapidapi.com/filter.php?c=${filter}`);

// Get a list of cocktails filtered by alcohol
export const filterByAlc = filter => apiCall(`https://the-cocktail-db.p.rapidapi.com/filter.php?a=${filter}`);

// Get a list of cocktails filtered by glass
// export const filterByGlass = filter => apiCall(`https://the-cocktail-db.p.rapidapi.com/filter.php?g=${filter}`);
export const filterByGlass = filter => apiCall(`https://the-cocktail-db.p.rapidapi.com/filter.php?g=${filter}`);

// LOOKUP
// Lookup full cocktail details by ID
export const cocktailDetail = id => {
  // console.log(typeof id);
  // if(typeof id === "number" ){
  //   console.log('true');
  // }else{
  //   console.log('false');
  // }
  return apiCall(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`)
};

// Lookup random cocktail
export const cocktailRandom = id => apiCall(`https://the-cocktail-db.p.rapidapi.com/random.php`);
