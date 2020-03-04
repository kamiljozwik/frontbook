import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../../shared';
import { Divider } from '../shared';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  showDivider?: boolean;
  dividerColor?: string;
}

export const SectionHeader = ({ title, subtitle = '', showDivider = true, dividerColor }: SectionHeaderProps) => {
  return (
    <>
      {showDivider && <Divider color={dividerColor} />}
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderSubtitle>{subtitle}</HeaderSubtitle>
    </>
  );
};

const HeaderTitle = styled.div`
  font-weight: 800;
  text-align: center;
  color: ${colors.darkBlue};
  filter: brightness(0.8);
  width: 100%;
  line-height: 100%;
  margin-top: 40px;
  letter-spacing: 1px;
  font-size: 28px;
`;

const HeaderSubtitle = styled.div`
  font-weight: 800;
  text-align: center;
  color: ${colors.darkGrey};
  margin-top: 10px;
  font-size: 18px;
  letter-spacing: 1px;
`;
