import React from 'react';
import { Item, Icon } from 'semantic-ui-react';
import styled from '@emotion/styled';
import { colors } from '../../../../shared';

interface ToolNameProps {
  name: string;
  githubURL: string;
  npmURL: string;
  websiteURL: string;
}

export const ToolName = ({name, githubURL, npmURL, websiteURL}: ToolNameProps) => (
  <Item>
    <Item.Content>
      <ToolNameText
        href={githubURL || npmURL || websiteURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </ToolNameText>
    </Item.Content>
  </Item>
);

const ToolNameText = styled.a`
  font-weight: 600;
  color: ${colors.black}
`;
