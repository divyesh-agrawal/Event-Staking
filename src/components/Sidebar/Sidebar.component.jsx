import React, { Fragment } from 'react';

import {
  Box,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import map from 'lodash/map';
import values from 'lodash/values';
import PropTypes from 'prop-types';

import StyledLink from '@components/Link';
import NestedListItem from '@components/Sidebar/NestedListItem.component';
import {
  StyledBadge,
  StyledDrawer,
  StyledItemButton,
  StyledNavLink,
} from '@components/Sidebar/Sidebar.styles';
import StyledIcon from '@components/StyledIcon';
import StyledIconButton from '@components/StyledIconButton';
import { LINK_PATHS } from '@constants/routeConstants';
import { BREAKPOINT_NAMES } from '@constants/themeConstants';
import { scrollToTop } from '@utils/commonUtils';

const { md } = BREAKPOINT_NAMES;

/** Main Sidebar Component
 * @param {boolean} isOpen - Shows if hamburger icon is clicked and sidebar is opened
 * @function handleToggle - Function to toggle isOpen on backdrop click
 * @param {array} sidebarLinks - Data of Sidebar links and it's routes
 * @param {array} sidebarIcons - Data of classes of sidebar icons rendered at bottom
 */
const Sidebar = ({ isOpen, handleToggle, sidebarLinks, sidebarIcons }) => {
  const {
    breakpoints: { up: breakpointUp },
  } = useTheme();
  const isDesktop = useMediaQuery(breakpointUp(md));

  return (
    <StyledDrawer
      variant={isDesktop ? 'permanent' : 'temporary'}
      open={isDesktop || isOpen}
      onClose={(_event, triggeringEvent) =>
        triggeringEvent === 'backdropClick' && handleToggle()
      }
    >
      <Toolbar />
      <Box
        sx={{
          overflow: 'auto',
          mt: 8,
          scrollbarGutter: 'stable',
        }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <List disablePadding>
          {map(values(sidebarLinks), (sidebarLinkItems, index) => (
            <Fragment key={sidebarLinkItems[index].link}>
              {map(values(sidebarLinkItems), (linkItems) => {
                const { link, badge, icon } = linkItems;

                return 'subLinks' in linkItems ? (
                  <NestedListItem key={link} linkItems={linkItems} />
                ) : (
                  <StyledItemButton
                    component={StyledNavLink}
                    key={link}
                    to={LINK_PATHS.sidebar[link.toLowerCase()]}
                    onClick={scrollToTop}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      <StyledIcon
                        size={25}
                        color="inherit"
                        className={`icon-${icon}`}
                      />
                    </ListItemIcon>
                    <ListItemText primary={link} />
                    {'badge' in linkItems && (
                      <Box
                        width={35}
                        height={35}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <StyledBadge badgeContent={badge} />
                      </Box>
                    )}
                  </StyledItemButton>
                );
              })}
              {index !== values(sidebarLinks).length - 1 ? (
                <Divider sx={{ my: 8 }} />
              ) : (
                ''
              )}
            </Fragment>
          ))}
        </List>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          mb={24}
          key="icons"
        >
          {map(sidebarIcons, (iconNames) => (
            <StyledIconButton
              onClick={scrollToTop}
              to="#"
              key={iconNames}
              sx={{ marginRight: 29 }}
              component={StyledLink}
            >
              <StyledIcon className={iconNames} size={24} key={iconNames} />
            </StyledIconButton>
          ))}
        </Box>
      </Box>
    </StyledDrawer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  sidebarLinks: PropTypes.shape({
    components: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string,
        icon: PropTypes.string,
        route: PropTypes.string,
      })
    ),
    support: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string,
        icon: PropTypes.string,
        route: PropTypes.string,
      })
    ),
  }).isRequired,
  sidebarIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Sidebar;
