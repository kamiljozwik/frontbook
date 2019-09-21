import moment from 'moment';
import { Header, Icon, Label, Input, Dropdown, SemanticICONS } from 'semantic-ui-react';
import styled from '@emotion/styled';
import numeral from 'numeral';

interface FilterDropdownProps {
  value: string;
  onChange?: (e: any, data: any) => void;
}

interface InputDropdownProps {
  label?: string;
  width?: string;
  onChange?: (e: any) => void;
}

const LicenseDropdown = ({ value = 'all', onChange = (e, data) => null }: FilterDropdownProps) => {
  const licensesOptions = [
    {
      key: 'all',
      text: 'See all',
      value: 'all',
    },
    {
      key: 'mit',
      text: 'MIT Only',
      value: 'mit',
    },
    {
      key: 'mit2',
      text: 'MIT + unknown',
      value: 'mit2',
    },
  ];
  return (
    <StyledDropdown
      placeholder="Select"
      fluid
      selection
      selectOnBlur={false}
      selectOnNavigation={false}
      options={licensesOptions}
      onChange={onChange}
    />
  );
};

const StyledDropdown = styled(Dropdown)`
  &&& {
    min-height: 30px;
    height: 30px;
    padding: 8px;
    font-size: 13px;
    .item {
      font-size: 13px;
    }
  }
`;

const FilterInput = ({ label = 'min', width = '80%', onChange = (e) => null }: InputDropdownProps) => (
  <Input size="mini" labelPosition="left" type="text" placeholder="value" style={{width}}>
    <Label basic>{label}</Label>
    <input style={{width: '80%'}} onChange={onChange} />
  </Input>
);

const WebsiteLink = ({ url }: {url?: string}) => url
  ? (
    <Label basic color="blue" as="a" href={url} target="_blank" rel="noopener noreferrer">
      visit  <Icon fitted color="blue" size="small" name="external" style={{position: 'relative', top: '-1px'}} />
    </Label>
  )
  : <Label color={undefined}>no URL</Label>;

const ToolIcon = ({ url }: {url?: string}) => url
  ? <img alt="tool icon" src={`https://www.google.com/s2/favicons?domain=${url}`}/>
  : <Icon name="ban" color="grey" style={{fontSize: '1.2em', opacity: '0.4'}}/>;

const LastActiveCell = (d: any) => {
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

// tslint:disable: jsx-no-lambda
export const columns = [
  {
    id: 'icon',
    accessor: (d: any) => <ToolIcon url={d.website} />,
    filterable: false,
    width: 36,
    sortable: false,
  },
  {
    Header: () => <TableHeader content="Name" icon="star" />,
    accessor: 'name',
    Filter: ({ filter = {}, onChange }: any) => <FilterInput label="starts:" onChange={event => onChange(event.target.value)} />,
    minWidth: 150,
  },
  {
    Header: () => <TableHeader content="Info" icon="star" />,
    accessor: 'slogan.slogan',
    filterMethod: (filter: any, row: any) => row['slogan.slogan'].includes(filter.value),
    Filter: ({ filter = {}, onChange }: any) => <FilterInput label="includes:" width="90%" onChange={event => onChange(event.target.value)} />,
    minWidth: 300,
    sortable: false,
  },
  {
    id: 'github-diskUsage',
    Header: () => <TableHeader content="Size [kB]" icon="hdd outline" />,
    accessor: (d: any) => d.fields.githubData ? numeral(d.fields.githubData.repository.diskUsage).format('0,0') : <Label color={undefined}>unknown</Label>,
    filterMethod: (filter: any, row: any) => row['github-diskUsage'] <= parseInt(filter.value, 10),
    Filter: ({ filter = {}, onChange }: any) => <FilterInput label="max:" onChange={event => onChange(event.target.value)} />,
  },
  {
    id: 'github-stars',
    Header: () => <TableHeader content="Stars" icon="star" />,
    accessor: (d: any) => d.fields.githubData ?  numeral(d.fields.githubData.repository.stargazers.totalCount).format('0,0') : <Label color={undefined}>unknown</Label>,
    filterMethod: (filter: any, row: any) => row['github-stars'] >= parseInt(filter.value, 10),
    Filter: ({ filter = {}, onChange }: any) => <FilterInput label="min:" onChange={event => onChange(event.target.value)} />,
  },
  {
    id: 'npm-weekly-downloads',
    Header: () => <TableHeader content="Downloads" icon="npm" />,
    accessor: (d: any) => d.fields.npmData ? numeral(d.fields.npmData.downloads).format('0,0') : <Label color={undefined}>unknown</Label>,
    filterMethod: (filter: any, row: any) => row['npm-weekly-downloads'] >= parseInt(filter.value, 10),
    Filter: ({ filter = {}, onChange }: any) => <FilterInput label="min:" onChange={event => onChange(event.target.value)} />,
  },
  {
    id: 'github-issues',
    Header: () => <TableHeader content="Issues" icon="exclamation circle" />,
    accessor: (d: any) => d.fields.githubData ? numeral(d.fields.githubData.repository.issues.totalCount).format('0,0') : <Label color={undefined}>unknown</Label>,
    filterMethod: (filter: any, row: any) => row['github-issues'] <= parseInt(filter.value, 10),
    Filter: ({ filter = {}, onChange }: any) => <FilterInput label="max:" onChange={event => onChange(event.target.value)} />,
  },
  {
    id: 'github-license',
    Header: () => <TableHeader content="License" icon="copyright outline" />,
    accessor: (d: any) => d.fields.githubData && d.fields.githubData.repository.licenseInfo
      ? <Label color={d.fields.githubData.repository.licenseInfo.spdxId === 'MIT' ? 'green' : 'orange'}>{d.fields.githubData.repository.licenseInfo.spdxId}</Label>
      : <Label color={undefined}>unknown</Label>,
    filterMethod: (filter: any, row: any) => filter.value === 'all'
      ? true
      : (
          filter.value === 'mit'
            ? row['github-license'].props.children === 'MIT'
            : row['github-license'].props.children === 'MIT' || row['github-license'].props.children === 'unknown'
      ),
    Filter: ({ filter = {}, onChange }: any) => <LicenseDropdown value={filter.value ? filter.value : 'all'} onChange={(event, data) => onChange(data.value)} />,
    sortable: false,
  },
  {
    id: 'github-lastActive',
    Header: () => <TableHeader content="Last active" icon="clock outline" />,
    accessor: LastActiveCell,
    filterable: false,
    sortable: false,
  },
  {
    id: 'website',
    Header: () => <TableHeader content="URL" icon="globe" />,
    accessor: (d: any) => <WebsiteLink url={d.website} />,
    filterable: false,
    width: 80,
    sortable: false,
  },
];

const TableHeader = ({content= '', icon= 'star'}: {content?: string, icon?: SemanticICONS}) => (
  <Header size="small">
    {content === 'Name' || content === 'Info' ? '' : <Icon name={icon} style={{fontSize: '1em'}}/>}
    <Header.Content>{content}</Header.Content>
  </Header>
);
