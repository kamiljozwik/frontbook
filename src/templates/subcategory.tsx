import React from 'react';
import { graphql, Link } from 'gatsby';
import { Button } from 'semantic-ui-react';

import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <div>
        <h1>SUBCATEGORY PAGE</h1>
      </div>
      <Button primary as={Link} to="/">Home</Button>
    </Layout>
  );
};
