import React from 'react';
import styled from 'styled-components';
import ProductSliderDesktop from './ProductSliderDesktop';

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

const ProductApp = () => {
  return (
    <Div className="App">
            <ProductSliderDesktop/>
    </Div>
  );
};

export default ProductApp;
