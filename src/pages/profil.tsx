import { withApollo } from '@/utils/withApollo';
import AccountMenu from '@/components/AccountMenu/AccountMenu';

const Profil = () => {
  return (
    <div>
      <AccountMenu />
    </div>
  );
};

export default withApollo(Profil);
