import React from 'react';
import styled from 'styled-components';

var Mediaurl =
[
"https://note.com/vuild/n/n2bdb0e882099",
"https://architects.vuild.co.jp/works/hiramiya-interior/",
"https://architects.vuild.co.jp/works/camp-pod/",
"https://note.com/vuild/n/nfef0c5a5979e",
"https://note.com/vuild/n/n1230102fd602",
"https://note.com/vuild/n/n95ad6784d821",
"https://architects.vuild.co.jp/works/nomurakougeisha-pavilion/",
"https://architecturephoto.net/97928/",
"https://architects.vuild.co.jp/works/kayac-park-office/",
"https://architecturephoto.net/98085/",
"https://architects.vuild.co.jp/works/yakushimajisugi-pavilion/",
"https://architects.vuild.co.jp/works/clt-pavilion/",
"https://architects.vuild.co.jp/works/kayac-stand/"]

var MediaTitleList = ["note","VUILD","VUILD","note","note","note","VUILD","ArchitecturePhoto","VUILD","ArchitecturePhoto","VUILD","VUILD","VUILD"]
var Medialen = Object.keys(MediaTitleList).length;

const Div = styled.div `
.swipercontainer{
  width: calc(80vw + 10px * 3);
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
    width: calc(80vw + 10px * 2);
    }
  }

@media screen and (max-width: 768px){
  .swipercontainer{
    width: calc(80vw + 10px * 1);
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
  width: calc(80vw/3);
  display: block;
  position: relative;
  margin: 5px;
}

@media screen and (max-width: 1200px){
  .swiperslide{
    width: calc(80vw/2);
    }
  }

  @media screen and (max-width: 768px){
    .swiperslide{
      width: calc(80vw);
      }
    }

.slideimage{
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
  height: auto;
  width: 100%;
}

.tag{
  height:100%;
  width:100%;
  margin: auto;
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
  font-weight: 600;
  color: #565565;
  font-size: 30px;
}

@media screen and (max-width: 768px){
  .font{
    font-size: 20px;
    }
  }
`

var length = Medialen;
var start = 0;
var list = Array.apply(null,new Array(length)).map(function(v,i){ return start+i;});

function MediaSlider () {

  const items = list.map((i) =>
      <div className="swiperslide" key={i.toString()}>
        <div className="slideimage">
          <p className="tag"><a href={Mediaurl[i]}>
            <img src={require("./Images/image" + [Medialen-i] + ".jpg")} alt="image1" className='image'></img>
          </a></p>
        </div>
        <div className="text">
          <h1 className="font">{MediaTitleList[i]}</h1>
        </div>
      </div>);

  return (
    <div className="swiperwrapper">
      { items }
    </div>
  );
};

const MediaSliderDesktop = () => {
  return (
    <Div>
    <div className="swipercontainer">
            { MediaSlider() }
      </div>
  </Div>);
};

export default MediaSliderDesktop;
