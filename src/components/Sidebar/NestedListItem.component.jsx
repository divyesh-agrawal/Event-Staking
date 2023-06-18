import React, { Fragment, useState } from 'react';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItemIcon, ListItemText } from '@mui/material';
import map from 'lodash/map';
import PropTypes from 'prop-types';

import {
  StyledItemButton,
  StyledNavLink,
} from '@components/Sidebar/Sidebar.styles';
import StyledIcon from '@components/StyledIcon';
import { LINK_PATHS } from '@constants/routeConstants';
import { scrollToTop } from '@utils/commonUtils';

/** Component which renders nested list items in Sidebar
 * @param {object} linkItems - Name of Link and SubLinks Data of list item
 */
const NestedListItem = ({ linkItems }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((oldOpen) => !oldOpen);
  };

  const { link, icon, subLinks } = linkItems;

  return (
    <Fragment key={link}>
      <StyledItemButton key={link} onClick={handleClick} open={open}>
        <ListItemIcon>
          <StyledIcon size={25} className={`icon-${icon}`} />
        </ListItemIcon>
        <ListItemText primary={link} />
        {open ? (
          <ExpandLess fontSize="large" />
        ) : (
          <ExpandMore fontSize="large" />
        )}
      </StyledItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List sx={{ mt: 5 }} component="div" disablePadding>
          {map(subLinks, (nestedDropDown, index) => (
            <StyledNavLink
              to={LINK_PATHS.sidebar[link.toLowerCase()][index]}
              key={nestedDropDown}
              onClick={scrollToTop}
            >
              <StyledItemButton
                sx={{
                  pl: 32,
                  py: 9,
                  my: 3,
                }}
                key={nestedDropDown}
              >
                <ListItemText
                  className="nestedList-Text"
                  primary={nestedDropDown}
                />
              </StyledItemButton>
            </StyledNavLink>
          ))}
        </List>
      </Collapse>
    </Fragment>
  );
};

NestedListItem.propTypes = {
  linkItems: PropTypes.shape({
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    subLinks: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default NestedListItem;
