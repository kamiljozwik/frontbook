import React from 'react';
import { graphql, Link } from 'gatsby';
import { Button, List } from 'semantic-ui-react';

import Layout from '../components/layout';
import Item from './Item';
import { SubcategoryNode, SubcategoryProps} from './types';

const ListItems = ({ items }: {items: SubcategoryNode[]}) => (
  <>
    {
      items.map(item => <Item key={item.node.name} item={item.node}/>)
    }
  </>
);

export default ({ data, pageContext }: SubcategoryProps) => {
  return (
    <Layout>
      <div>
        {console.log(pageContext)}
        <h2>{pageContext.subcategory}</h2>
      </div>
      <List divided>
        <ListItems items={data.allContentfulToolEntry.edges} />
      </List>
      <Button primary as={Link} to={`/${pageContext.subcategory.split('_')[0]}`}>Back</Button>
    </Layout>
  );
};

export const query = graphql`
  query($subcategory: String!) {
    allContentfulToolEntry(filter: {subcategory: {eq: $subcategory}}) {
      edges {
        node {
          name
          slogan {
            slogan
          }
        }
      }
    }
  }
`;
