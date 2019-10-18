import React from 'react';
import styled from '@emotion/styled';
import { Icon } from 'semantic-ui-react';
import { Link } from 'gatsby';

import { CategoryWave } from '../SVG';
import { categoriesNames, CategoriesCodes } from '../../shared';
import { mq } from '../layout';

interface CategoryHeaderProps {
  category: CategoriesCodes;
  subcategory?: string;
  color: string;
}

export const CategoryHeader = ({ category, subcategory, color }: CategoryHeaderProps) => {
  return (
    <>
      <HeaderWrapper>
        <CategoryWave color={color} />
        <HeaderTite>
          <CategoryLink to="/">
            <Icon size="small" inverted name="home" />
          </CategoryLink>
          <CategoryLink to={`/${category.toLowerCase()}`}> / {categoriesNames[category].name}</CategoryLink>
          {subcategory ? ` / ${subcategory}` : ''}
        </HeaderTite>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  height: 40vh;
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderTite = styled.div`
  font-weight: 700;
  color: white;
  font-size: 3.2vw;
  width: 100%;
  line-height: 100%;
  margin-bottom: 50px;
  ${mq({
    fontSize: ['5vw', '5vw', '5vw', '5vw', '3.2vw'],
  })}
`;

const CategoryLink = styled(Link)`
  color: white;
  &:hover {
    color: white;
  }
`;
