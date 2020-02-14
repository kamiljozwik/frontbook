import React from 'react';
import { Icon } from 'semantic-ui-react';
import numeral from 'numeral';
import styled from '@emotion/styled';
import { Unknown } from './';

interface SizeProps {
  bundlephobiaData?: {
    size: number;
    gzip: number;
    dependencyCount: number;
  };
}

export const Size = ({ bundlephobiaData }: SizeProps) => {
  const size = bundlephobiaData && numeral(bundlephobiaData.size / 1024).format('0,0');
  const gzip = bundlephobiaData && numeral(bundlephobiaData.gzip / 1024).format('0,0');
  const dependencyCount = bundlephobiaData ? bundlephobiaData.dependencyCount : 0;

  return bundlephobiaData ? (
    size !== '0' ? (
      <SizeWrapper title={`${dependencyCount} dependencies`}>
        <Icon
          size="tiny"
          name="circle"
          color={dependencyCount === 0 ? 'green' : dependencyCount > 5 ? 'red' : 'yellow'}
        />
        <Sizes>
          <span>{`${size} | ${gzip} `}</span>
          <span style={{ color: 'lightgrey', fontWeight: 800 }}>kB</span>
        </Sizes>
      </SizeWrapper>
    ) : (
      <Unknown />
    )
  ) : (
    <Unknown />
  );
};

const SizeWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  &&& i.icon {
    opacity: 0.6;
  }
`;

const Sizes = styled.div`
  margin-left: 10px;
`;
