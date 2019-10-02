import React from 'react';
import { Link } from 'gatsby';
import { Segment } from 'semantic-ui-react';
import styled from '@emotion/styled';

const TopBar = () => (
  <TopBarWrapper>
    <Link
      to="/"
      style={{
        color: 'black',
      }}
    >
      frontBook
    </Link>
  </TopBarWrapper>
);

export default TopBar;

const TopBarWrapper = styled(Segment.Inline)`
  &&& {
    position: relative;
    width: 80vw;
    margin: 0 auto;
    height: 30px;
  }
`;
