import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import HomeSliderDesktop from './HomeSliderDesktop';
import HomeSliderMobile from './HomeSliderMobile';

const Div = styled.div`
  width: 90%;
  margin: 0;
  position: absolute;
  top: 60px;
  right: 5%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  `

const HomeApp = () => {
  return (
    <Div className="App">
            <Media query = {{maxWidth: 768}}>
              {matches =>
                matches ? (<HomeSliderMobile/>
                ) :(<HomeSliderDesktop/>)}
            </Media>
    </Div>
  );
};

export default HomeApp;
