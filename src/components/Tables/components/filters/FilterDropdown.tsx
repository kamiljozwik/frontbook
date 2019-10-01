import { ChangeEvent } from 'react';
import { Dropdown } from 'semantic-ui-react';
import styled from '@emotion/styled';

interface FilterDropdownProps {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>, data: { value: string | number}) => void;
}

export const LicenseDropdown = ({ value = 'all', onChange = (e, data) => null }: FilterDropdownProps) => {
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
      placeholder="All"
      fluid
      selection
      selectOnBlur={false}
      selectOnNavigation={false}
      options={licensesOptions}
      onChange={onChange}
    />
  );
};

export const FrameworkDropdown = ({ value = 'all', onChange = (e, data) => null }: FilterDropdownProps) => {
  const frameworksOptions = [
    {
      key: 'all',
      text: 'All',
      value: 'all',
    },
    {
      key: 'react',
      text: 'React',
      value: 'react',
    },
  ];
  return (
    <StyledDropdown
      placeholder="All"
      fluid
      selection
      selectOnBlur={false}
      selectOnNavigation={false}
      options={frameworksOptions}
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
