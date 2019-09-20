const sendHttpRequest = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';

    xhr.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "ca3fd1a238mshe1c3ddd63ed1096p1af01bjsn8740566c429b");

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };

    xhr.send();
  });
  return promise;
};

//LISTS______________________
// Get a list of all the categories
export const getCategories = () => sendHttpRequest("GET", "https://the-cocktail-db.p.rapidapi.com/list.php?c=list");

// Get a list of all the glasses
export const getGlasses = () => sendHttpRequest("GET", "https://the-cocktail-db.p.rapidapi.com/list.php?g=list");

// Get a list of all ingredients
export const getIngredients = () => sendHttpRequest("GET", "https://the-cocktail-db.p.rapidapi.com/list.php?i=list");

// Get a list of all alcaholic filters
export const getAlcoholic = () => sendHttpRequest("GET", "https://the-cocktail-db.p.rapidapi.com/list.php?a=list");


//FILTERS
// Get a list of cocktails filtered by category
export const filterByCat = filter => sendHttpRequest("GET", `https://the-cocktail-db.p.rapidapi.com/filter.php?c=${filter}`);

// Get a list of cocktails filtered by alcohol
export const filterByAlc = filter => sendHttpRequest("GET", `https://the-cocktail-db.p.rapidapi.com/filter.php?a=${filter}`);

// Get a list of cocktails filtered by glass
// export const filterByGlass = filter => sendHttpRequest(`https://the-cocktail-db.p.rapidapi.com/filter.php?g=${filter}`);
export const filterByGlass = filter => sendHttpRequest("GET", `https://the-cocktail-db.p.rapidapi.com/filter.php?g=${filter}`);

// LOOKUP
// Lookup full cocktail details by ID
export const cocktailDetail = id => sendHttpRequest("GET", `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`);

// Lookup random cocktail
export const cocktailRandom = id => sendHttpRequest("GET", `https://the-cocktail-db.p.rapidapi.com/random.php`);