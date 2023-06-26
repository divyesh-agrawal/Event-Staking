import React from 'react';

import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import map from 'lodash/map';
import { PropTypes } from 'prop-types';

import {
  StyledTableCell,
  StyledTableRow,
} from '@components/Table/Table.styles';

/** Component to render table
 * @param {array} tableHeader - Array containing headers of table
 * @param {array} tableData - Data of Table to be displayed
 */
const TableComponent = ({ tableHeader, tableData }) => (
  <TableContainer component={Paper} elevation={0}>
    <Table aria-label="customized table">
      <TableHead>
        <TableRow>
          {map(tableHeader, (header) => (
            <StyledTableCell key={header} isTableHead>
              {header}
            </StyledTableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {map(tableData, (rowArray, rowIndex) => (
          <StyledTableRow key={`row${rowIndex}`}>
            {map(rowArray, (colArray, colIndex) => (
              <StyledTableCell scope="row" key={`cell${colIndex}`}>
                {colArray}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

TableComponent.propTypes = {
  tableHeader: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    )
  ),
};

TableComponent.defaultProps = {
  tableHeader: [],
  tableData: [[]],
};

export default TableComponent;
