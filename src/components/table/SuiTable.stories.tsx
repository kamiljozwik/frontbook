import React from 'react';
import { storiesOf } from '@storybook/react';
import { SuiTable } from './';
import { sizeDecoratorLayoutFull, semanticUIThemeDecorator } from '../_helpers';
import { columns, simpleColumns, makeData, title } from './_mockData';
import '@britishcouncil/semantic-ui-admin/dist/semantic.css';

const data = makeData(12);

storiesOf('Semantic UI| SUI Table', module)
  .addDecorator(sizeDecoratorLayoutFull)
  .addParameters(semanticUIThemeDecorator)
  .add('Simple table', () => <SuiTable title={title} columns={simpleColumns} data={data} />)
  .add('Two-row header ', () => <SuiTable title={title} columns={columns} data={data} />);
