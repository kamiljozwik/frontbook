import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { Button } from 'semantic-ui-react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Subcategory = ({ name }: {name: string}) => <div>{name}</div>;

const Subcategories = ({ names }: {names: any[]}) => {
  return (
    <>
      {names.map(name => <Subcategory key={name} name={name} />)}
    </>
  );
};

const JavaScriptPage = ({ data }: any) => (
  <Layout>
    <SEO title="Page two" />
    <Subcategories names={data.allContentfulToolEntry.distinct} />
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
