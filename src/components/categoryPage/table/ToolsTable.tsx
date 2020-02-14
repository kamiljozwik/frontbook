import React from 'react';

import { SubcategoryNode, LinkEntry } from '../../../shared';
import { columns } from './';
import { Links } from '../';
import { SuiTable } from '../../table';

interface ToolsTableProps {
  items: SubcategoryNode[];
  links: LinkEntry[];
}

export const ToolsTable = ({ items, links }: ToolsTableProps) => {
  const data = React.useMemo(() => items.map(el => el.node), [items]);
  const memoColumns = React.useMemo(() => columns, []);
  return (
    <>
      <SuiTable columns={memoColumns} data={data} />
      {links.length > 0 && <Links links={links} />}
    </>
  );
};
