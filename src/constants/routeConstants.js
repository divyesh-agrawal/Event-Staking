/** Object of all the redirection paths in assignment */
const ROUTE_PATHS = {
  root: '/',
  login: '/login',
  home: '/home',
  profile: '/:username',
  myProfile: '/profile',
  logout: '/logout',
};

/** Object of all the redirection links in assignment */
const LINK_PATHS = {
  root: '/',
  products: 'products',
  sidebar: {
    overview: '/overview',
    pages: ['/home', '/about', '/error'],
    sales: ['/product-list', '/billing', '/invoice'],
    messages: '/messages',
    authentication: ['/login', '/signup'],
    docs: '/docs',
    components: '/components',
    help: '/help',
  },
};

export default ROUTE_PATHS;
export {LINK_PATHS};
