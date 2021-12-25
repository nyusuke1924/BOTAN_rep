import React from 'react';
import MediaQuery from "react-responsive";

import BurgerDesktop from './BurgerDesktop';
import BurgerMobile from './BurgerMobile';

function BurgerApp() {
  
  return (
    <div>
      <MediaQuery query="(max-width: 768px)">
        <BurgerMobile/>
      </MediaQuery>
      <MediaQuery query="(min-width: 769px)">
        <BurgerDesktop/>
      </MediaQuery>
    </div>
    );
}

export default BurgerApp;