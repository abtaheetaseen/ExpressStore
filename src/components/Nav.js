import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {FiShoppingCart} from 'react-icons/fi';
import {CgMenu, CgClose} from 'react-icons/cg';
import { useCartContext } from '../context/cart_context';
// import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from '../styles/Button';

const Nav = () => {

    const Nav = styled.nav`
    .navbar-lists {
        display: flex;
        gap: 4.8rem;
        align-items: center;
  
        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }
  
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
  
      .mobile-navbar-btn {
        display: none;
        background-color: transparent;
        cursor: pointer;
        border: none;
      }
  
      .mobile-nav-icon[name="close-outline"] {
        display: none;
      }
  
      .close-outline {
        display: none;
      }
  
      .cart-trolley--link {
        position: relative;
  
        .cart-trolley {
          position: relative;
          font-size: 2.5rem;
        }
  
        .cart-total--item {
          width: 2.4rem;
          height: 2.4rem;
          position: absolute;
          background-color: #000;
          color: #000;
          border-radius: 50%;
          display: grid;
          place-items: center;
          top: -20%;
          left: 70%;
          background-color: ${({ theme }) => theme.colors.helper};
        }
      }
  
      .user-login--name {
        text-transform: capitalize;
      }
  
      .user-logout,
      .user-login {
        font-size: 1.4rem;
        padding: 0.8rem 1.4rem;
      }

      .userName{
        backgroundColor: bisque;
        color: black;
        padding: 10px 10px;
      }
  
      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .mobile-navbar-btn {
          display: inline-block;
          z-index: 9999;
          border: ${({ theme }) => theme.colors.black};
  
          .mobile-nav-icon {
            font-size: 3.2rem;
            color: ${({ theme }) => theme.colors.black};
          }
        }
  
        .active .mobile-nav-icon {
          display: none;
          font-size: 3.2rem;
          position: absolute;
          top: 30%;
          right: 10%;
          color: ${({ theme }) => theme.colors.black};
          z-index: 9999;
        }
  
        .active .close-outline {
          display: inline-block;
          color: white;
        }
  
        .navbar-lists {
          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          background-color: #fff;
  
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
  
          visibility: hidden;
          opacity: 0;
          transform: translateX(100%);
          /* transform-origin: top; */
          transition: all 3s linear;
        }
  
        .active .navbar-lists {
          visibility: visible;
          opacity: 1;
          transform: translateX(0);
          z-index: 999;
          transform-origin: right;
          transition: all 3s linear;
          background: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("images/heroimg.jfif");
          background-size: cover;
          background-repeat: no-repeat;
  
          .navbar-link {
            font-size: 2.2rem;
            color: white;
          }
        }
        .cart-trolley--link {
          position: relative;
  
          .cart-trolley {
            position: relative;
            font-size: 5.2rem;
          }
  
          .cart-total--item {
            width: 4.2rem;
            height: 4.2rem;
            font-size: 2rem;
          }
        }
  
        .user-logout,
        .user-login {
          font-size: 2.2rem;
          padding: 0.8rem 1.4rem;
        }
      }
    `;

    const [menuIcon, setMenuIcon] = useState();
    const {total_item} = useCartContext();
    // const { loginWithRedirect, logout, isAuthenticated, user} = useAuth0();

  return (
    <Nav>
        <div className={menuIcon ? 'navbar active' : 'navbar'}>
            <ul className="navbar-lists">
                <li>
                    <NavLink to='/' className='navbar-link home-link' onClick={()=>{setMenuIcon(false)}} >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/about' className='navbar-link' onClick={()=>{setMenuIcon(false)}} >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/products' className='navbar-link' onClick={()=>{setMenuIcon(false)}} >
                        Products
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/contact' className='navbar-link' onClick={()=>{setMenuIcon(false)}} >
                        Contact
                    </NavLink>
                </li>

                {/* {isAuthenticated && <p className='userName'>{user.name}</p>}

                {isAuthenticated ? 
                  <li><Button onClick={() => logout({ logoutParams: { returnTo:      window.location.origin } })}>
                  Log Out
                  </Button>
                </li> : 

                <li><Button onClick={() => loginWithRedirect()}>Log In</Button></li>
                } */}

                <li>
                    <NavLink to='/cart' className='navbar-link cart-trolley--link' onClick={()=>{setMenuIcon(false)}} >
                        <FiShoppingCart className='cart-trolley'/>
                        <span className='cart-total--item'>{total_item}</span>
                    </NavLink>
                </li>
            </ul>

            {/* two buttons for open & close navbar */}
            <div className="mobile-navbar-btn">
                <CgMenu onClick={()=>{setMenuIcon(true)}} className='mobile-nav-icon' name='menu-outline'/>

                <CgClose onClick={()=>{setMenuIcon(false)}} className='mobile-nav-icon close-outline' name='close-outline'/>
            </div>
        </div>
    </Nav>
  )
}

export default Nav
