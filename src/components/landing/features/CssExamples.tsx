import React from 'react';
import { landingData } from '../../../shared';
import { FeatureCards } from './components';

export const CssExamples = () => {
  return (
    <FeatureCards title={landingData.uiExamples.title} subtitle={landingData.uiExamples.subtitle}>
      <>
        <FeatureCards.Card feature="uiExamples" />
        <FeatureCards.Card feature="amazingCss" />
      </>
    </FeatureCards>
  );
};
