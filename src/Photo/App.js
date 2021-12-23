import React from 'react';
import styled from 'styled-components';
import PhotoSliderDesktop from './PhotoSliderDesktop';

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

const PhotoApp = () => {
  return (
    <Div className="App">
      <PhotoSliderDesktop/>
    </Div>
  );
};

export default PhotoApp;
