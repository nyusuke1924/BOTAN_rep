import React from 'react';
import styled from 'styled-components';
import MediaQuery from "react-responsive";
import ConceptSliderDesktop from './ConceptSliderDesktop';
import ConceptSliderMobile from './ConceptSliderMobile';

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

const AboutMeApp = () => {
  return (
    <Div className="App">
      <MediaQuery query="(max-width: 768px)">
        <ConceptSliderMobile/>
      </MediaQuery>
      <MediaQuery query="(min-width: 769px)">
        <ConceptSliderDesktop/>
      </MediaQuery>
    </Div>
  );
};

export default AboutMeApp;
