import React from 'react';
import { DataTable } from '@/components/ui/DataTable/DataTable';
import { data } from '@/components/ui/DataTable/data';
import { columns } from '@/components/ui/DataTable/columns';

export default {
  title: 'Components/DataTable',
  component: DataTable,
  argTypes: {}
};

const Template = (args) => <DataTable {...args} />;

export const BasicTable = Template.bind({});
BasicTable.args = {
  columns: columns,
  data: data
};

export const RowActions = Template.bind({});
RowActions.args = {
  columns: columns,
  data: data,
  enableRowActions: true
};

export const Pagination = Template.bind({});
Pagination.args = {
  columns: columns,
  data: data,
  enablePagination: true
};

export const Sorting = Template.bind({});
Sorting.args = {
  columns: columns.map((col) => ({
    ...col,
    enableSorting: true
  })),
  data: data
};

export const Filtering = Template.bind({});
Filtering.args = {
  columns: columns.map((col) => ({
    ...col,
    filterable: true
  })),
  data: data
};

export const Visibility = Template.bind({});
Visibility.args = {
  columns: columns,
  data: data,
  enableColumnVisibility: true
};

export const RowSelection = Template.bind({});
RowSelection.args = {
  columns: columns,
  data: data,
  enableRowSelection: true
};
