import React, { useState } from 'react';
import _ from 'lodash';
import { Search, Grid } from 'semantic-ui-react';

import { SubcategoryNode } from '../../shared/types';
import { Result } from './';

interface SearcherProps {
  allTools: SubcategoryNode[];
}

export const Searcher = ({ allTools }: SearcherProps) => {
  const [results, setResults] = useState();
  const [value, setValue] = useState('');

  const handleSearchChange = (e: any, { value }: any) => {
    setValue(value);
    const re = new RegExp(_.escapeRegExp(value), 'i');
    const isMatch = (result: any) => re.test(result.node.name);

    setResults(_.filter(allTools, isMatch));
  };

  return (
    <Grid centered>
      <Grid.Column width={5}>
        <Search
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
          resultRenderer={Result}
        />
      </Grid.Column>
    </Grid>
    );
};
