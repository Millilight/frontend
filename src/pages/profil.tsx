import { withApollo } from '@/utils/withApollo';
import { useState } from 'react';
import useAuth from '@/utils/useAuth';
import AccountMenu from '@/components/AccountMenu/AccountMenu';

const Profil = () => {
  useAuth();
  return (
    <div>
      <AccountMenu />
    </div>
  );
};

export default withApollo(Profil);
