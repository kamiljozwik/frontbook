import { Label } from 'semantic-ui-react';
import numeral from 'numeral';

import { TableHeader } from './components/header';
import { LicenseDropdown, FilterInput } from './components/filters';
import { LastActive, WebsiteLink, ToolIcon } from './components/cells';

/**
 * Custom Filter Methods
 */
const filterSlogan = (filter: any, row: any) => row['slogan.slogan'].includes(filter.value);
const filterSize = (filter: any, row: any) => row['github-diskUsage'] <= parseInt(filter.value, 10);
const filterStars = (filter: any, row: any) => row['github-stars'] >= parseInt(filter.value, 10);
const filterDownloads = (filter: any, row: any) => row['npm-weekly-downloads'] >= parseInt(filter.value, 10);
const filterIssues = (filter: any, row: any) => row['github-issues'] <= parseInt(filter.value, 10);
const filterLicence = (filter: any, row: any) => filter.value === 'all'
  ? true
  : (
      filter.value === 'mit'
        ? row['github-license'].props.children === 'MIT'
        : row['github-license'].props.children === 'MIT' || row['github-license'].props.children === 'unknown'
  );

/**
 * Table Columns
 */
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
    filterMethod: filterSlogan,
    Filter: ({ filter = {}, onChange }: any) => <FilterInput label="includes:" width="90%" onChange={event => onChange(event.target.value)} />,
    minWidth: 300,
    sortable: false,
  },
  {
    id: 'github-diskUsage',
    Header: () => <TableHeader content="Size [kB]" icon="hdd outline" />,
    accessor: (d: any) => d.fields.githubData ? numeral(d.fields.githubData.repository.diskUsage).format('0,0') : <Label color={undefined}>unknown</Label>,
    filterMethod: filterSize,
    Filter: ({ filter = {}, onChange }: any) => <FilterInput label="max:" onChange={event => onChange(event.target.value)} />,
  },
  {
    id: 'github-stars',
    Header: () => <TableHeader content="Stars" icon="star" />,
    accessor: (d: any) => d.fields.githubData ?  numeral(d.fields.githubData.repository.stargazers.totalCount).format('0,0') : <Label color={undefined}>unknown</Label>,
    filterMethod: filterStars,
    Filter: ({ filter = {}, onChange }: any) => <FilterInput label="min:" onChange={event => onChange(event.target.value)} />,
  },
  {
    id: 'npm-weekly-downloads',
    Header: () => <TableHeader content="Downloads" icon="npm" />,
    accessor: (d: any) => d.fields.npmData ? numeral(d.fields.npmData.downloads).format('0,0') : <Label color={undefined}>unknown</Label>,
    filterMethod: filterDownloads,
    Filter: ({ filter = {}, onChange }: any) => <FilterInput label="min:" onChange={event => onChange(event.target.value)} />,
  },
  {
    id: 'github-issues',
    Header: () => <TableHeader content="Issues" icon="exclamation circle" />,
    accessor: (d: any) => d.fields.githubData ? numeral(d.fields.githubData.repository.issues.totalCount).format('0,0') : <Label color={undefined}>unknown</Label>,
    filterMethod: filterIssues,
    Filter: ({ filter = {}, onChange }: any) => <FilterInput label="max:" onChange={event => onChange(event.target.value)} />,
  },
  {
    id: 'github-license',
    Header: () => <TableHeader content="License" icon="copyright outline" />,
    // TODO: Move to separate file
    accessor: (d: any) => d.fields.githubData && d.fields.githubData.repository.licenseInfo
      ? <Label color={d.fields.githubData.repository.licenseInfo.spdxId === 'MIT' ? 'green' : 'orange'}>{d.fields.githubData.repository.licenseInfo.spdxId}</Label>
      : <Label color={undefined}>unknown</Label>,
    filterMethod: filterLicence,
    Filter: ({ filter = {}, onChange }: any) => <LicenseDropdown value={filter.value ? filter.value : 'all'} onChange={(event, data) => onChange(data.value)} />,
    sortable: false,
  },
  {
    id: 'github-lastActive',
    Header: () => <TableHeader content="Last active" icon="clock outline" />,
    accessor: LastActive,
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
