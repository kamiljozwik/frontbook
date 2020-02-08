import React from 'react';
import styled from '@emotion/styled';

import { Layout, ExampleCard } from '../components';
import { SectionHeader, SimpleButton } from '../components/shared';

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
  const prevPage = currentPage === 1 || currentPage === 2 ? '' : currentPage - 1;
  const nextPage = currentPage === totalPages ? currentPage : currentPage + 1;
  return (
    <Layout pageType="page" title={title}>
      <SectionHeader title={title} subtitle={`${total} proofs that CSS is limited only by our imagination`} />
      <ExamplesWrapper>
        {links.map(link => (
          <ExampleCard url={link} />
        ))}
      </ExamplesWrapper>
      <NavButtons>{`Page ${currentPage} of ${totalPages}`}</NavButtons>
      <NavButtons>
        <NavButton to={`${pagePath}/`}>First</NavButton>
        <NavButton to={`${pagePath}/${prevPage}`}>Previous</NavButton>
        <NavButton to={`${pagePath}/${nextPage}`}>Next</NavButton>
        <NavButton to={`${pagePath}/${totalPages}`}>Last</NavButton>
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

export const NavButton = styled(SimpleButton)`
  margin: 0 5px;
`;
