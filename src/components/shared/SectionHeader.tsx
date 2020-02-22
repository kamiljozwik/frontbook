import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../../shared';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle = '' }: SectionHeaderProps) => {
  return (
    <>
      <SectionHeaderTitle>{title}</SectionHeaderTitle>
      <HeaderSubtitle>{subtitle}</HeaderSubtitle>
    </>
  );
};

const SectionHeaderTitle = styled.div`
  font-weight: 800;
  text-align: center;
  color: ${colors.black};
  width: 100%;
  line-height: 100%;
  margin-top: 10px;
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
