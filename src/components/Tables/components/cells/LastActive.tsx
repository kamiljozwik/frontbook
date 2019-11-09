import moment from 'moment';
import { Icon, Label } from 'semantic-ui-react';

import { ListItem } from '../../../../shared';
import { Unknown } from './';

export const LastActive = (item: ListItem) => {
  const updateTime = item.fields.githubData ? moment(item.fields.githubData.repository.pushedAt) : moment();
  const diff = moment().diff(updateTime, 'days');

  return item.fields.githubData
    ? (
        <Label basic>
          <Icon color={diff < 14 ? 'green' : (diff > 360 ? 'red' : 'yellow')} name="clock" />
          {moment(item.fields.githubData.repository.pushedAt, 'YYYYMMDD').fromNow()}
        </Label>
    )
    : <Unknown />;
};
