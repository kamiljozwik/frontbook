import React from 'react';
import styled from '@emotion/styled';
import { mq, featuresData, Features, colors, FeaturesCodes } from '../../../../shared';
import { FeatureImage } from '../../../SVG/FeatureImage';
import { LinkButton, SectionHeader } from '../../../shared';

interface FeatureCardsProps {
  title: string;
  subtitle?: string;
  children: React.ReactChild;
}

interface FeatureCardProps {
  feature: Features;
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <Card>
      <FeatureImage code={featuresData[feature].image as FeaturesCodes} />
      <CardTitle>{featuresData[feature].title}</CardTitle>
      <CardDescription>{featuresData[feature].description}</CardDescription>
      <LinkButton to={featuresData[feature].link}>More</LinkButton>
    </Card>
  );
};

export const FeatureCards = ({ title, subtitle, children }: FeatureCardsProps) => {
  return (
    <>
      <SectionHeader title={title} subtitle={subtitle} />
      <Cards>{children}</Cards>
    </>
  );
};

FeatureCards.Card = FeatureCard;

const Cards = styled.div`
  margin: 50px auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  ${mq({
    width: ['100%', '100%', '100%', '40%', '40%'],
  })}
  box-shadow: 0 8px 20px -2px rgba(0, 0, 0, 0.3);
  margin: 20px 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  & > svg {
    margin: 0 auto;
    min-width: 10vw;
    ${mq({
      width: ['25vw', '20vw', '20vw', 'auto', 'auto'],
    })}
  }
`;

const CardTitle = styled.h3`
  font-size: 26px;
  border-top: 2px solid ${colors.grey};
  padding-top: 20px;
  letter-spacing: 1px;
`;

const CardDescription = styled.p`
  font-size: 18px;
  color: ${colors.darkGrey};
`;
