import moment from 'moment';
import { Icon, Label } from 'semantic-ui-react';

export const LastActive = (d: any) => {
  const updateTime = d.fields.githubData ? moment(d.fields.githubData.repository.pushedAt) : moment();
  const diff = moment().diff(updateTime, 'months');
  return d.fields.githubData
    ? (
        <Label basic>
          <Icon color={diff === 0 ? 'green' : (diff > 11 ? 'red' : 'yellow')} name="clock" />
          {moment(d.fields.githubData.repository.pushedAt, 'YYYYMMDD').fromNow()}
        </Label>
    )
    : <Label color={undefined}>unknown</Label>;
};
