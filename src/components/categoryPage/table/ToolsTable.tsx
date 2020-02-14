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
  const data = items.map(el => el.node);
  return (
    <>
      <SuiTable columns={columns} data={data} />
      {links.length > 0 && <Links links={links} />}
    </>
  );
};
