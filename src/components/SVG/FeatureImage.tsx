import React, { CSSProperties } from 'react';
import { Placeholder, UIUseful, UIAwesome } from '.';
import { FeaturesCodes } from '../../shared';

interface CategoryImageProps {
  code: FeaturesCodes;
  style?: CSSProperties;
}

export const FeatureImage = ({ code, style }: CategoryImageProps) => {
  switch (code) {
    case 'uiExamples':
      return <UIUseful style={style} />;
    case 'cssAwesome':
      return <UIAwesome style={style} />;
    default:
      return <Placeholder style={style} />;
  }
};
