import moment from 'moment';
import { Icon, Label } from 'semantic-ui-react';

import { ListItem } from '../../../../shared';

export const LastActive = (item: ListItem) => {
  const updateTime = item.fields.githubData ? moment(item.fields.githubData.repository.pushedAt) : moment();
  const diff = moment().diff(updateTime, 'months');
  return item.fields.githubData
    ? (
        <Label basic>
          <Icon color={diff === 0 ? 'green' : (diff > 11 ? 'red' : 'yellow')} name="clock" />
          {moment(item.fields.githubData.repository.pushedAt, 'YYYYMMDD').fromNow()}
        </Label>
    )
    : <Label color={undefined}>unknown</Label>;
};
