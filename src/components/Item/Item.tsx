import React, { useState, useEffect } from 'react';
import { List } from 'semantic-ui-react';
import Octokit from '@octokit/rest';
import { ListItem } from '../../shared/types';

const octokit = new Octokit();

export const Item = ({ item }: {item: ListItem}) => {
  const [githubData, setGithubData] = useState();

  /**
   * Fetch Github Data
   */
  useEffect(() => {
    const fetchGithubData = async () => {
      const splitUrl = item.github.split('/');
      const owner = splitUrl[3];
      const repo = splitUrl[4];
      try {
        const { data } = await octokit.repos.get({owner, repo});
        setGithubData(data);
      } catch {
        setGithubData(null);
      }
    };
    item.github ? fetchGithubData() : setGithubData(null);
  }, []);

  return (
    <List.Item>
      <List.Content>
        <List.Header as="a">{item.name}</List.Header>
        <List.Description>{item.slogan.slogan}</List.Description>
        <List.Description>Stars: {githubData && githubData.stargazers_count}</List.Description>
      </List.Content>
    </List.Item>
  );
};
