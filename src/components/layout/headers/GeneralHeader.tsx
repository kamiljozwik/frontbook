import React from 'react';
import styled from '@emotion/styled';

import { CategoryWave } from '../../SVG';
import { colors, mq } from '../../../shared';
import { Icon } from 'semantic-ui-react';
import { CategoryLink } from './';

interface CategoryHeaderProps {
  title?: string;
  color?: string;
}

export const GeneralHeader = ({ title = 'General Page', color = colors.default }: CategoryHeaderProps) => {
  return (
    <>
      <GeneralHeaderWrapper>
        <CategoryWave color={color} style={{ minHeight: '50vh' }} />
        <HeaderData>
          <HeaderTitle>
            <CategoryLink to="/" aria-label="Frontbook home page">
              <Icon size="small" inverted name="home" />
            </CategoryLink>
            {`/ ${title}`}
          </HeaderTitle>
        </HeaderData>
      </GeneralHeaderWrapper>
    </>
  );
};

const GeneralHeaderWrapper = styled.div`
  height: calc(50vh - 100px);
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
`;

const HeaderData = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderTitle = styled.div`
  font-weight: 700;
  color: white;
  line-height: 100%;
  ${mq({
    fontSize: ['5vw', '5vw', '5vw', '4vw', '2.3vw'],
  })}
`;
