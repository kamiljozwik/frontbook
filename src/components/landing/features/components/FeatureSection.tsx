import React from 'react';
import styled from '@emotion/styled';
import { colors, mq } from '../../../../shared';
import { SectionHeader } from '../../../shared';

interface FeatureInfoProps {
  title?: string;
  desc?: string;
  textOnly?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const FeatureInfo = ({ title, desc, textOnly = false, style, children }: FeatureInfoProps) => {
  return (
    <FeatureInfoWrapper textOnly={textOnly} style={style}>
      {title && <FeatureTitle>{title}</FeatureTitle>}
      {desc && <FeatureDesc>{desc}</FeatureDesc>}
      {children && <FeatureInfoContent>{children}</FeatureInfoContent>}
    </FeatureInfoWrapper>
  );
};

interface FeatureSectionProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const FeatureSection = ({ title, subtitle, children }: FeatureSectionProps) => {
  return (
    <>
      <SectionHeader title={title} subtitle={subtitle} />
      <FeatureSectionWrapper>{children}</FeatureSectionWrapper>
    </>
  );
};

FeatureSection.Info = FeatureInfo;

const FeatureSectionWrapper = styled.section`
  margin: 50px 0 80px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FeatureInfoWrapper = styled.div<{ textOnly: boolean }>`
  position: relative;
  ${mq({
    width: ['100%', '100%', '50%', '50%', '50%'],
  })}
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${props => (props.textOnly ? '0 10%' : '0')};
`;

const FeatureTitle = styled.h4`
  &&& {
    font-size: 26px;
    font-weight: 600;
    ${mq({
      marginTop: ['20px', '20px', '0', '0', '0'],
    })}
  }
`;

const FeatureDesc = styled.div`
  font-size: 18px;
  line-height: 22px;
  color: ${colors.darkGrey};
  margin-bottom: 20px;
`;

const FeatureInfoContent = styled.div`
  position: relative;
`;
