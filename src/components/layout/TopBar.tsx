import React from 'react';
import { Link } from 'gatsby';
import { Segment, Header, Icon } from 'semantic-ui-react';
import styled from '@emotion/styled';

const TopBar = () => (
  <TopBarWrapper>
    <Header size="medium" as={LogoLink} to="/">
      <Icon name="book" />
      <Header.Content>Frontbook</Header.Content>
    </Header>
  </TopBarWrapper>
);

export default TopBar;

const TopBarWrapper = styled(Segment.Inline)`
  &&& {
    position: relative;
    width: 80vw;
    margin: 0 auto;
    height: 60px;
  }
`;

const LogoLink = styled(Link)`
  &&& {
    color: white;
    display: inline-block;
    margin-top: 16px;
    .content, .icon {
      color: white;
    }
  }
`;
