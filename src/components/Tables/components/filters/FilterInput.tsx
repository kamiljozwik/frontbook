import { ChangeEvent } from 'react';
import { Label, Input } from 'semantic-ui-react';

interface InputDropdownProps {
  label?: string;
  width?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FilterInput = ({ label = 'min', width = '80%', onChange = e => null }: InputDropdownProps) => (
  <Input size="mini" labelPosition="left" type="text" placeholder="value" style={{width}}>
    <Label basic>{label}</Label>
    <input style={{width: '80%'}} onChange={onChange} />
  </Input>
);
