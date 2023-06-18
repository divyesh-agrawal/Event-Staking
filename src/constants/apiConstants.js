/** URLs to send API Request */
const API_URLS = {
  /** API URL for Authenticating User */
  authenticateUser: '/user',
  /** API URL for Searching Users */
  searchUsers: '/search/users',
  /** API URL for Follow Users */
  followUsers: '/user/following',
  /** API URL for Listed Users */
  listedUsers: '/users',
};

const STATUS_CODES = {
  /** Status Code for Invalid Credentials Error */
  invalidCredentials: 401,
  /** Status Code for Rate Limit Exceeded */
  rateLimitExceeded: 403,
  /** Status Code for Not Found */
  notFound: 404,
};

export { API_URLS, STATUS_CODES };
