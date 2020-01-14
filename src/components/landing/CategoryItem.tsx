import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { CategoriesCodes, categoriesNames, mq } from '../../shared';
import { CategoryImage } from '../SVG';

interface CategoryItemProps {
  code: CategoriesCodes;
  count: number;
}

// Inspired by https://codepen.io/Jhonierpc/pen/MWgBJpy
export const CategoryItem = ({ code, count }: CategoryItemProps) => {
  return (
    <Card color={categoriesNames[code].color} data-testid={`category-${code}`} to={`/${code}/`}>
      <Face1>
        <Face1Content>
          {/* TODO: Poprawić ten width na responsywny*/}
          <CategoryImage code={code} style={{ width: '5vw' }} />
          <CategoryName>{categoriesNames[code].name}</CategoryName>
          <ToolsCount>{`${count} tools`}</ToolsCount>
        </Face1Content>
      </Face1>
      <Face2>
        <Face2Content>
          <CategoryDescription>{categoriesNames[code].info}</CategoryDescription>
        </Face2Content>
      </Face2>
    </Card>
  );
};

const height = 200;
const Card = styled(Link)`
  ${mq({
    width: ['100%', '100%', '44%', '26%', '20%'],
  })}
  height: ${height}px;
  margin: 1% 1%;
  position: relative;
  cursor: pointer;
  z-index: 0;
  flex-grow: 1;
  &:hover {
    z-index: 1;
    & > div:first-of-type {
      background: ${props => props.color};
      transform: translateY(0);
      & > div {
        opacity: 1;
      }
    }
    div:nth-of-type(2) {
      transform: translateY(0);
    }
  }
`;

const Face1 = styled.div`
  height: ${height}px;
  transition: 0.5s;
  position: relative;
  background: #184461;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(100px);
`;

const Face1Content = styled.div`
  opacity: 0.2;
  transition: 0.5s;
`;

const CategoryName = styled.h3`
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
`;

const ToolsCount = styled.h4`
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1em;
`;

const Face2 = styled.div`
  height: ${height}px;
  transition: 0.5s;
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-${height / 2}px);
`;

const Face2Content = styled.div``;

const CategoryDescription = styled.div`
  margin: 0;
  padding: 0;
`;
