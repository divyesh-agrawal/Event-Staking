import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import map from 'lodash/map';

import { API_URLS, STATUS_CODES } from '@constants/apiConstants';
import { MESSAGES, SNACKBAR_VARIANTS } from '@constants/commonConstants';

import { SnackbarLoad } from './snackbarSlice';

const { error: errorVariant } = SNACKBAR_VARIANTS;

const {
  login: { invalidCredentials },
} = MESSAGES;

const { invalidCredentials: invalidCredentialsCode } = STATUS_CODES;

const {
  authenticateUser: authenticateUserUrl,
  searchUsers: searchUsersUrl,
  followUsers: followUsersUrl,
  listedUsers: listedUsersUrl,
} = API_URLS;

/** Slice for Retrieving Data from Github API */
const apiSlice = createApi({
  reducerPath: 'authorizeUser',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    authenticateUser: builder.query({
      query: (token) => ({
        url: authenticateUserUrl,
        headers: {
          Authorization: `token ${token}`,
        },
      }),
      transformResponse: ({
        avatar_url: avatar,
        bio,
        blog,
        email,
        followers,
        following,
        html_url: githubUrl,
        id,
        location,
        login: username,
        name,
      }) => ({
        avatar,
        bio,
        blog,
        email,
        followers,
        following,
        githubUrl,
        id,
        location,
        username,
        name,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          if ((error).error.status === invalidCredentialsCode) {
            dispatch(
              SnackbarLoad({
                variant: errorVariant,
                message: invalidCredentials,
              })
            );
          }
        }
      },
    }),
    getUsersBySearch: builder.query({
      query: (searchParam) => ({
        url: searchUsersUrl,
        params: {
          q: searchParam,
        },
      }),
      transformResponse: ({
        total_count,
        incomplete_results,
        items,
      }) => {
        const updatedItems = map(items, (item) => ({
          avatar: item.avatar_url,
          githubUrl: item.html_url,
          id: item.id,
          username: item.login,
        }));
        return {
          total_count,
          incomplete_results,
          items: updatedItems,
        };
      },
    }),
    getSpecificUser: builder.query({
      query: (username) => ({
        url: `${listedUsersUrl}/${username}`,
      }),
      transformResponse: ({
        avatar_url: avatar,
        bio,
        blog,
        email,
        followers,
        following,
        html_url: githubUrl,
        id,
        location,
        login: username,
        name,
      }) => ({
        avatar,
        bio,
        blog,
        email,
        followers,
        following,
        githubUrl,
        id,
        location,
        username,
        name,
      }),
    }),
    getListedUsers: builder.query({
      query: () => ({
        url: listedUsersUrl,
        params: {
          since: Math.random() * 10000,
        },
      }),

      transformResponse: (items) => {
        const updatedItems = map(items, (item) => ({
          avatar: item.avatar_url,
          githubUrl: item.html_url,
          id: item.id,
          username: item.login,
        }));

        return updatedItems;
      },
    }),
    makeFollowRequest: builder.mutation({
      query: ({ username, password }) => ({
        url: `${followUsersUrl}/${username}`,
        headers: {
          Authorization: `token ${password}`,
        },
        method: 'put',
      }),
    }),
  }),
});

export default apiSlice;
export const {
  useLazyAuthenticateUserQuery,
  useLazyGetUsersBySearchQuery,
  useLazyGetSpecificUserQuery,
  useGetListedUsersQuery,
  useMakeFollowRequestMutation,
} = apiSlice;
