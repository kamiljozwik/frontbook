import React from 'react';
import { List } from 'semantic-ui-react';
import { ListItem } from '../../shared/types';

export const Item = ({ item }: {item: ListItem}) => {
  return (
    <List.Item>
      <List.Content>
        <List.Header as="a">{item.name}</List.Header>
        <List.Description>{item.slogan.slogan}</List.Description>
        <List.Description>Stars: {item.fields.githubData && item.fields.githubData.repository.stargazers.totalCount}</List.Description>
      </List.Content>
    </List.Item>
  );
};
