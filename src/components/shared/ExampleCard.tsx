import React from 'react';
import styled from '@emotion/styled';
import { mq } from '../../shared';

interface ExampleCardProps {
  url: string;
}

const parseUrl = (url: string) => {
  // codepen
  if (url.includes('codepen')) {
    const [base, hash] = url.includes('/full/') ? url.split('/full/') : url.split('/pen/');
    const author = base.split('/codepen.io/')[1];
    return `https://codepen.io/${author}/embed/preview/${hash}?theme-id=dark&default-tab=result`;
  }

  // codesandbox
  if (url.includes('codesandbox')) return url.replace('/s/', '/embed/');

  // default
  return url;
};

export const ExampleCard = ({ url }: ExampleCardProps) => {
  const srcUrl = parseUrl(url);
  return (
    <ExampleCardWrapper>
      <StyledIframe title="test" height="265" scrolling="no" src={srcUrl} />
    </ExampleCardWrapper>
  );
};

const ExampleCardWrapper = styled.div`
  position: relative;
  ${mq({
    width: ['100%', '100%', '100%', '100%', '50%'],
  })}
  padding: 16px;
  height: 600px;
`;

const StyledIframe = styled.iframe`
  background: white;
  height: 100%;
  width: 100%;
`;
