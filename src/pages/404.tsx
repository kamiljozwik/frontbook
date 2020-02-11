import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Layout, LinkButton } from '../components';
import styled from '@emotion/styled';
import { colors, BasicLoader } from '../shared';

const JokeBox = ({ joke }: { joke: string }) => {
  return <JokeBoxWrapper>{joke}</JokeBoxWrapper>;
};

const NotFoundPage = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    axios
      .get('https://geek-jokes.sameerkumar.website/api')
      .then(({ data }) => setJoke(data))
      .catch(() => {
        setJoke("UNIX is user friendly, it is just very particular about who it's friends are.");
      });
  }, []);

  return (
    <Layout pageType="404" title="404 - NOT FOUND">
      <PageWrapper>
        <Title>Page not found...</Title>
        <Desc>but every cloud has a silver lining - now you can check out this geek joke :)</Desc>
        {joke ? <JokeBox joke={joke} /> : <BasicLoader />}
        <LinkButton to="/">HOME</LinkButton>
      </PageWrapper>
    </Layout>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
`;

const Desc = styled.p`
  text-align: center;
  font-size: 16px;
`;

const JokeBoxWrapper = styled.div`
  padding: 26px;
  margin: 20px auto;
  background: ${colors.logoDark};
  text-align: center;
  color: white;
  font-size: 20px;
  width: 50%;
  line-height: 150%;
  border-radius: 20px;
  box-shadow: 0 8px 20px -2px rgba(0, 0, 0, 0.3);
`;

export default NotFoundPage;
