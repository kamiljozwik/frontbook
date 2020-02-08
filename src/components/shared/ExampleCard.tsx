import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { mq, colors } from '../../shared';

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
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);
  const srcUrl = parseUrl(url);
  return (
    <ExampleCardWrapper data-loaded={loaded}>
      <StyledIframe title="test" height="265" scrolling="no" src={srcUrl} onLoad={handleLoaded} />
    </ExampleCardWrapper>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setOpacity = (props: any) => (props['data-loaded'] ? '0' : '1');

const ExampleCardWrapper = styled.div`
  @keyframes square-spin {
    25% {
      transform: perspective(200px) rotateX(180deg) rotateY(0);
    }
    50% {
      transform: perspective(200px) rotateX(180deg) rotateY(180deg);
    }
    75% {
      transform: perspective(200px) rotateX(0) rotateY(180deg);
    }
    100% {
      transform: perspective(200px) rotateX(0) rotateY(0);
    }
  }
  ${mq({
    width: ['100%', '100%', '100%', '100%', '50%'],
  })}
  position: relative;
  padding: 16px;
  height: 600px;
  &:after {
    content: '';
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    display: block;
    position: absolute;
    animation-fill-mode: both;
    width: 100px;
    height: 100px;
    background: ${colors.darkBlue};
    transition: 0.3s;
    opacity: ${setOpacity};
    animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
  }
`;

const StyledIframe = styled.iframe`
  background: white;
  height: 100%;
  width: 100%;
  border: none;
`;
