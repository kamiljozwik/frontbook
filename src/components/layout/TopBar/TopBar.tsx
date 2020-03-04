import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Segment, Icon } from 'semantic-ui-react';
import styled from '@emotion/styled';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { Logo } from '../../SVG';
import moment from 'moment';
import { mq } from '../../../shared';
import { Divider } from '../../shared';
import { Navigation } from './Navigation';

export const TopBar = () => {
  const buildTimeData = useStaticQuery(graphql`
    query BuildTimeQuery {
      allBuildTime {
        nodes {
          buildTime
        }
      }
    }
  `);
  const buildTime = buildTimeData.allBuildTime.nodes[0].buildTime;
  return (
    <TopBarWrapper>
      <TopBarContent>
        <Link to="/" aria-label="Frontbook main page">
          <Logo height="60px" textcolor="white" style={{ margin: '20px 0' }} />
        </Link>
        <Navigation />
        <TopBarLinks>
          <TopBarLink href="https://spectrum.chat/frontbook" target="_blank" rel="noopener noreferrer">
            <Icon inverted name="comment alternate" /> Spectrum
          </TopBarLink>
          <TopBarLink href="https://github.com/kamiljozwik/frontbook" target="_blank" rel="noopener noreferrer">
            <Icon inverted name="github" /> Github
          </TopBarLink>
        </TopBarLinks>
      </TopBarContent>
      <Divider color="rgba(255, 255, 255, 0.5)" style={{ margin: 0 }} />
      <LastUpdate>
        {`Last update: ${moment(buildTime).format('D MMM YYYY | HH:MM')} (${moment(buildTime).fromNow()})`}
      </LastUpdate>
    </TopBarWrapper>
  );
};

const TopBarWrapper = styled(Segment.Inline)`
  &&& {
    position: relative;
    width: 80vw;
    margin: 0 auto;
    height: 100px;
    border-width: 3px;
  }
`;

const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopBarLinks = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 5%;
  ${mq({
    flexDirection: ['column', 'column', 'row', 'row', 'row'],
  })}
`;

const TopBarLink = styled(OutboundLink)`
  ${mq({
    fontSize: ['16px', '16px', '18px', '18px', '18px'],
  })}
  color: white;
  margin: 0 15px;
  font-weight: 600;
  opacity: 1;
  &:hover {
    color: white;
    opacity: 0.8;
  }
`;

const LastUpdate = styled.span`
  color: rgba(255, 255, 255, 0.6);
  ${mq({
    display: ['none', 'inline-block', 'inline-block', 'inline-block', 'inline-block'],
  })}
`;
