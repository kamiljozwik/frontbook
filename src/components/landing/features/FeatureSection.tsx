import React from 'react';
import styled from '@emotion/styled';

interface FeatureInfoProps {
  title: string;
  desc?: string;
  children?: React.ReactNode;
}

const FeatureImage = ({ children }: { children: React.ReactNode }) => {
  return <FeatureImageWrapper>{children}</FeatureImageWrapper>;
};

const FeatureInfo = ({ title, desc, children }: FeatureInfoProps) => {
  return (
    <FeatureInfoWrapper>
      <FeatureTitle>{title}</FeatureTitle>
      {desc && <FeatureDesc>{desc}</FeatureDesc>}
      {children && <FeatureDescContent>{children}</FeatureDescContent>}
    </FeatureInfoWrapper>
  );
};

export const FeatureSection = ({ children }: { children: React.ReactNode }) => {
  return <FeatureSectionWrapper>{children}</FeatureSectionWrapper>;
};

FeatureSection.Image = FeatureImage;
FeatureSection.Info = FeatureInfo;

const FeatureSectionWrapper = styled.div`
  position: relative;
`;

const FeatureImageWrapper = styled.div`
  position: relative;
`;

const FeatureInfoWrapper = styled.div`
  position: relative;
`;

const FeatureTitle = styled.div`
  position: relative;
`;

const FeatureDesc = styled.div`
  position: relative;
`;

const FeatureDescContent = styled.div`
  position: relative;
`;
