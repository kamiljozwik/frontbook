/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import Header from './header';
import './layout.css';
import 'semantic-ui-css/semantic.min.css';

const Wrapper = styled('div')`
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
`;

const Layout = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Wrapper>
        <Global
          styles={css`
            * {
              font-family: monospace;
              color: #3c3ccc;
            }
          `}
        />
        <main>{children}</main>
      </Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
