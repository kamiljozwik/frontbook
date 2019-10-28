import React from 'react';
import { Link } from 'gatsby';
import { Segment, Header } from 'semantic-ui-react';
import styled from '@emotion/styled';

import { subcategoriesInfo, colors } from '../../shared';
import { Subcategory } from '../../shared/types';
import { Placeholder } from '../SVG';
import { mq } from '../layout';

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
    <Placeholder width="20%"/>
  </SubcategorySegment>
);

const SubcategorySegment = styled(Segment)`
  &&& {
    height: 300px;
    margin: 1em 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    ${mq({
      width: ['80%', '100%', '80%', '40%', '40%'],
    })}
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
