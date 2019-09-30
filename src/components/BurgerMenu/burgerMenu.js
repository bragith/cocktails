import React, { useState, useEffect } from 'react';
import './burgerMenu.scss';

import FilterMenu from '../filter/filterMenu';

//Burger menu with icon that animates to x when opened and back to burger when closed
const BurgerMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(prev => !prev)
  };

  return (
    <div className="burgerWrapper">
      <div
        className={`iconWrapper${isOpen ? ' open' : ' closed'}`}
        onClick={() => toggleBurger() }
      >
        <span className="hide" />
        <span className="close closeOne" />
        <span className="close closeTwo" />
        <span className="hide" />
      </div>
      <nav className={`mainNav${isOpen ? ' show' : ''}`}>
        <FilterMenu {...props} toggleBurger={toggleBurger} />
      </nav>
    </div>
  );
};

export default BurgerMenu;
