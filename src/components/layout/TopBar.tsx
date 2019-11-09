import React from 'react';
import { Link } from 'gatsby';
import { Segment } from 'semantic-ui-react';
import styled from '@emotion/styled';
import { Logo } from '../SVG';

const TopBar = () => (
  <TopBarWrapper>
    <Link to="/">
      <Logo height="60px" textcolor="white" style={{ margin: '20px 0' }}/>
    </Link>
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
