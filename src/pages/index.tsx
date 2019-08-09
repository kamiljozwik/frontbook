import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'semantic-ui-react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <StyledParagraph>Welcome to your new Gatsby site.</StyledParagraph>
    <StyledParagraph>Now go build something great.</StyledParagraph>
    <StyledParagraph>These borders are here thanks to @emotion.</StyledParagraph>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Button primary as={Link} to="/page-2/">Go to page 2 - with Semantic UI Button</Button>
  </Layout>
);

export default IndexPage;

const StyledParagraph = styled('p')`
  border: 1px solid grey;
`;
