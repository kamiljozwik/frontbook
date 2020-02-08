import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { navigate } from 'gatsby';

import { Layout, ExampleCard } from '../components';
import { SectionHeader } from '../components/shared';
import { Pagination } from 'semantic-ui-react';

interface CssIsAwesomeProps {
  pageContext: {
    links: string[];
    total: number;
    title: string;
    pagePath: string;
    currentPage: number;
    totalPages: number;
  };
}

const UIExamples = ({ pageContext }: CssIsAwesomeProps) => {
  const { links, total, title, pagePath, currentPage, totalPages } = pageContext;

  const onPageChange = useCallback(
    (e, data) => {
      navigate(`${pagePath}/${data.activePage === 1 ? '' : data.activePage}`);
    },
    [pagePath]
  );
  return (
    <Layout pageType="page" title={title}>
      <SectionHeader title={title} subtitle={`${total} proofs that CSS is limited only by our imagination`} />
      <ExamplesWrapper>
        {links.map(link => (
          <ExampleCard url={link} />
        ))}
      </ExamplesWrapper>
      <NavButtons>
        <Pagination totalPages={totalPages} activePage={currentPage} onPageChange={onPageChange} />
      </NavButtons>
    </Layout>
  );
};

export default UIExamples;

export const ExamplesWrapper = styled.div`
  position: relative;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
`;
