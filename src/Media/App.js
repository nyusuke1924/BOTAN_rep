import React from 'react';
import styled from 'styled-components';
import MediaSliderDesktop from './MediaSliderDesktop';

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

const MediaApp = () => {
  return (
    <Div className="App">
            <MediaSliderDesktop/>
    </Div>
  );
};

export default MediaApp;
