import React from 'react';
import { Link } from 'gatsby';
import { Button, Segment, Header } from 'semantic-ui-react';
import styled from '@emotion/styled';

import { subcategoriesInfo, colors } from '../shared';
import { Subcategory } from '../shared/types';
import { Placeholder } from './SVG';

interface SubcategoryProps {
  name: Subcategory;
}

export const SubcategoryCard = ({ name }: SubcategoryProps) => (
  <SubcategorySegment>
    <SubcategoryTitle size="large" as={Link} to={`/${name.replace('_', '/')}`}>
      {name.split('_')[1].replace('-', ' ')}
    </SubcategoryTitle>
    <SubcategoryDescription basic>
      {subcategoriesInfo[name] ? subcategoriesInfo[name] : ''}
    </SubcategoryDescription>
    <Placeholder width="20%" />
  </SubcategorySegment>
);

const SubcategorySegment = styled(Segment)`
  &&& {
    width: 40%;
    height: 300px;
    margin: 1em 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

const SubcategoryTitle = styled(Header)`
  &&& {
    text-transform: capitalize;
  }
`;

const SubcategoryDescription = styled(Segment)`
  &&& {
    margin: 0;
    color: ${colors.darkGrey};
    padding-top: 0;
  }
`;
