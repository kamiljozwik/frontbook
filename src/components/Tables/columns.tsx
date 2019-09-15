import moment from 'moment';

interface FilterSliderProps {
  name: string;
  value: number;
  min?: number;
  max?: number;
  onChange?: (e: any) => void;
}

interface FilterDropdownProps {
  value: string;
  onChange?: (e: any) => void;
}

const FilterSlider = ({ name, value = 0, min = 0, max = 50000, onChange = () => null }: FilterSliderProps) => (
  <div>
    <input
      type="range"
      name={name}
      min={min}
      max={max}
      onChange={onChange}
    />
    {value}
  </div>
);

const FilterDropdown = ({ value = 'all', onChange = () => null }: FilterDropdownProps) => (
  <select
    onChange={onChange}
    style={{ width: '100%'}}
    value={value}
  >
    <option value="all">Show all</option>
    <option value="mit">MIT only</option>
  </select>
);

// tslint:disable: jsx-no-lambda
export const columns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Slogan',
    accessor: 'slogan.slogan',
    filterMethod: (filter: any, row: any) => row['slogan.slogan'].includes(filter.value),
  },
  {
    id: 'github-diskUsage',
    Header: 'Disk Usage [kB]',
    accessor: (d: any) => d.fields.githubData ? d.fields.githubData.repository.diskUsage : '-1',
    filterMethod: (filter: any, row: any) => row['github-diskUsage'] >= filter.value,
    Filter: ({ filter = {}, onChange }: any) => <FilterSlider name="diskUsage" value={filter.value ? filter.value : 0} onChange={event => onChange(event.target.value)} />,
  },
  {
    id: 'github-stars',
    Header: 'Stars',
    accessor: (d: any) => d.fields.githubData ? d.fields.githubData.repository.stargazers.totalCount : '-1',
    filterMethod: (filter: any, row: any) => row['github-stars'] >= filter.value,
    Filter: ({ filter = {}, onChange }: any) => <FilterSlider name="stars" value={filter.value ? filter.value : 0} onChange={event => onChange(event.target.value)} />,
  },
  {
    id: 'npm-weekly-downloads',
    Header: 'NPM Downloads',
    accessor: (d: any) => d.fields.npmData ? d.fields.npmData.downloads : '-1',
    filterMethod: (filter: any, row: any) => row['npm-weekly-downloads'] >= filter.value,
    Filter: ({ filter = {}, onChange }: any) => <FilterSlider name="downloads" value={filter.value ? filter.value : 0} onChange={event => onChange(event.target.value)} />,
  },
  {
    id: 'github-issues',
    Header: 'Issues',
    accessor: (d: any) => d.fields.githubData ? d.fields.githubData.repository.issues.totalCount : '-1',
    filterMethod: (filter: any, row: any) => row['github-issues'] >= filter.value,
    Filter: ({ filter = {}, onChange }: any) => <FilterSlider max={500} name="issues" value={filter.value ? filter.value : 0} onChange={event => onChange(event.target.value)} />,
  },
  {
    id: 'github-license',
    Header: 'License',
    accessor: (d: any) => d.fields.githubData && d.fields.githubData.repository.licenseInfo ? d.fields.githubData.repository.licenseInfo.spdxId : '-1',
    filterMethod: (filter: any, row: any) => filter.value === 'all' ? true : row['github-license'] === 'MIT',
    Filter: ({ filter = {}, onChange }: any) => <FilterDropdown value={filter.value ? filter.value : 'all'} onChange={event => onChange(event.target.value)} />,
  },
  {
    id: 'github-lastActive',
    Header: 'Last active',
    filterable: false,
    accessor: (d: any) => d.fields.githubData ? moment(d.fields.githubData.repository.pushedAt, 'YYYYMMDD').fromNow() : '-1',
  },
];
