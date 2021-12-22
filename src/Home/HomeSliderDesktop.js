import React from 'react';
import styled from 'styled-components';


//text
var HomeTitleList = ["About Me","Product","Photo","Media"]
var Homelen = Object.keys(HomeTitleList).length;

document.documentElement.style.setProperty('--Home-num', Homelen);

window_load();
window.onresize = window_load;

function window_load() {
	const sW = window.innerWidth;
	const sH = window.innerHeight;

  document.documentElement.style.setProperty('--Home-sW', sW);
  document.documentElement.style.setProperty('--Home-sH', sH);

  if(sW <= sH*1.5){
    const SH = "100%"
    const SW = "auto"

    document.documentElement.style.setProperty('--Home-SH', SH);
    document.documentElement.style.setProperty('--Home-SW', SW);
  }
  else{
    const SH = "auto"
    const SW = "100%"

    document.documentElement.style.setProperty('--Home-SH', SH);
    document.documentElement.style.setProperty('--Home-SW', SW);
  }
}

const Div = styled.div`
.main_box{
  width: calc(1px * var(--Home-sW));
  height: calc(1px * var(--Home-sH));
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.imageWH{
  width: var(--Home-SW);
  height: var(--Home-SH);
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: cover;
  background-position: center;
}

.main_img {
   z-index:9;
   opacity: 0;

   -webkit-animation: anime 24s 0s infinite;
   animation: anime 24s 0s infinite; }

   .main_img:nth-of-type(1) {
     -webkit-animation-delay: 0s;
     animation-delay: 0s; }

   .main_img:nth-of-type(2) {
     -webkit-animation-delay: 6s;
     animation-delay: 6s; }

   .main_img:nth-of-type(3) {
     -webkit-animation-delay: 12s;
     animation-delay: 12s; }

   .main_img:nth-of-type(4) {
     -webkit-animation-delay: 18s;
     animation-delay: 18s; }

  @keyframes anime {
    0% {
        opacity: 0;
    }
    8% {
        opacity: 1;
    }
    17% {
        opacity: 1;
    }
    30% {
        opacity: 0;
         z-index:9;
    }
    100% { opacity: 0 }
}

.text{
  font-size: calc(0.1px * var(--Home-sH));
  Z-index: 10;
  text-align:center;
  position: fixed;
  top: calc(50% - 35px);
  left: 70px;
  font-weight: 500;
}
`

var length = Homelen;
var start = 0;
var list = Array.apply(null,new Array(length)).map(function(v,i){ return start+i;});

const HomeSliderDesktop = () => {
var roop =() => {
	const imageWH = " imageWH"
	const items = list.map((i) =>
		<div className ="main_box main_img" key={i.toString()}>
			<img src={require("./Images/desktop/image" + [i+1] + ".jpg")} alt="images" className={imageWH} id="sWH"></img>
		<h1 className="text">{HomeTitleList[i]}</h1>
	</div>);

  return (<div>{ items }</div>);
};


  return(
    <Div>{ roop() }</Div>
  );
};

export default HomeSliderDesktop;
