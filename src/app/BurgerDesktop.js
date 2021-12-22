import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import HomeApp from '../Home/App'
import AboutMeApp from '../AboutMe/App'
import ProductApp from '../Product/App'
import PhotoApp from '../Photo/App'
import MediaApp from '../Media/App'

import icon from './Images/main-logo.png';
import iicon from './Images/instagram-logo.svg';
import ficon from './Images/facebook-logo.svg';
import ticon from './Images/twitter-logo.svg';
import bicon from './Images/base-dlogo.png';

const StyleMenu = styled.nav`
  width: 100vw;
  height: 55px;
  opacity: 0.8;
  background-color: #e8ebeb;
  position: fixed;
  top: 0;
  left: 0;
  -webkit-box-align: initial;
  -webkit-box-pack: center;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  .logo {
    padding: 0;
    position: fixed;
    top: 8px;
    left: 20px;
  }
  .taglist{
    list-style: none;
  }
  .tag{
    text-decoration: none;
  }
`

const Div = styled.div`
  list-style: none;
  display: -webkit-box;
  flex-flow: column nowrap;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 110px;
  ul {
    display: -webkit-box;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 15px;
  }
  ul li {
    padding: 5px 10px;
    list-style: none;
  }
  ul li a {
    text-decoration: none;
    font-weight: 200;
    color: #000000;
  }
  ul p {
    padding: 5px 5px;
    list-style: none;
  }
`;

const Burger = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <StyleMenu>
          <div className="logo"><li className="taglist">
            <Link to='/' className="tag">
              <img src={icon} alt="icon" width="auto" height="40"></img>
            </Link></li></div>
      </StyleMenu>
      <Div>
         <ul>
           <li><Link to='/AboutMe'>About Me</Link></li>
           <li><Link to='/Product'>Product</Link></li>
           <li><Link to='/Photo'>Photo</Link></li>
           <li><Link to='/Media'>Media</Link></li>
            <p><a href="https://www.facebook.com/profile.php?id=100018652172573">
              <img src={ficon} alt="icon" width="20" height="20"></img>
            </a></p>
            <p><a href="https://twitter.com/YSK_1924">
              <img src={ticon} alt="icon" width="20" height="20"></img>
            </a></p>
            <p><a href="https://www.instagram.com/nyusuke1924/?hl=ja">
              <img src={iicon} alt="icon" width="20" height="20"></img>
            </a></p>
            <p><a href="https://botanshop.base.ec">
              <img src={bicon} alt="icon" width="20" height="20"></img>
            </a></p>
        </ul>
    </Div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/AboutMe/' component={AboutMe} />
      <Route path='/Product/' component={Product} />
      <Route path='/Photo/' component={Photo} />
      <Route path='/Media/' component={Media} />
  </Switch>
    </BrowserRouter>
  )
}

const Home = () =>(
  <HomeApp/>
)

const AboutMe = () =>(
  <AboutMeApp/>
)

const Product = () =>(
  <ProductApp/>
)

const Photo = () =>(
  <PhotoApp/>
)

const Media = () =>(
  <MediaApp/>
)

export default Burger
