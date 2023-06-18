import React from 'react';

import ProfileContainer from '@containers/ProfileContainer';
import Layout from '@src/layouts/BaseLayout';

const ProfilePage = () => (
  <Layout showHeader>
    <ProfileContainer />
  </Layout>
);

export default ProfilePage;
