import React, { useEffect } from 'react';

import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import defaultUser from '@assets/images/default-user.jpg';
import StyledLink from '@components/Link';
import Loading from '@components/Loading';
import ROUTE_PATHS from '@constants/routeConstants';
import { BREAKPOINT_NAMES, WEIGHTS } from '@constants/themeConstants';
import {
  useLazyGetSpecificUserQuery,
} from '@redux/slice/apiSlice';

import {
  ImgContainer,
  ProfileBox,
  ResponsiveBox,
} from './Profile.styles';

const { semiBold, bold } = WEIGHTS;

const { md } = BREAKPOINT_NAMES;

const { myProfile: profilePath } = ROUTE_PATHS;

/** Container for showing Profiles */
const ProfileContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  /** Gets Data of Specific User */
  const [getSpecificUserData, { data: specificUserData, isFetching }] =
    useLazyGetSpecificUserQuery();

  const { user } = useSelector((state) => state.auth);

  const {
    breakpoints: { up: breakpointUp },
  } = useTheme();

  const isDesktop = useMediaQuery(breakpointUp(md));

  /** Path of the Route
   * (Path is called here because below useEffect needs path variable)
   */
  const path = location.pathname.slice(1);

  /** Makes an API call to fetch Specific User Data */
  useEffect(() => {
    getSpecificUserData(path);
  }, [path]);

  /** If User is navigated from Account Menu, then redirect to it's username */
  useEffect(() => {
    if (path === profilePath.slice(1)) {
      navigate(`/${user?.username}`);
    }
  }, [path]);

  if (isFetching) {
    return <Loading overlay />;
  }

  return (
    <ProfileBox>
      <ResponsiveBox>
        <ImgContainer>
          <img
            src={(specificUserData?.avatar) || defaultUser}
            alt="Card Thumbnail"
          />
        </ImgContainer>
        <Box>
          <Box
            display="flex"
            alignItems={isDesktop ? 'flex-start' : 'center'}
            flexDirection="column"
            marginBottom={13}
            color="secondary"
          >
            <Typography
              variant="h1"
              fontWeight={bold}
              {...(!isDesktop && { textAlign: 'center' })}
            >
              {specificUserData?.name || specificUserData?.username}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              {...(!isDesktop && { textAlign: 'center' })}
            >
              {specificUserData?.bio || ''}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={isDesktop ? 'row' : 'column'}
            alignItems="center"
            justifyContent={isDesktop ? 'space-between' : 'center'}
            marginBottom={20}
          >
            <Box
              display="flex"
              {...(isDesktop ? { marginRight: 25 } : { marginBottom: 16 })}
            >
              <ResponsiveBox marginRight={25}>
                <Typography variant="body1" fontWeight={semiBold}>
                  {specificUserData?.followers || 0}
                </Typography>
                <Typography
                  variant="subtitle1"
                  textTransform="uppercase"
                  lineHeight={1}
                >
                  &nbsp; Followers
                </Typography>
              </ResponsiveBox>
              <ResponsiveBox display="flex" alignItems="center">
                <Typography variant="body1" fontWeight={semiBold}>
                  {specificUserData?.following || 0}
                </Typography>
                <Typography
                  variant="subtitle1"
                  textTransform="uppercase"
                  lineHeight={1}
                >
                  &nbsp; Following
                </Typography>
              </ResponsiveBox>
            </Box>
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <Box display="flex" alignItems="center" marginRight={10}>
                <FmdGoodIcon fontSize="small" />
                <Typography variant="subtitle1" textTransform="capitalize">
                  &nbsp; {specificUserData?.location || 'Location'}
                </Typography>
              </Box>
              <Box>
                <IconButton
                  component={StyledLink}
                  to={specificUserData?.githubUrl || '#'}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
                {specificUserData?.email && (
                  <IconButton
                    component={StyledLink}
                    to={`mailto:${specificUserData?.email}`}
                  >
                    <EmailIcon />
                  </IconButton>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </ResponsiveBox>
    </ProfileBox>
  );
};

export default ProfileContainer;
