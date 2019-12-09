import React from 'react';
import { Label } from 'semantic-ui-react';
import { Unknown } from './';

interface LicenseProps {
  githubData?: {
    repository: {
      licenseInfo: {
        spdxId?: string;
        url?: string;
      };
    };
  };
}

export const License = ({ githubData }: LicenseProps) => {
  const licenseInfo = githubData && githubData.repository.licenseInfo;
  return githubData ? (
    licenseInfo && licenseInfo.spdxId !== 'NOASSERTION' ? (
      <Label color={licenseInfo.spdxId === 'MIT' ? 'green' : 'orange'}>{licenseInfo.spdxId}</Label>
    ) : (
      <Unknown />
    )
  ) : (
    <Unknown />
  );
};
