import { Label } from 'semantic-ui-react';

interface LicenseProps {
  githubData?: {
    repository: {
      licenseInfo: {
        spdxId?: string,
        url?: string,
      }
    }
  };
}

export const License = ({ githubData }: LicenseProps) => {
  const licenseInfo = githubData && githubData.repository.licenseInfo;
  return githubData
    ? (
        licenseInfo && licenseInfo.spdxId !== 'NOASSERTION'
        ? (
            <Label color={licenseInfo.spdxId === 'MIT' ? 'green' : 'orange'}>
              {licenseInfo.spdxId}
            </Label>
          )
        : <Label color={undefined}>unknown</Label>
    )
    : <Label color={undefined}>unknown</Label>;
};
