import React from 'react';
import Media from 'react-media';

import BurgerDesktop from './BurgerDesktop';
import BurgerMobile from './BurgerMobile';

function BurgerApp() {
  
  return (
    <div>
    <Media query = {{maxWidth: 768}}>
      {matches =>
        matches ? (<BurgerMobile/>
        ) :(<BurgerDesktop/>)}
    </Media>
  </div>
  );
}

export default BurgerApp;