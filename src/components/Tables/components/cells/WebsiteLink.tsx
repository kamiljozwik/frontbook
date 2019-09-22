import { Icon, Label } from 'semantic-ui-react';

export const WebsiteLink = ({ url }: {url?: string}) => url
  ? (
    <Label basic color="blue" as="a" href={url} target="_blank" rel="noopener noreferrer">
      visit  <Icon fitted color="blue" size="small" name="external" style={{position: 'relative', top: '-1px'}} />
    </Label>
  )
  : <Label color={undefined}>no URL</Label>;
