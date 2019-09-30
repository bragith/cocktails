import React, {Fragment} from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import PreviewList from './components/preview/previewList';
import CocktailDetails from './components/details/details';
import BurgerMenu from './components/BurgerMenu/burgerMenu';

// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import FrontPage from './components/FrontPage/frontPage';

function App() { 

  return (
    <BrowserRouter>
      {/* A Css reset from Material Ui */}
      <CssBaseline />
      <div className="App">
        <Route path="/" render={props => (
          <Fragment>
            <FrontPage {...props} />
            <BurgerMenu {...props} /> 
          </Fragment>
        )} />
        
        <Switch>
          {/* <Route path="/" exact component={FrontPage} /> */}
          <Route path='/filter' component={PreviewList} />
          <Route path='/cocktail' component={CocktailDetails} />
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
