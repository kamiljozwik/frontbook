import React from 'react';
import { Link } from 'gatsby';
import { Segment } from 'semantic-ui-react';
import styled from '@emotion/styled';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { Logo } from '../SVG';
import { mq } from '../';

const TopBar = () => (
  <TopBarWrapper>
    <TopBarContent>
      <Link to="/" aria-label="Frontbook main page">
        <Logo height="60px" textcolor="white" style={{ margin: '20px 0' }}/>
      </Link>
      <TopBarLinks>
        <TopBarLink href="https://spectrum.chat/frontbook" target="_blank" rel="noopener noreferrer">Spectrum</TopBarLink>
        <TopBarLink href="https://github.com/kamiljozwik/frontbook" target="_blank" rel="noopener noreferrer">Github</TopBarLink>
      </TopBarLinks>
    </TopBarContent>
  </TopBarWrapper>
);

export default TopBar;

const TopBarWrapper = styled(Segment.Inline)`
  &&& {
    position: relative;
    width: 80vw;
    margin: 0 auto;
    height: 100px;
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient( to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0) ) 0% 0% 100% 0%;
  }
`;

const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopBarLinks = styled.div`
    display: flex;
    margin-right: 5%;
`;

const TopBarLink = styled(OutboundLink)`
  font-size: 18px;
  color: white;
  margin: 0 15px;
  font-weight: 600;
  opacity: 0.8;
  &:hover {
    color: white;
    opacity: 1;
  }
`;
