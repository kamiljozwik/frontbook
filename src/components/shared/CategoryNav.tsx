import React from 'react';
import { Link } from 'gatsby';

import { colors, activeCategories, mq } from '../../shared';
import styled from '@emotion/styled';

export const CategoryNav = () => {
  return (
    <FixedNavigation>
      <NavList>
        {activeCategories.map(category => (
          <NavItem key={category} to={`/${category}`}>
            {category.toUpperCase()}
          </NavItem>
        ))}
      </NavList>
    </FixedNavigation>
  );
};

const FixedNavigation = styled.div`
  position: fixed;
  z-index: 9;
  padding: 50px 50px 50px 0;
  left: -60px;
  transform: translateX(0px);
  top: 20vh;
  transition: 0.5s;
  ${mq({
    display: ['none', 'none', 'block', 'block', 'block'],
  })}
  &:hover {
    transform: translateX(60px);
  }
`;

const NavList = styled.ul`
  margin: 0;
  transition: 0.5s;
  &:hover {
    color: white;
  }
`;

const NavItem = styled(Link)`
  list-style: none;
  margin: 0;
  width: 80px;
  height: 60px;
  background: ${colors.darkBlue};
  text-align: center;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  &:hover {
    color: white;
    filter: drop-shadow(-3px 2px 5px rgba(0, 0, 0, 0.5));
  }
`;
