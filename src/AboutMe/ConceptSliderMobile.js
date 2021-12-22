import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
.main_box{
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}

.image{
  width: auto;
  height: calc(100% - 55px);
	min-height: 400px;
  margin: auto;
  display: flex;
  position: fixed;
  top: calc(50% + 27.5px);
  right: 50%;
  transform: translate(50%, -50%);
}

.image9{
  display: none;
}

.text_box{
  width: calc(100vh * 0.8 * 1.5);
  height: calc(100vh * 0.8);
  max-height: 500px;
  margin: auto;
  display: brock;
  position: fixed;
  top: calc(100% - 10px);
  left: 25px;
  transform: translate(0, -50%);
}

.color_box{
  width: auto;
  height: auto;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(254,254,254,0.5);
}

.fontname{
  font-size: clamp(15px, 2.1vw, 30px);
  transform: translate(0, 25%);
}


.fontsab{
  font-size: clamp(10px, 1.4vw, 20px);
  transform: translate(0, -10px);
}

.fontb{
  font-size: clamp(10px, 1.4vw, 20px);
  transform: translate(0, 0);
}

.atag{
  color:#000000;
  text-decoration:none;
  border-bottom:0.1px dotted #000000;
}
`

// slider component
const ConceptSliderMobile = () => {
  return (<Div>
    <div className="main_box">
      <img src={require("./Images/mobile/image8.jpg")} alt="image1" className="image"></img>
      <img src={require("./Images/image9.jpg")} alt="image1" className="image9"></img>
      <div className="text_box">
        <div className="color_box">
        <h1 className="text-uppercase fontname">中村 祐介</h1>
        <h1 className="fontsab">nakamura yusuke</h1>
        <h1 className="fontb">1997 11 広島県生まれ</h1>
        <h1 className="fontb">2020 3 広島工業大学建築デザイン学科 卒業</h1>
        <h1 className="fontb">2020 4 <a href="https://vuild.co.jp/" className = "atag">VUILD株式会社</a> 入社</h1>
        <h1 className="fontb">2020 5 MORILABで<a href="https://mochitsu-motaretsu.morilab.xyz/" className = "atag">モチツモタレツ</a> 活動開始</h1>
        <h1 className="fontb">2020 7 webサイトBOTANを独学で作成</h1>
        <h1 className="fontb">2020 11 プロダクト作品をBOTANshopにて販売開始</h1>
      </div>
      </div>
    </div>
  </Div>);
};

export default ConceptSliderMobile;
