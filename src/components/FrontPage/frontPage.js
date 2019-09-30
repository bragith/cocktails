import React from 'react';
import './frontPage.scss';
import FilterMenu from '../filter/filterMenu';
const FrontPage = (props) => {

  return(
    <section id="frontPage">
      <FilterMenu {...props} />
    </section>
  )
};

export default FrontPage;