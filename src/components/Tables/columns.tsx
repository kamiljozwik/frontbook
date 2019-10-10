import { Label } from 'semantic-ui-react';
import { Column, DefaultFilterFunction } from 'react-table';
import numeral from 'numeral';

import { TableHeader } from './components/header';
import { LicenseDropdown, FrameworkDropdown, FilterInput } from './components/filters';
import { LastActive, WebsiteLink, License, ToolName } from './components/cells';
import { ToolIcon } from '../../shared';

/**
 * Custom Sorting Methods
 */
const sortNumbers = (a: string | number, b: string | number) => {
  a = numeral(a).value();
  b = numeral(b).value();
  // force null and undefined to the bottom
  a = a === null || a === undefined ? -Infinity : a;
  b = b === null || b === undefined ? -Infinity : b;
  // Return either 1 or -1 to indicate a sort priority
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

/**
 * Custom Filter Methods
 */
const filterName: DefaultFilterFunction = (filter, row) => row['tool-name'].props.name.toLowerCase().includes(filter.value.toLowerCase());
const filterSlogan: DefaultFilterFunction = (filter, row) => row['slogan.slogan'].toLowerCase().includes(filter.value.toLowerCase());
const filterSize: DefaultFilterFunction = (filter, row) => numeral(row['github-diskUsage']).value() <= parseInt(filter.value, 10);
const filterStars: DefaultFilterFunction = (filter, row) => numeral(row['github-stars']).value() >= parseInt(filter.value, 10);
const filterDownloads: DefaultFilterFunction = (filter, row) => numeral(row['npm-weekly-downloads']).value() >= parseInt(filter.value, 10);
const filterIssues: DefaultFilterFunction = (filter, row) => numeral(row['github-issues']).value() <= parseInt(filter.value, 10);
const filterLicence: DefaultFilterFunction = (filter, row) => {
  const githubData = row['github-license'].props.githubData;
  const licenseInfo = githubData && githubData.repository.licenseInfo;
  const isLicenseKnown = licenseInfo !== null;
  return filter.value === 'all'
    ? true
    : (
      filter.value === 'mit'
        ? isLicenseKnown && licenseInfo.spdxId === 'MIT'
        : (isLicenseKnown && licenseInfo.spdxId === 'MIT') || !isLicenseKnown
    );
};
const filterFramework: DefaultFilterFunction = (filter, row) => {
  return filter.value === 'all'
    ? true
    : row['tool-framework'] && row['tool-framework'].props.children === 'React';
};

/**
 * Table Columns
 */
// tslint:disable: jsx-no-lambda
export const columns: Column[] = [
  {
    id: 'icon',
    accessor: d => <ToolIcon url={d.website} />,
    filterable: false,
    width: 36,
    sortable: false,
  },
  {
    id: 'tool-name',
    Header: () => <TableHeader content="Name / framework" />,
    accessor: d => <ToolName name={d.name} githubURL={d.github} npmURL={d.npm} websiteURL={d.website} />,
    filterMethod: filterName,
    Filter: ({ filter = {}, onChange }) => <FilterInput width="60%" label="includes:" onChange={event => onChange(event.target.value)} />,
    minWidth: 150,
  },
  {
    id: 'tool-framework',
    Header: () => <TableHeader />,
    accessor: d => (d.name && d.name.includes('React')) || (d.slogan && d.slogan.slogan.includes('React')) ? <Label size="mini" basic>React</Label> : '',
    filterMethod: filterFramework,
    Filter: ({ filter = {}, onChange }) => <FrameworkDropdown value={filter.value ? filter.value : 'all'} onChange={(event, data) => onChange(data.value)} style={{left: '-25px'}} />,
    minWidth: 60,
  },
  {
    Header: () => <TableHeader content="Info" icon="star" />,
    accessor: 'slogan.slogan',
    filterMethod: filterSlogan,
    Filter: ({ filter = {}, onChange }) => <FilterInput label="includes:" width="90%" onChange={event => onChange(event.target.value)} />,
    minWidth: 200,
    sortable: false,
  },
  {
    id: 'github-diskUsage',
    Header: () => <TableHeader content="Size [kB]" icon="hdd outline" />,
    accessor: d => d.fields.githubData ? numeral(d.fields.githubData.repository.diskUsage).format('0,0') : <Label color={undefined}>unknown</Label>,
    filterMethod: filterSize,
    Filter: ({ filter = {}, onChange }) => <FilterInput label="max:" onChange={event => onChange(event.target.value)} />,
    sortMethod: sortNumbers,
  },
  {
    id: 'github-stars',
    Header: () => <TableHeader content="Stars" icon="star" />,
    accessor: d => d.fields.githubData ?  numeral(d.fields.githubData.repository.stargazers.totalCount).format('0,0') : <Label color={undefined}>unknown</Label>,
    filterMethod: filterStars,
    Filter: ({ filter = {}, onChange }) => <FilterInput label="min:" onChange={event => onChange(event.target.value)} />,
    sortMethod: sortNumbers,
  },
  {
    id: 'npm-weekly-downloads',
    Header: () => <TableHeader content="Downloads" icon="npm" />,
    accessor: d => d.fields.npmData ? numeral(d.fields.npmData.downloads).format('0,0') : <Label color={undefined}>unknown</Label>,
    filterMethod: filterDownloads,
    Filter: ({ filter = {}, onChange }) => <FilterInput label="min:" onChange={event => onChange(event.target.value)} />,
    sortMethod: sortNumbers,
  },
  {
    id: 'github-issues',
    Header: () => <TableHeader content="Issues" icon="exclamation circle" />,
    accessor: d => d.fields.githubData ? numeral(d.fields.githubData.repository.issues.totalCount).format('0,0') : <Label color={undefined}>unknown</Label>,
    filterMethod: filterIssues,
    Filter: ({ filter = {}, onChange }) => <FilterInput label="max:" onChange={event => onChange(event.target.value)} />,
    sortMethod: sortNumbers,
  },
  {
    id: 'github-license',
    Header: () => <TableHeader content="License" icon="copyright outline" />,
    accessor: d => <License githubData={d.fields.githubData} />,
    filterMethod: filterLicence,
    Filter: ({ filter = {}, onChange }) => <LicenseDropdown value={filter.value ? filter.value : 'all'} onChange={(event, data) => onChange(data.value)} />,
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
    accessor: d => <WebsiteLink url={d.website} />,
    filterable: false,
    width: 80,
    sortable: false,
  },
];
