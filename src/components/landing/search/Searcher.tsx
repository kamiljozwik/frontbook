import React, { useState, SyntheticEvent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import _ from 'lodash';
import { Search, Segment, Header } from 'semantic-ui-react';

import { SubcategoryNode, mq, landingData } from '../../../shared';
import { Result, ResultsProps } from '.';
import styled from '@emotion/styled';

const tooMuchResults = {
  title: 'Too much results.',
  description: 'Please specify your query.',
  oversize: true,
};

export const Searcher = () => {
  const [results, setResults] = useState<ResultsProps[]>();
  const [value, setValue] = useState('');

  const data = useStaticQuery(graphql`
    query searcherQuery {
      allTools: allContentfulToolEntry(sort: { fields: fields___githubData___stars, order: DESC }) {
        totalCount
        edges {
          node {
            name
            slogan {
              slogan
            }
            subcategory
            github
            npm
            website
            fields {
              githubData {
                stars
              }
              npmData {
                downloads
              }
            }
          }
        }
      }
    }
  `);
  const allTools = data.allTools.edges;
  const total = data.allTools.totalCount;

  const handleSearchChange = (e: SyntheticEvent, { value }: { value: string }) => {
    setValue(value);
    const re = new RegExp(_.escapeRegExp(value), 'i');
    const isMatch = (result: SubcategoryNode) => re.test(result.node.name) || re.test(result.node.slogan.slogan);
    const tempResults = _.filter(allTools, isMatch).map(res => {
      console.log(res);
      return {
        title: res.node.name,
        description: res.node.slogan.slogan,
        website: res.node.website,
        url: res.node.github || res.node.npm || res.node.website,
        subcategory: res.node.subcategory,
        stars: res.node.fields.githubData ? res.node.fields.githubData.stars : undefined,
        downloads: res.node.fields.npmData ? res.node.fields.npmData.downloads : undefined,
      };
    });
    value.length > 2
      ? tempResults.length < 11
        ? setResults(tempResults)
        : setResults([tooMuchResults])
      : setResults(undefined);
  };
  return (
    <Segment basic textAlign="center" style={{ height: '250px' }}>
      <Header textAlign="center" size="huge" style={{ marginBottom: '50px' }}>
        <ToolsCount>{total}</ToolsCount> {landingData.searcher.title}
      </Header>
      <Header>{landingData.searcher.label}</Header>
      <StyledSearch
        size="big"
        minCharacters={3}
        onSearchChange={handleSearchChange}
        results={results}
        value={value}
        resultRenderer={Result}
        placeholder="search..."
        aria-label="search tools"
      />
      <WarnMessage>{value.length > 0 && value.length < 3 && 'min. three characters'}</WarnMessage>
    </Segment>
  );
};

export default Searcher;

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

const ToolsCount = styled.span`
  font-weight: 600;
  ${mq({
    fontSize: ['1em', '32px', '32px', '32px', '32px'],
  })}
`;
