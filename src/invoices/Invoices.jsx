// Converted to JSX until https://github.com/grommet/grommet/issues/2464 is fixed

import React from 'react';
import { Box, DataTable, Heading, Text } from 'grommet';
import { Add } from 'grommet-icons';
import { Link } from 'react-router-dom';

import invoiceRoutes from './routes';

const columns = [
  {
    property: 'number',
    header: <Text>Number</Text>,
  },
  {
    property: 'customer',
    header: 'Customer',
  },
  {
    property: 'supplier',
    header: 'Supplier',
  },
  {
    property: 'status',
    header: 'Status',
  },
  {
    property: 'actions',
    header: 'Actions',
    render: () => <Text>tes</Text>,
  },
];

const SAMPLE_DATA = [
  {
    number: '111',
    customer: 'John doe',
    supplier: 'amazon.com',
    status: 'in queue',
  },
];

export default class Invoices extends React.Component {
  displayName = 'Invoices';

  render() {
    return (
      <Box fill>
        <Box justify="between" direction="row" align="center">
          <Heading level="3">Invoices</Heading>
          <Link to={invoiceRoutes.new}>
            <Box justify="center" align="center" direction="row">
              <Add />
              Add new
            </Box>
          </Link>
        </Box>

        <Box>
          <DataTable data={SAMPLE_DATA} columns={columns} />
        </Box>
      </Box>
    );
  }
}