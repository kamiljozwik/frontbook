import React from 'react';
import styled from '@emotion/styled';
import { mq, featuresData, Features, colors } from '../../../shared';
import { CategoryImage } from '../../SVG';
import { SectionHeader } from '..';
import { SimpleButton } from '../../shared';

interface FeatureCardsProps {
  children: React.ReactChild;
}

interface FeatureCardProps {
  feature: Features;
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <Card>
      <CategoryImage code="seo" />
      <CardTitle>{featuresData[feature].title}</CardTitle>
      <CardDescription>{featuresData[feature].description}</CardDescription>
      <SimpleButton to={featuresData[feature].link}>More</SimpleButton>
    </Card>
  );
};

export const FeatureCards = ({ children }: FeatureCardsProps) => {
  return (
    <>
      <SectionHeader
        title="Front-end is not just programming"
        subtitle="See what you can achieve with CSS (sometimes with a little help from JS)"
      />
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
