import React from 'react';
import styled from 'styled-components';
import MediaQuery from "react-responsive";
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
      <MediaQuery query="(max-width: 768px)">
        <HomeSliderMobile/>
      </MediaQuery>
      <MediaQuery query="(min-width: 769px)">
        <HomeSliderDesktop/>
      </MediaQuery>
    </Div>
  );
};

export default HomeApp;
