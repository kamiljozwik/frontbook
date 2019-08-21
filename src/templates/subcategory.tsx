import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Button, List } from 'semantic-ui-react';

import Layout from '../components/layout';
import Item from './Item';
import { ListItem, SubcategoryNode, SubcategoryProps} from './types';

// const Item = ({ item }: {item: ListItem}) => {
//   return (
//     <List.Item>
//       <List.Content>
//         <List.Header as="a">{item.name}</List.Header>
//         <List.Description>{item.slogan.slogan}</List.Description>
//       </List.Content>
//     </List.Item>
//   );
// };

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
      {console.log(pageContext)}
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
