import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

/** Component to add a font icon
 * @param {string | number} size - To Set size of Icon
 * @param {string} color - To set color of Icon
 * @param {string} hover - To set color of Icon on hover
 */
const StyledIcon = styled('span', {
  shouldForwardProp: (prop) =>
    prop !== 'color' && prop !== 'size' && prop !== 'hover',
})(
  ({
    theme: {
      typography: { pxToRem },
      palette,
    },
    color,
    size,
    hover,
  }) => {
    const {
      text: { primary: textPrimary },
      success: { main: successMain },
    } = palette;

    return {
      fontSize: typeof size === 'string' ? size : pxToRem(size),
      color: color || textPrimary,
      '&:hover': {
        color: hover || successMain,
      },
    };
  }
);

StyledIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hover: PropTypes.string,
};

StyledIcon.defaultProps = {
  size: 32,
};

export default StyledIcon;
