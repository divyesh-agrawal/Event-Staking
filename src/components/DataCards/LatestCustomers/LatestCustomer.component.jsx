import React, { Fragment } from 'react';

import { Avatar, Box, Divider, Typography } from '@mui/material';
import map from 'lodash/map';
import PropTypes from 'prop-types';

import StyledPaper from '@components/DataCards/LatestCustomers/LatestCustomers.styles';

/** Component to render Latest Customers Data Card
 * @param {array} customerData - Data to be displayed in Data Card
 */
const LatestCustomers = ({ customerData }) => (
  <StyledPaper>
    <Typography variant="h2" mb={24}>
      Latest Customers
    </Typography>
    {map(customerData, ({ id, name, image, email, purchaseCost }, index) => (
      <Fragment key={id}>
        <Box display="flex" minWidth={240} flexGrow={0} alignItems="center">
          <Avatar src={image} sx={{ height: 32, width: 32 }} />
          <Box flexGrow={1} ml={8}>
            <Typography variant="body2" component="h3">
              {name}
            </Typography>
            <Typography variant="subtitle2" color="primary">
              {email}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            component="h4"
          >{`$${purchaseCost}`}</Typography>
        </Box>
        {index !== customerData.length - 1 && (
          <Divider
            sx={{
              marginBlock: 8,
            }}
          />
        )}
      </Fragment>
    ))}
  </StyledPaper>
);

LatestCustomers.propTypes = {
  customerData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      purchaseCost: PropTypes.number,
      image: PropTypes.string,
    })
  ),
};

LatestCustomers.defaultProps = {
  customerData: [],
};

export default LatestCustomers;
