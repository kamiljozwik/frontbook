import React from 'react';
import numeral from 'numeral';
import { get } from 'lodash';

import { Unknown } from '.';

interface NumeralCellProps<D extends object | undefined> {
  data?: D;
  type: 'stars' | 'downloads' | 'issues';
}

export const NumeralCell = <D extends object | undefined>({ data, type }: NumeralCellProps<D>) => {
  let path = '';
  switch (type) {
    case 'stars': {
      path = 'stars';
      break;
    }
    case 'downloads': {
      path = 'downloads';
      break;
    }
    case 'issues': {
      path = 'repository.issues.totalCount';
      break;
    }
    default: {
      break;
    }
  }
  return data ? <>{numeral(get(data, path)).format('0,0')}</> : <Unknown />;
};
