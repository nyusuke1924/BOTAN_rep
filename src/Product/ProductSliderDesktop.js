import React from 'react';
import styled from 'styled-components';

var ProductTitleList = [
  "Shelf",
  "Hi Stool",
  "Standing Desk",
  "Earring Case",
  "Low Table",
  "Desk Organizer",
  "Tray",
  "Hanger Rack",
  "Bed",
  "Lamp Stand",
  "Bench",
  "Lamp Shade",
  "PC Stand",
  "Desk",
  "Stool"]

var Productlen = Object.keys(ProductTitleList).length;

//
const ProductStyled = styled.div `
.swipercontainer{
  width: calc(var(--Window-Size) + 10px * 3);
  height: -moz-available;
  height: -webkit-fill-available;
  height: fill-available;
  display: block;
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translate(-50%, 0);
  overflow: hidden scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 0;
}

@media screen and (max-width: 1200px){
  .swipercontainer{
    width: calc(var(--Window-Size) + 10px * 2);
    }
  }

@media screen and (max-width: 768px){
  .swipercontainer{
    width: calc(var(--Window-Size) + 10px * 1);
    }
  }

.swipercontainer::-webkit-scrollbar {
    display:none;
}

.swiperwrapper{
  display: flex;
  position: relative;
  flex-wrap: wrap;
  margin: 0px 0px 60px 0px;
}

.swiperslide{
  width: calc(var(--Window-Size)/3);
  height: calc(var(--Window-Size) * 2/9);
  display: block;
  position: relative;
  margin: 5px;
}

@media screen and (max-width: 1200px){
  .swiperslide{
    width: calc(var(--Window-Size)/2);
    height: calc(var(--Window-Size) * 2/6);
  }
}

@media screen and (max-width: 768px){
  .swiperslide{
    width: calc(var(--Window-Size));
    height: calc(var(--Window-Size) * 2/3);
  }
}

.slideimages{
  height: 100%;
  margin: auto;
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;
}

.hero-slider .content {
  position: relative;
  z-index: 2;
}

.image{
  height: 100%;
  width: auto;
  margin: auto;
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;
}

.text{
  margin: 0;
  height: 32px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(254,254,254,0.5);
}

@media screen and (max-width: 768px){
  .text{
    height: 22px;
  }
}

.font{
  font-weight: 200;
  color: #565565;
  font-size: 30px;
}

@media screen and (max-width: 768px){
  .font{
    font-size: 20px;
    }
  }
`

var length = Productlen;
var start = 0;
var list = Array.apply(null, new Array(length)).map(function(v, i) {return start + i;});

function ProductSlider () {

    const ProductItems = list.map((i) =>
      <div className="swiperslide" key={i.toString()}>
        <div className="slideimages">
          <img src={require("./Images/image" + [Productlen - i] + ".jpg")} alt="image1" className="image"/>
        </div>
        <div className="text">
          <h1 className="font">{ProductTitleList[i]}</h1>
        </div>
      </div>);

        return (
            <div className="swiperwrapper">
              {ProductItems}
            </div>
      )
  };

  const ProductSliderDesktop = () => {
    return (
      <ProductStyled>
        <div className="swipercontainer">
          { ProductSlider() }
        </div>
    </ProductStyled>);
  };
  
  export default ProductSliderDesktop;
