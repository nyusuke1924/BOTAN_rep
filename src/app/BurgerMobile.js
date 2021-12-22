import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import HomeApp from '../Home/App'
import AboutMeApp from '../AboutMe/App'
import ProductApp from '../Product/App'
import PhotoApp from '../Photo/App'
import MediaApp from '../Media/App'

import dicon from './Images/title-dlogo.png';
import micon from './Images/title-mlogo.png';
import iicon from './Images/instagram-mlogo.png';
import ficon from './Images/facebook-mlogo.png';
import ticon from './Images/twitter-mlogo.png';
import bicon from './Images/base-mlogo.png';



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
    background-color: #0D2538;
    opacity: 0.9;
    z-index: 20;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: -webkit-fill-available;
    width: -webkit-fill-available;
    -webkit-box-align: initial;
    -webkit-box-pack: center;
    transition: transform 0.15s ease-in-out;

    ul {
      padding: 20px 20px;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-box-align: center;
      -webkit-box-pack: center;
      align-items: center;
      justify-content: center;
    }

    ul li {
      width: 100%;
      height: 12vh;
      list-style: none;
      -webkit-box-align: center;
      -webkit-box-pack: center;
    }

    ul li a {
      text-decoration: none;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-box-pack: center;
      height: 100%;
      font-size: 150%;
      color: #ffffff;
    }

    ul div {
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-box-pack: center;
    }

    ul div p {
      display: flex;
      padding: 0 10px;
      align-items: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-box-pack: center;
      height: 100%;
    }
`;

const StyledBurger = styled.div `
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 100;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    z-index: 30;
    background-color: ${ ({open}) => open ? '#fff' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: transform 0.15s ease-in-out;

    &:nth-child(1) {
      transform: ${ ({open}) => open ?
      'rotate(-225deg) translate(-1.125rem, -1.125rem)' : 'rotate(0) translate(0, 0)'};
    }
    &:nth-child(2) {
      transition: opacity 0.100s 0.150s ease;
      transform: ${ ({open}) => open ?
      'translateX(300%)' : 'translateX(0)'};
      opacity: ${ ({open}) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${ ({open}) => open ?
      'rotate(225deg) translate(-1.125rem, 1.125rem)'  : 'rotate(0) translate(0, 0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = React.useState(false)
  return (<>
     <StyledBurger open = {open}
      onClick = {() => setOpen(!open)}>
      <div/>
      <div/>
      <div/>
    </StyledBurger>

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <StyleMenu>
        <div>
          <div className="logo">
            <li className="taglist">
              <Link to='/' className="tag">
                <img src={dicon} alt="icon" width="auto" height="40"></img>
              </Link>
            </li>
          </div>

        </div>
      </StyleMenu>

      <Div open={open}
        onClick = {() => setOpen(!open)}>
         <ul>
           <li><Link to='/'><img src={micon} alt="icon" width="auto" height="40"></img></Link></li>
           <li><Link to='/AboutMe/'>About Me</Link></li>
           <li><Link to='/Product/'>Product</Link></li>
           <li><Link to='/Photo/'>Photo</Link></li>
           <li><Link to='/Media/'>Media</Link></li>
             <div>
               <p><a href="https://www.instagram.com/nyusuke1924/?hl=ja">
                 <img src={iicon} alt="icon" width="20" height="20"></img>
               </a></p>
               <p><a href="https://www.facebook.com/profile.php?id=100018652172573">
                 <img src={ficon} alt="icon" width="20" height="20"></img>
               </a></p>
               <p><a href="https://twitter.com/YSK_1924">
                 <img src={ticon} alt="icon" width="20" height="20"></img>
               </a></p>
               <p><a href="https://botanshop.base.ec">
                 <img src={bicon} alt="icon" width="20" height="20"></img>
               </a></p>
            </div>
         </ul>
    </Div>

    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/AboutMe' component={AboutMe} />
      <Route path='/Product' component={Product} />
      <Route path='/Photo' component={Photo} />
      <Route path='/Media' component={Media} />
    </Switch>
    </BrowserRouter>
    </>
)}

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
