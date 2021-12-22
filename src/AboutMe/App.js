import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
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
            <Media query = {{maxWidth: 768}}>
              {matches =>
                matches ? (<ConceptSliderMobile/>
                ) :(<ConceptSliderDesktop/>)}
            </Media>
    </Div>
  );
};

export default AboutMeApp;
