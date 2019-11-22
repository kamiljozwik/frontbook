import React from 'react';
import { Label } from 'semantic-ui-react';

interface FrameworkLabelProps {
  name: string;
  slogan: string;
}

export const FrameworkLabel = ({ name, slogan }: FrameworkLabelProps) => {
  return (
    <>
      {name.includes('react') || (slogan && slogan.includes('react')) ? (
        <Label size="mini" basic>
          React
        </Label>
      ) : (
        ''
      )}
      {(name && name.includes('vue')) || (slogan && slogan.includes('vue')) ? (
        <Label size="mini" basic>
          Vue
        </Label>
      ) : (
        ''
      )}
    </>
  );
};
