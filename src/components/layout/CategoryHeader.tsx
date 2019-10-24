import React from 'react';
import styled from '@emotion/styled';
import { Icon, Label } from 'semantic-ui-react';
import { Link } from 'gatsby';

import { CategoryWave } from '../SVG';
import { categoriesNames, CategoriesCodes } from '../../shared';
import { mq } from '../layout';

interface CategoryHeaderProps {
  category: CategoriesCodes;
  subcategories?: string[];
  subcategory?: string;
  color: string;
}

interface OtherSubcategoriesProps {
  subcategories?: string[];
  activeSubcategory?: string;
}

const OtherSubcategories = ({ subcategories, activeSubcategory }: OtherSubcategoriesProps) => {
  return (
    <Label.Group>
      {subcategories && subcategories.map(el => (
        <SubcategoryLabel
          key={el}
          basic
          isActive={el.split('_')[1] === activeSubcategory}
          as={Link}
          to={`/${el.replace('_', '/')}`}
        >
          {el.split('_')[1]}
        </SubcategoryLabel>
      ) )}
    </Label.Group>
  );
};

export const CategoryHeader = ({ category, subcategories, subcategory, color }: CategoryHeaderProps) => {
  return (
    <>
      <HeaderWrapper>
        <CategoryWave color={color} />
        <HeaderTitle>
          <CategoryLink to="/">
            <Icon size="small" inverted name="home" />
          </CategoryLink>
          <CategoryLink to={`/${category.toLowerCase()}`}> / {categoriesNames[category].name}</CategoryLink>
          {subcategory ? ` / ${subcategory}` : ''}
        </HeaderTitle>
        <OtherSubcategories subcategories={subcategories} activeSubcategory={subcategory} />
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

const HeaderTitle = styled.div`
  font-weight: 700;
  color: white;
  font-size: 3.2vw;
  width: 100%;
  line-height: 100%;
  margin-bottom: 10px;
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

const SubcategoryLabel = styled(Label)`
  &&& {
    transition: 0.1s;
    opacity: ${props => props.isActive ? 0.8 : 0.5};
    &&:hover {
      transition: 0.1s;
      opacity: 0.8;
      color: black;
    }
  }
`;
