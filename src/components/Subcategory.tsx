import React from 'react';
import { Link } from 'gatsby';
import { Button, Segment, Header } from 'semantic-ui-react';
import styled from '@emotion/styled';

import { subcategoriesInfo } from '../shared';
import { Subcategories } from '../shared/types';

interface SubcategoryProps {
  name: Subcategories;
}

export const Subcategory = ({ name }: SubcategoryProps) => (
  <SubcategoryCard>
    <SubcategoryTitle size="large">{name.split('_')[1]}</SubcategoryTitle>
    <Segment basic>
      {subcategoriesInfo[name] ? subcategoriesInfo[name] : ''}
    </Segment>
    <Button
      as={Link}
      to={`/${name.replace('_', '/')}`}
      content="More"
    />
  </SubcategoryCard>
);

const SubcategoryCard = styled(Segment)`
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
