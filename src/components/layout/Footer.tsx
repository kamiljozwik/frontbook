import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../shared';
import { Link } from 'gatsby';
import { Logo } from '../SVG/Logo';
import { Icon } from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

interface FooterCardProps {
  icon: SemanticICONS;
  title: string;
  href?: string;
  description: string;
}

const FooterCard = ({ icon, title, href, description }: FooterCardProps) => (
  <FooterCardWrapper>
    <Icon name={icon} inverted size="big" />
    <FooterCardTitle href={href} target="_blank" rel="noopener noreferrer">
      {title}
    </FooterCardTitle>
    <FooterCardDesc>{description}</FooterCardDesc>
  </FooterCardWrapper>
);

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterRow>
        <FooterCard
          icon="github"
          title="Open Source"
          href="https://github.com/kamiljozwik/frontbook"
          description="I love OS and this page is distributed as open source project as well. Visit Github for more info."
        />
        <FooterCard
          icon="comment alternate"
          title="Spectrum"
          href="https://spectrum.chat/frontbook"
          description="If you like this project, have any comments, suggestions or just want to discuss - visit Spectrum and leave me a comment."
        />
      </FooterRow>
      <FooterRow showBorder>
        <Link to="/" aria-label="Frontbook main page">
          <StyledFooterLogo height="60px" textcolor="white" />
        </Link>
      </FooterRow>
      <FooterRow>
        <FooterRowLinkItem to="/leaderboard">Tools Leaderboard</FooterRowLinkItem>
        <FooterRowLinkItem to="/js">Best Tools</FooterRowLinkItem>
        <FooterRowLinkItem to="/releases">Last Releases</FooterRowLinkItem>
        <FooterRowLinkItem to="/ui-examples">UI Examples</FooterRowLinkItem>
        <FooterRowLinkItem to="/css-is-awesome">Awesome CSS</FooterRowLinkItem>
        <FooterRowLinkItem to="/learning">Learning Resources</FooterRowLinkItem>
      </FooterRow>
      <FooterRow>
        <FooterRowItem>
          <OutboundLink href="https://github.com/kamiljozwik" target="_blank" rel="noopener noreferrer">
            Copyright by Kamil Józwik
          </OutboundLink>
        </FooterRowItem>
      </FooterRow>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  margin-top: 100px;
  background: ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

const StyledFooterLogo = styled(Logo)`
  opacity: 0.7;
  margin-top: 30px;
`;

const FooterRow = styled.div<{ showBorder?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  border-top: ${props => props.showBorder && '1px solid rgba(255,255,255,0.2)'};
`;

const FooterRowItem = styled.div`
  a {
    color: white;
    opacity: 0.7;
  }
`;

const FooterRowLinkItem = styled(Link)`
  color: white;
  padding: 5px 10px;
  font-size: 16px;
  position: relative;
  &:hover {
    color: white;
    opacity: 0.6;
  }
  &::after {
    content: '·';
    position: absolute;
    right: -3px;
  }
  &:last-child::after {
    content: '';
  }
`;

const FooterCardWrapper = styled.div`
  text-align: center;
  margin: 20px 40px 10px 40px;
`;

const FooterCardTitle = styled(OutboundLink)`
  display: block;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 10px;
  &:hover {
    color: white;
    opacity: 0.6;
  }
`;

const FooterCardDesc = styled.div`
  color: white;
  font-size: 14px;
  margin-top: 20px;
  opacity: 0.7;
  width: 260px;
`;
