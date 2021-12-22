import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';

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

var size = "80vw";

document.documentElement.style.setProperty('--Photo-size', size);

window_load();
window.onresize = window_load;

function window_load() {
	const sW = window.innerWidth;

  if(1200 <= sW){
    const size1 = "70px";
    document.documentElement.style.setProperty('--Photo-size1', size1);
  }
  else if(768 <= sW <= 1200){
    const size1 = "60px";
    document.documentElement.style.setProperty('--Photo-size1', size1);
  }
  else{
    const size1 = "50px";
    document.documentElement.style.setProperty('--Photo-size1', size1);
  }
}

const Div = styled.div `

.swipercontainer{
  width: calc(var(--Photo-size) + 10px * 3);
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
    width: calc(var(--Photo-size) + 10px * 2);
    }
  }

@media screen and (max-width: 768px){
  .swipercontainer{
    width: calc(var(--Photo-size) + 10px * 1);
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
  display: block;
  position: relative;
  margin: 5px;
}

.slideimages{
  width: calc(var(--Photo-size)/3);
  height: auto;
  margin: auto;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1200px){
  .slideimages{
    width: calc(var(--Photo-size)/2);
  }
}

@media screen and (max-width: 768px){
  .slideimages{
    width: calc(var(--Photo-size));
  }
}

.hero-slider .content {
  position: relative;
  z-index: 2;
}

.image{
  width: auto;
  height: calc(var(--Photo-size)/3 * 2/3);
}

@media screen and (max-width: 1200px){
  .image{
    height: calc(var(--Photo-size)/2 * 2/3);
  }
}

@media screen and (max-width: 768px){
  .image{
    height: calc(var(--Photo-size) * 2/3);
  }
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

.none{
  display: none;
  width: 0px;
  height: 0px;
}

.show{
  display: flex;
  height: calc(70vw * 2/3 + var(--Photo-size1) * 2);
  max-height: calc(400px + var(--Photo-size1) * 2);
  width: calc(70vw + var(--Photo-size1) * 2);
  max-width: calc(600px + var(--Photo-size1) * 2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: var(--Photo-size1);
  background-color: rgba(254,254,254,0.9);
	border-radius: 10px;
}

.swiper-slide{
  display: flex;
  justify-content: center;
  align-items: center;
}

.slideimage{
  width: auto;
  height: 100%;
}
`

const CloseButton = styled.div `
width: 30px;
height: 30px;
position: fixed;
top: calc(var(--Product-size1)/2 - 15px);
right: calc(var(--Product-size1)/2 - 15px);
z-index: 100;
display: flex;
flex-flow: column nowrap;

div {
  width: 30px;
  height: 3px;
  z-index: 30;
  position: absolute;
  top: calc(50% - 1.5px);
  background-color: rgba(0,0,0,0.75);
  border-radius: 10px;
  transform-origin: center;

  &:nth-child(1) {
    transform: rotate(45deg);
  }

  &:nth-child(2) {
    transform: rotate(-45deg);
  }
}
`

var length = Photolen;
var start = 1;
var list = Array.apply(null, new Array(length)).map(function(v, i) {return start + i;});

class PhotoSliderDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      startItem: "",
    }
  };

  render() {
    var roop = () => {
      const params = {
        initialSlide: (this.state.startItem),
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        observer: true,
        observeParents: true,
        rebuildOnUpdate: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
      const items = list.map((i) =>
      <div className="swiperslide" key={i.toString()}>
        <div className="slideimages">
          <img src={require("./Images/desktop/image" + [Photolen - i + 1] + ".jpg")} alt="image1" className="image"
            onClick = {() => { this.setState({toggle: !this.state.toggle, startItem: (i - 1)})}}/>
        </div>
        <div className="text">
          <h1 className="font">{PhotoTitleList[i - 1]}</h1>
        </div>
      </div>);

      const slide = list.map((a) =>
      <div>
        <img src={require("./Images/desktop/image" + [Photolen - a + 1] + ".jpg")} alt="images" className="slideimage" id="sWH"></img>
      </div>);

          return (
          <div>
            <div className="swipercontainer">
              <div className="swiperwrapper">
                {items}
              </div>
            </div>
            <div className={this.state.toggle? " show": " none"}>
              <CloseButton onClick = {() => { this.setState({toggle: !this.state.toggle})}}>
                <div/>
                <div/>
              </CloseButton>
              <Swiper {...params}>
                {slide}
              </Swiper>
              </div>
          </div>
        );
    };

    return (
      <Div>
        {roop()}
    </Div>);

  }
};

export default PhotoSliderDesktop;
