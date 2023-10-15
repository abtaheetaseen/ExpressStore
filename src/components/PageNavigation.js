import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PageNavigation = ({title}) => {
  return (
    <Wrapper>
        <NavLink to='/'>
            Home
        </NavLink> /{title}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  padding-left: 6rem;

  a {
    font-size: 20px;
    color: darkblue;
  }

  a:hover{
    font-size: 21px;
  }
`;

export default PageNavigation
