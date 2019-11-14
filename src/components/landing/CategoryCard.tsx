import React from 'react';
import { Link } from 'gatsby';
import { Header, Segment, Grid, Label } from 'semantic-ui-react';
import styled from '@emotion/styled';

import { categoriesNames, CategoriesCodes, SubcategoryNode, colors } from '../../shared';
import { TopsToolsList } from '../';
import { CategoryImage } from '../SVG';
import { mq } from '../layout';

interface CategorySegmentProps {
  code: CategoriesCodes;
  count: number;
  npmTops?: SubcategoryNode[];
  githubTops?: SubcategoryNode[];
}

export const CategoryCard = ({ code, count, npmTops, githubTops }: CategorySegmentProps) => (
  <CardWrapper columns={2}>
    <Grid.Column>
      <CardHeader to={`/${code}/`}>
        <ToolName size="huge">
          {categoriesNames[code].name}
          <CountLabel basic>
            Tools:
            <Label.Detail>{count}</Label.Detail>
          </CountLabel>
        </ToolName>
      </CardHeader>
      <Description>{categoriesNames[code].info}</Description>
      {githubTops && (
        <TopsToolsList.Wrapper horizontal>
          <TopsToolsList.Segment basic>{npmTops ? <TopsToolsList tops={npmTops} type="npm" /> : null}</TopsToolsList.Segment>
          <TopsToolsList.Segment basic> {githubTops ? <TopsToolsList tops={githubTops} type="github" /> : null}</TopsToolsList.Segment>
        </TopsToolsList.Wrapper>
      )}
      </Grid.Column>
    <ImageColumn>
      <CategoryImage code={code} />
    </ImageColumn>
  </CardWrapper>
);

const CardWrapper = styled(Grid.Row)`
  &&& {
    position: relative;
    min-height: 330px;
    ${mq({
      'width': ['90% !important', '90% !important', '90% !important', '90% !important', '75% !important'],
      'flexDirection': ['column', 'column', 'column', 'row', 'row'],
      '&&& .column': {
        width: ['100% !important', '100% !important', '100% !important', '50% !important', '50% !important'],
      },
      })}
  }
`;

const CardHeader = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ToolName = styled(Header)`
  &&& {
    display: block;
    font-size: 42px;
  }
`;
const CountLabel = styled(Label)`
  &&& {
    width: auto;
  }
`;

const Description = styled.p`
  color: ${colors.darkGrey};
  font-size: 16px;
`;

const ImageColumn = styled(Grid.Column)`
  &&&& {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
