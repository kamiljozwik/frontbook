import React from 'react';
import { Link } from 'gatsby';
import { Button, Segment, Header } from 'semantic-ui-react';

import { Layout } from '../components';
import SEO from '../components/seo';
import { categoriesNames, CategoriesCodes } from '../shared';

const CategorySegment = ({ code }: {code: CategoriesCodes}) => (
  <Segment>
    <Header size="large">{categoriesNames[code].name}</Header>
    <Segment basic>{categoriesNames[code].info}</Segment>
    <Button primary as={Link} to={`/${code}/`}>More</Button>
  </Segment>
);

const IndexPage = () => (
  <Layout category="Frontbook">
    <SEO title="Home" />
    <Segment basic>
      {
        // Object.keys(categoriesNames).map(category => (
        ['js', 'css', 'seo', 'build', 'monitor', 'ux'].map(category => (
          <CategorySegment
            key={category}
            code={category as CategoriesCodes}
          />
        ))
      }
    </Segment>
  </Layout>
);

export default IndexPage;
