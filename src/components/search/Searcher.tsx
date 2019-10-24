import React, { useState } from 'react';
import _ from 'lodash';
import { Search, Grid, Segment, Header } from 'semantic-ui-react';

import { SubcategoryNode } from '../../shared/types';
import { Result, ResultsProps } from './';
import styled from '@emotion/styled';

interface SearcherProps {
  allTools: SubcategoryNode[];
}

export const Searcher = ({ allTools }: SearcherProps) => {
  const [results, setResults] = useState<ResultsProps[]>();
  const [value, setValue] = useState('');

  const handleSearchChange = (e: any, { value }: any) => {
    setValue(value);
    const re = new RegExp(_.escapeRegExp(value), 'i');
    const isMatch = (result: SubcategoryNode) => re.test(result.node.name) || re.test(result.node.slogan.slogan);
    const tempResults = _.filter(allTools, isMatch).map(res => {
      return {
        title: res.node.name,
        description: res.node.slogan.slogan,
        subcategory: res.node.subcategory,
        stars: res.node.fields.githubData ? res.node.fields.githubData.stars : undefined,
        downloads: res.node.fields.npmData ? res.node.fields.npmData.downloads : undefined,
      };
    });
    value.length > 2 ? setResults(tempResults) : setResults(undefined);
  };

  return (
    <Segment basic textAlign="center" style={{height: '180px'}}>
      <Header>What are you looking for?</Header>
      <StyledSearch
        size="big"
        minCharacters={3}
        onSearchChange={handleSearchChange}
        results={results}
        value={value}
        resultRenderer={Result}
        placeholder="search..."
      />
      <WarnMessage>{value.length > 0 && value.length < 3 && 'min. three characters'}</WarnMessage>
    </Segment>
  );
};

const StyledSearch = styled(Search)`
  &&& {
    max-width: 300px;
    margin: 0 auto;
    .results {
      border-radius: 0;
    }
    .result {
      padding: 0;
      border-radius: 0;
    }
  }
`;

const WarnMessage = styled.div`
  height: 20px;
  color: grey;
`;
