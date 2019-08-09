import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'semantic-ui-react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Button primary as={Link} to="/">Go back to the homepage - also with Semantic UI Button</Button>
  </Layout>
);

export default SecondPage;
