import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'semantic-ui-react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>A State Of Front</h1>
    <Button primary as={Link} to="/javascript/">JavaScript</Button>
  </Layout>
);

export default IndexPage;
