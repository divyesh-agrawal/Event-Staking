import React, { Fragment } from 'react';

import { Box, Divider, Typography } from '@mui/material';
import map from 'lodash/map';
import PropTypes from 'prop-types';

import StyledPaper from '@components/DataCards/TopProducts/TopProducts.styles';

/** Component to render Top Products Data Card
 * @param {array} productData - Data to be displayed in Top Products Data Card
 */
const TopProducts = ({ productData }) => (
  <StyledPaper>
    <Typography
      variant="h2"
      sx={{
        mb: 24,
      }}
    >
      Top products
    </Typography>
    {map(productData, ({ id, label, category, sales }, index) => (
      <Fragment key={id}>
        <Box display="flex" flexGrow={0} alignItems="center">
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body2" component="h3">
              {label}
            </Typography>
            <Typography variant="subtitle2" color="primary">
              {category}
            </Typography>
          </Box>
          <Typography variant="body2" component="h4">
            {sales}&nbsp;
          </Typography>
          <Typography variant="body1" component="h4">
            sales
          </Typography>
        </Box>
        {index !== productData.length - 1 && (
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

TopProducts.propTypes = {
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      category: PropTypes.string,
      sales: PropTypes.number,
    })
  ),
};

TopProducts.defaultProps = {
  productData: [],
};

export default TopProducts;
