import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { Button, Menu } from 'semantic-ui-react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Subcategory = ({ name }: {name: string}) => (
  <Menu.Item
    name={name}
    content={name.split('_')[1]}
    as={Link}
    to={`/${name.replace('_', '/')}`}
  />
);

const Subcategories = ({ names }: {names: any[]}) => {
  return (
    <>
      {names.map(name => <Subcategory key={name} name={name} />)}
    </>
  );
};

const JavaScriptPage = ({ data }: any) => (
  <Layout>
    <SEO title="JavaScript" />
    <Menu>
      <Subcategories names={data.allContentfulToolEntry.distinct} />
    </Menu>
    <Button primary as={Link} to="/">Go back</Button>
  </Layout>
);

export const query = graphql`
  query jsSubcategoriesQuery {
    allContentfulToolEntry(filter: {category: {eq: "js"}}) {
      distinct(field: subcategory)
    }
  }
`;

export default JavaScriptPage;
