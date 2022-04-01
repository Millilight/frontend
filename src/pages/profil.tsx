import { withApollo } from '@/utils/withApollo';
import { useState } from 'react';
import AccountMenu from '@/components/AccountMenu/AccountMenu';

const Profil = () => {
  return (
    <div>
      <AccountMenu />
    </div>
  );
};

export default withApollo(Profil);
