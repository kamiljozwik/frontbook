import React from 'react';
import { Link } from 'gatsby';
import { Button, Segment, Header } from 'semantic-ui-react';
import styled from '@emotion/styled';

import { subcategoriesInfo } from '../shared';
import { Subcategory } from '../shared/types';

interface SubcategoryProps {
  name: Subcategory;
}

export const SubcategoryCard = ({ name }: SubcategoryProps) => (
  <SubcategorySegment>
    <SubcategoryTitle size="large">{name.split('_')[1].replace('-', ' ')}</SubcategoryTitle>
    <Segment basic>
      {subcategoriesInfo[name] ? subcategoriesInfo[name] : ''}
    </Segment>
    <Button
      as={Link}
      to={`/${name.replace('_', '/')}`}
      content="More"
    />
  </SubcategorySegment>
);

const SubcategorySegment = styled(Segment)`
  &&& {
    width: 40%;
    height: 20em;
    margin: 1em 1em;
  }
`;

const SubcategoryTitle = styled(Header)`
  &&& {
    text-transform: capitalize;
  }
`;
