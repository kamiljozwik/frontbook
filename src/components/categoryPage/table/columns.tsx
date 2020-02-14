import React from 'react';
import { UseTableColumnOptions, UseFiltersColumnOptions, UseSortByColumnOptions } from 'react-table';
import { Assign } from 'utility-types';

// import { TableHeader } from './components/header';
import { ToolIcon } from '../..';
import { LastActive, WebsiteLink, License, ToolName, Size, FrameworkLabel, NumeralCell } from './components/cells';
import { ListItem } from '../../../shared/types';
import { FrameworkFilter, ColumnFilterProps, LicenseFilter, FilterInput } from '../../table/filters';
import {
  filterForFrameworks,
  filterGreaterThan,
  filterLowerThan,
  filterForLicenses,
} from '../../table/filterFunctions';

export type FilterAndSort<D extends object> = Assign<UseFiltersColumnOptions<D>, UseSortByColumnOptions<D>>;
export type ExtendedColumn<D extends object> = Assign<UseTableColumnOptions<D>, FilterAndSort<D>>;

export const columns: Array<ExtendedColumn<ListItem>> = [
  {
    id: 'icon',
    accessor: data => <ToolIcon url={data.website} />,
    disableSortBy: true,
    disableFilters: true,
    width: 40,
  },
  {
    Header: 'Name',
    accessor: 'name',
    Cell: ({ row: { original } }) => (
      <ToolName name={original.name} githubURL={original.github} npmURL={original.npm} websiteURL={original.website} />
    ),
  },
  {
    id: 'tool-framework',
    Header: 'Framework',
    accessor: data => <FrameworkLabel name={data.name.toLowerCase()} slogan={data.slogan.slogan.toLowerCase()} />,
    disableSortBy: true,
    width: 40,
    Filter: FrameworkFilter,
    filter: filterForFrameworks,
  },
  {
    Header: 'Info',
    accessor: 'slogan.slogan',
    disableSortBy: true,
  },
  {
    Header: 'Minified/gzip',
    accessor: 'fields.bundlephobiaData.size',
    Cell: ({ row: { original } }) => <Size bundlephobiaData={original.fields.bundlephobiaData} />,
    width: 40,
    Filter: ({ column }: ColumnFilterProps<ListItem>) => (
      <FilterInput column={column} label="max:" tailLabel="kB" multi={1024} />
    ),
    filter: filterLowerThan,
  },
  {
    Header: 'Stars',
    accessor: 'fields.githubData.stars',
    Cell: ({ row: { original } }) => (
      <NumeralCell<typeof original.fields.githubData> data={original.fields.githubData} type="stars" />
    ),
    Filter: ({ column }: ColumnFilterProps<ListItem>) => <FilterInput column={column} />,
    filter: filterGreaterThan,
    width: 40,
  },
  {
    Header: 'Downloads',
    accessor: 'fields.npmData.downloads',
    Cell: ({ row: { original } }) => (
      <NumeralCell<typeof original.fields.npmData> data={original.fields.npmData} type="downloads" />
    ),
    Filter: ({ column }: ColumnFilterProps<ListItem>) => <FilterInput column={column} />,
    filter: filterGreaterThan,
    width: 40,
  },
  {
    Header: 'Issues',
    accessor: 'fields.githubData.repository.issues.totalCount',
    Cell: ({ row: { original } }) => (
      <NumeralCell<typeof original.fields.githubData> data={original.fields.githubData} type="issues" />
    ),
    Filter: ({ column }: ColumnFilterProps<ListItem>) => <FilterInput column={column} label="max:" />,
    filter: filterLowerThan,
    width: 40,
  },
  {
    Header: 'License',
    accessor: 'fields.githubData.repository.licenseInfo.spdxId',
    Cell: ({ row: { original } }) => <License githubData={original.fields.githubData} />,
    Filter: LicenseFilter,
    filter: filterForLicenses,
    width: 40,
  },
  {
    Header: 'Last active',
    accessor: LastActive,
    disableSortBy: true,
    disableFilters: true,
    width: 40,
  },
  {
    Header: 'URL',
    accessor: data => <WebsiteLink url={data.website} />,
    disableSortBy: true,
    disableFilters: true,
    width: 40,
  },
];
