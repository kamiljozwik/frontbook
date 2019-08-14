import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { Button, Menu } from 'semantic-ui-react';

import Layout from '../components/layout';
import SEO from '../components/seo';

interface SubcategoryProps {
  name: string;
}

interface Subcategories {
  names: string[];
}

interface CategoryPage {
  data: {
    allContentfulToolEntry: {
      distinct: string[]
    }
  };
}

const Subcategory = ({ name }: SubcategoryProps) => (
  <Menu.Item
    name={name}
    content={name.split('_')[1]}
    as={Link}
    to={`/${name.replace('_', '/')}`}
  />
);

const Subcategories = ({ names }: Subcategories) => {
  return (
    <>
      {names.map(name => <Subcategory key={name} name={name} />)}
    </>
  );
};

const JavaScriptPage = ({ data }: CategoryPage) => (
  <Layout>
    <SEO title="JavaScript" />
    <Menu>
      <Subcategories names={data.allContentfulToolEntry.distinct} />
    </Menu>
    <Button primary as={Link} to="/">Home</Button>
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
