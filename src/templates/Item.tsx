import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { List } from 'semantic-ui-react';

import { ListItem } from './types';

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

export default ({ item }: {item: ListItem}) => {
  const owner = 'facebook';
  const name = 'react';
  const { data } = useStaticQuery(graphql`
    query ItemQuery {
      github {
        repository (
          owner: "facebook"
          name: "react"
        ) {
          name
          description
        }
      }
    }
  `);
  console.log(data);
  return (
    <List.Item>
      <List.Content>
        <List.Header as="a">{item.name}</List.Header>
        <List.Description>{item.slogan.slogan}</List.Description>
      </List.Content>
    </List.Item>
  );
};
