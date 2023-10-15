import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
    return (
        <MainHeader>
            <NavLink to='/'>
                <img src="./images/logoecom.png" alt="my logo img" className='logoecom'/>
            </NavLink>
            <Nav />
        </MainHeader>
    )
}

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

.logoecom {
  height: 6rem;
}
`;

export default Header
