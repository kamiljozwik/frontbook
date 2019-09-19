import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'semantic-ui-react';

import { Layout } from '../components';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout category="Welcome">
    <SEO title="Home" />
    <h1>A State Of Front</h1>
    <Button primary as={Link} to="/js/">JavaScript</Button>
    <Button primary as={Link} to="/css/">CSS</Button>
  </Layout>
);

export default IndexPage;
