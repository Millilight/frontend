import { withApollo } from '@/utils/withApollo';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import PersonalSpaceHome from '@/components/PersonalSpaceHome/PersonalSpaceHome';
import AccountMenu from '@/components/AccountMenu/AccountMenu';

const PersonalSpace = () => {
  const selectedPage = 'home';
  return (
    <div className="flex-container">
      <AccountMenu />
      <MenuDrawer selectedPage={selectedPage} />
      <main>
        <PersonalSpaceHome />
      </main>
    </div>
  );
};

export default withApollo(PersonalSpace);
