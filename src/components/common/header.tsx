import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Header = () => {
  return <HeaderWrapper>
    <HeaderLink to="/" className='first'>로아유치원</HeaderLink>
    <HeaderLinkWrapper>
      <HeaderLink to="/">스케쥴</HeaderLink>
      <HeaderLink to="/crew">조직도</HeaderLink>
    </HeaderLinkWrapper>
    <HeaderLinkWrapper />
  </HeaderWrapper>
};

const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #3f51b5;
  height: 60px;
  padding: 20px;
  box-shadow: 0 3px 5px -1px #0003, 0 6px 10px #00000024, 0 1px 18px #0000001f;
  margin-bottom: 10px;
`;

const HeaderLink = styled(Link)`
  margin-right: 50px;
  font-size: 16px;
  color: white;
  
  &.first { 
    font-weight: bold;
  }

  &:hover {
    color: black;
  }
`;

const HeaderLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Header;