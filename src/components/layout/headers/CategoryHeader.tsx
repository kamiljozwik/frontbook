import React from 'react';
import styled from '@emotion/styled';
import { Icon, Label } from 'semantic-ui-react';
import { Link } from 'gatsby';

import { CategoryWave, CategoryImage } from '../../SVG';
import { SubcategoryImage } from '../../SVG/subcategories';
import { categoriesNames, CategoriesCodes, Subcategory, mq } from '../../../shared';

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

const CategoryImageStyle = {
  width: '8vw',
  height: '8vw',
  margin: '10px',
  border: '4px solid white',
  borderRadius: '50%',
};

const SubcategoryImageStyle = {
  width: '5vw',
  height: '5vw',
  border: '2px solid white',
  borderRadius: '33%',
};

const OtherSubcategories = ({ subcategories, activeSubcategory }: OtherSubcategoriesProps) => {
  return (
    <Label.Group>
      {subcategories &&
        subcategories.map(el => (
          <SubcategoryLabel
            key={el}
            basic
            isactive={el.split('_')[1] === activeSubcategory ? 'true' : undefined}
            as={Link}
            to={`/${el.replace('_', '/')}`}
          >
            {el.split('_')[1]}
          </SubcategoryLabel>
        ))}
    </Label.Group>
  );
};

export const CategoryHeader = ({ category, subcategories, subcategory, color }: CategoryHeaderProps) => {
  return (
    <>
      <CategoryHeaderWrapper>
        <CategoryWave color={color} />
        <HeaderData>
          <HeaderTitle>
            <CategoryLink to="/" aria-label="Frontbook home page">
              <Icon size="small" inverted name="home" />
            </CategoryLink>
            <CategoryLink to={`/${category.toLowerCase()}`}> / {categoriesNames[category].name}</CategoryLink>
            {subcategory ? ` / ${subcategory}` : ''}
          </HeaderTitle>
          <OtherSubcategories subcategories={subcategories} activeSubcategory={subcategory} />
        </HeaderData>
        <HeaderGraphics>
          <CategoryImage code={category} style={CategoryImageStyle} />
          {subcategory && (
            <SubcategoryImage code={`${category}_${subcategory}` as Subcategory} style={SubcategoryImageStyle} />
          )}
        </HeaderGraphics>
      </CategoryHeaderWrapper>
    </>
  );
};

const CategoryHeaderWrapper = styled.div`
  height: calc(50vh - 100px);
  ${mq({
    height: [
      'calc(60vh - 100px)',
      'calc(50vh - 100px)',
      'calc(50vh - 100px)',
      'calc(50vh - 100px)',
      'calc(50vh - 100px)',
    ],
  })}
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  & > svg {
    ${mq({
      minHeight: ['60vh', '50vh', '50vh', '50vh', '50vh'],
    })}
  }
`;

const HeaderData = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mq({
    width: ['100%', '100%', '80%', '80%', '80%'],
  })}
`;

const HeaderGraphics = styled.div`
  opacity: 0.8;
  height: 80%;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  ${mq({
    display: ['none', 'none', 'flex', 'flex', 'flex'],
    flexDirection: ['column', 'column', 'column', 'row', 'row'],
  })}
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
    opacity: ${props => (props.isactive === 'true' ? 0.8 : 0.5)};
    ${mq({
      fontSize: ['10px', '10px', '10px', '10px', '12px'],
    })}
    &&:hover {
      transition: 0.1s;
      opacity: 0.8;
      color: black;
    }
  }
`;
