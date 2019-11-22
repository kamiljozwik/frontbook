import React from 'react';
import { Icon } from 'semantic-ui-react';

export const ToolIcon = ({ url }: { url?: string }) =>
  url ? (
    <img alt="tool icon" src={`https://www.google.com/s2/favicons?domain=${url}`} />
  ) : (
    <Icon name="ban" color="grey" style={{ fontSize: '1.2em', opacity: '0.4' }} />
  );
