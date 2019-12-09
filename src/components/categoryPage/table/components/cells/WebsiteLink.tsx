import React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { Unknown } from './Unknown';

export const WebsiteLink = ({ url }: { url?: string }) =>
  url ? (
    <Label basic color="blue" as={OutboundLink} href={url} target="_blank" rel="noopener noreferrer">
      visit <Icon fitted color="blue" size="small" name="external" style={{ position: 'relative', top: '-1px' }} />
    </Label>
  ) : (
    <Unknown content="no URL" />
  );
