import React from 'react';
import { Column, UseTableColumnOptions, UseFiltersColumnOptions, UseSortByColumnOptions } from 'react-table';
import numeral from 'numeral';

import { ToolIcon } from '../..';
import { TableHeader } from './components/header';
import { LicenseDropdown, FrameworkDropdown, FilterInput } from './components/filters';
import { LastActive, WebsiteLink, License, ToolName, Size, FrameworkLabel, Unknown } from './components/cells';
import { Assign } from 'utility-types';
import { ListItem } from '../../../shared/types';

export type FilterAndSort<D extends object> = Assign<UseFiltersColumnOptions<D>, UseSortByColumnOptions<D>>;
export type ExtendedColumn<D extends object> = Assign<UseTableColumnOptions<D>, FilterAndSort<D>>;

export const columns: Array<ExtendedColumn<ListItem>> = [
  {
    id: 'icon',
    accessor: data => <ToolIcon url={data.website} />,
    disableSortBy: true,
    disableFilters: true,
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    id: 'tool-framework',
    Header: () => <TableHeader />,
    accessor: d => <FrameworkLabel name={d.name.toLowerCase()} slogan={d.slogan.slogan.toLowerCase()} />,
    disableSortBy: true,
  },
  {
    Header: 'Info',
    accessor: 'slogan.slogan',
    disableSortBy: true,
  },
  {
    Header: 'Minified/gzip',
    accessor: data => <Size bundlephobiaData={data.fields.bundlephobiaData} />,
  },
  {
    Header: 'Stars',
    accessor: data =>
      data.fields.githubData ? (
        numeral(data.fields.githubData.repository.stargazers.totalCount).format('0,0')
      ) : (
        <Unknown />
      ),
  },
  {
    Header: 'Downloads',
    accessor: data =>
      data.fields.githubData ? (
        numeral(data.fields.githubData.repository.stargazers.totalCount).format('0,0')
      ) : (
        <Unknown />
      ),
  },
  {
    Header: 'Issues',
    accessor: data =>
      data.fields.githubData ? numeral(data.fields.githubData.repository.issues.totalCount).format('0,0') : <Unknown />,
  },
  {
    Header: 'License',
    accessor: data => <License githubData={data.fields.githubData} />,
  },
  {
    Header: 'Last active',
    accessor: LastActive,
    disableSortBy: true,
    disableFilters: true,
  },
  {
    Header: 'URL',
    accessor: data => <WebsiteLink url={data.website} />,
    disableSortBy: true,
    disableFilters: true,
  },
];

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

interface SizeData {
  props: {
    bundlephobiaData?: {
      size: number;
    };
  };
}

// const sortSize = (a: SizeData, b: SizeData) => {
//   const sizeA = a.props.bundlephobiaData ? a.props.bundlephobiaData.size : -Infinity;
//   const sizeB = b.props.bundlephobiaData ? b.props.bundlephobiaData.size : -Infinity;
//   if (sizeA > sizeB) {
//     return 1;
//   }
//   if (sizeA < sizeB) {
//     return -1;
//   }
//   return 0;
// };

/**
 * Custom Filter Methods
 */
// const filterName: DefaultFilterFunction = (filter, row) =>
//   row['tool-name'].props.name.toLowerCase().includes(filter.value.toLowerCase());
// const filterFramework: DefaultFilterFunction = (filter, row) => {
//   const { name, slogan } = row['tool-framework'].props;
//   if (filter.value === 'all') {
//     return true;
//   }
//   if (filter.value === 'vanilla') {
//     return !(name.includes('react') || slogan.includes('react') || name.includes('vue') || slogan.includes('vue'));
//   }
//   return name.includes(filter.value) || slogan.includes(filter.value);
// };
// const filterSlogan: DefaultFilterFunction = (filter, row) =>
//   row['slogan.slogan'].toLowerCase().includes(filter.value.toLowerCase());
// const filterSize: DefaultFilterFunction = (filter, row) =>
//   row['bundlephobia-size'].props.bundlephobiaData
//     ? row['bundlephobia-size'].props.bundlephobiaData.size <= parseInt(filter.value, 10) * 1024
//     : true;
// const filterStars: DefaultFilterFunction = (filter, row) =>
//   numeral(row['github-stars']).value() >= parseInt(filter.value, 10);
// const filterDownloads: DefaultFilterFunction = (filter, row) =>
//   numeral(row['npm-weekly-downloads']).value() >= parseInt(filter.value, 10);
// const filterIssues: DefaultFilterFunction = (filter, row) =>
//   numeral(row['github-issues']).value() <= parseInt(filter.value, 10);
// const filterLicence: DefaultFilterFunction = (filter, row) => {
//   const githubData = row['github-license'].props.githubData;
//   const licenseInfo = githubData && githubData.repository.licenseInfo;
//   const isLicenseKnown = licenseInfo !== null;
//   return filter.value === 'all'
//     ? true
//     : filter.value === 'mit'
//     ? isLicenseKnown && licenseInfo.spdxId === 'MIT'
//     : (isLicenseKnown && licenseInfo.spdxId === 'MIT') || !isLicenseKnown;
// };

/**
 * Table Columns
 */
// tslint:disable: jsx-no-lambda
// export const columns: Column[] = [
//   {
//     id: 'icon',
//     accessor: d => <ToolIcon url={d.website} />,
//     filterable: false,
//     width: 36,
//     sortable: false,
//   },
//   {
//     id: 'tool-name',
//     Header: () => <TableHeader content="Name / framework" title="Tool's name and compatible framework" />,
//     accessor: d => <ToolName name={d.name} githubURL={d.github} npmURL={d.npm} websiteURL={d.website} />,
//     filterMethod: filterName,
//     Filter: ({ filter = {}, onChange }) => (
//       <FilterInput width="60%" label="includes:" onChange={event => onChange(event.target.value)} />
//     ),
//     minWidth: 150,
//     sortable: false,
//   },
//   {
//     id: 'tool-framework',
//     Header: () => <TableHeader />,
//     accessor: d => <FrameworkLabel name={d.name.toLowerCase()} slogan={d.slogan.slogan.toLowerCase()} />,
//     filterMethod: filterFramework,
//     Filter: ({ filter = {}, onChange }) => (
//       <FrameworkDropdown
//         value={filter.value ? filter.value : 'all'}
//         onChange={(event, data) => onChange(data.value)}
//         style={{ left: '-25px' }}
//       />
//     ),
//     minWidth: 60,
//     sortable: false,
//   },
//   {
//     Header: () => <TableHeader content="Info" icon="star" title="Tool's short description" />,
//     accessor: 'slogan.slogan',
//     filterMethod: filterSlogan,
//     Filter: ({ filter = {}, onChange }) => (
//       <FilterInput label="includes:" width="90%" onChange={event => onChange(event.target.value)} />
//     ),
//     minWidth: 200,
//     sortable: false,
//   },
//   {
//     id: 'bundlephobia-size',
//     Header: () => (
//       <TableHeader content="Minified / gzip" icon="hdd outline" title="Package size according to bundlephobia.com" />
//     ),
//     accessor: d => <Size bundlephobiaData={d.fields.bundlephobiaData} />,
//     filterMethod: filterSize,
//     Filter: ({ filter = {}, onChange }) => (
//       <FilterInput label="max:" tail="kB" onChange={event => onChange(event.target.value)} />
//     ),
//     sortMethod: sortSize,
//   },
//   {
//     id: 'github-stars',
//     Header: () => <TableHeader content="Stars" icon="star" title="Github stars" />,
//     accessor: d =>
//       d.fields.githubData ? numeral(d.fields.githubData.repository.stargazers.totalCount).format('0,0') : <Unknown />,
//     filterMethod: filterStars,
//     Filter: ({ filter = {}, onChange }) => (
//       <FilterInput label="min:" onChange={event => onChange(event.target.value)} />
//     ),
//     sortMethod: sortNumbers,
//   },
//   {
//     id: 'npm-weekly-downloads',
//     Header: () => <TableHeader content="Downloads" icon="npm" title="NPM weekly downloads" />,
//     accessor: d => (d.fields.npmData ? numeral(d.fields.npmData.downloads).format('0,0') : <Unknown />),
//     filterMethod: filterDownloads,
//     Filter: ({ filter = {}, onChange }) => (
//       <FilterInput label="min:" onChange={event => onChange(event.target.value)} />
//     ),
//     sortMethod: sortNumbers,
//   },
//   {
//     id: 'github-issues',
//     Header: () => <TableHeader content="Issues" icon="exclamation circle" title="Github issues" />,
//     accessor: d =>
//       d.fields.githubData ? numeral(d.fields.githubData.repository.issues.totalCount).format('0,0') : <Unknown />,
//     filterMethod: filterIssues,
//     Filter: ({ filter = {}, onChange }) => (
//       <FilterInput label="max:" onChange={event => onChange(event.target.value)} />
//     ),
//     sortMethod: sortNumbers,
//   },
//   {
//     id: 'github-license',
//     Header: () => <TableHeader content="License" icon="copyright outline" title="Package license" />,
//     accessor: d => <License githubData={d.fields.githubData} />,
//     filterMethod: filterLicence,
//     Filter: ({ filter = {}, onChange }) => (
//       <LicenseDropdown value={filter.value ? filter.value : 'all'} onChange={(event, data) => onChange(data.value)} />
//     ),
//     sortable: false,
//   },
//   {
//     id: 'github-lastActive',
//     Header: () => <TableHeader content="Last active" icon="clock outline" title="Last activity on repository" />,
//     accessor: LastActive,
//     filterable: false,
//     sortable: false,
//   },
//   {
//     id: 'website',
//     Header: () => <TableHeader content="URL" icon="globe" title="Tool's website" />,
//     accessor: d => <WebsiteLink url={d.website} />,
//     filterable: false,
//     width: 80,
//     sortable: false,
//   },
// ];
