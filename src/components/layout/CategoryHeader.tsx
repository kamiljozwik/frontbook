import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { CategoryWave } from '../SVG';

interface CategoryHeaderProps {
  category: string;
  subcategory?: string;
  color: string;
}

export const CategoryHeader = ({ category, subcategory, color }: CategoryHeaderProps) => {
  return (
    <>
      <HeaderWrapper>
        <CategoryWave color={color} />
        <HeaderTite>
          <Link to={`/${category.toLowerCase()}`}>{category}</Link> / {subcategory}
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
  width: 50%;
  line-height: 100%;
  margin-bottom: 50px;
`;
