import React from 'react';
import { graphql, Link } from 'gatsby';
import { Button, List } from 'semantic-ui-react';

import Layout from '../components/layout';

const ListItem = ({item}: any) => (
  <List.Item>
    <List.Content>
      <List.Header as="a">{item.name}</List.Header>
      <List.Description>{item.slogan.slogan}</List.Description>
    </List.Content>
  </List.Item>
);

const ListItems = ({ items }: any) => (
  <>
    {
      items.map((item: any) => <ListItem key={item.node.name} item={item.node}/>)
    }
  </>
);

export default ({ data, pageContext }: any) => {
  return (
    <Layout>
      <div>
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
