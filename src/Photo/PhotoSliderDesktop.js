import React from 'react';
import styled from 'styled-components';

var PhotoTitleList = [
  "20.09.23",
  "20.09.21",
  "20.08.13",
  "20.03.22",
  "19.11.24",
  "19.10.30",
  "19.10.30",
  "19.10.29",
  "19.10.29",
  "19.09.30",
  "19.09.13",
  "19.08.11",
  "19.06.13",
  "19.05.05",
  "19.03.24",
  "19.02.02",
  "18.09.17",
  "18.08.15",
  "18.08.11",
  "18.08.05",
  "18.05.21",
  "18.05.04",
  "18.04.07",
  "18.04.03",
  "18.03.04",
  "18.03.03",
  "18.02.17",
  "18.02.08",
  "18.02.03",
  "17.11.16",
  "17.10.13",
  "17.09.15",
  "17.09.12",
  "17.08.15",
  "17.08.03",
  "17.06.08",
  "17.05.27",
  "17.01.26",
  "17.01.14"
]
var Photolen = Object.keys(PhotoTitleList).length;

//
const PhotoStyled = styled.div `
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

var length = Photolen;
var start = 0;
var list = Array.apply(null, new Array(length)).map(function(v, i) {return start + i;});

function PhotoSlider () {

    const PhotoItems = list.map((i) =>
      <div className="swiperslide" key={i.toString()}>
        <div className="slideimages">
          <img src={require("./Images/image" + [Photolen - i] + ".jpg")} alt="image1" className="image"/>
        </div>
        <div className="text">
          <h1 className="font">{PhotoTitleList[i]}</h1>
        </div>
      </div>);

        return (
            <div className="swiperwrapper">
              {PhotoItems}
            </div>
      )
  };

  const PhotoSliderDesktop = () => {
    return (
      <PhotoStyled>
        <div className="swipercontainer">
          { PhotoSlider() }
        </div>
    </PhotoStyled>);
  };
  
  export default PhotoSliderDesktop;
  