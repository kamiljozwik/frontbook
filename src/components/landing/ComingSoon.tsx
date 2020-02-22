import React from 'react';
import styled from '@emotion/styled';
import { landingData, colors } from '../../shared';

export const ComingSoon = () => {
  return <ComingSoonText>{landingData.comingSoon.title}</ComingSoonText>;
};

const ComingSoonText = styled.div`
  text-align: center;
  font-size: 26px;
  letter-spacing: 1px;
  color: white;
  background: ${colors.black};
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
  box-shadow: 0 8px 20px -2px rgba(0, 0, 0, 0.3);
  font-weight: 800;
  line-height: 40px;
`;
