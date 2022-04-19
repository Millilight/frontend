import { withApollo } from '@/utils/withApollo';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import LegatorsSafe from '@/components/LegatorsSafe/LegatorsSafe';
import AccountMenu from '@/components/AccountMenu/AccountMenu';

const LegatorsSafePage = () => {
  //To know what to highlight on the menu
  const selectedPage = 'legators_safe';

  return (
    <div className="flex-container">
      <AccountMenu />
      <MenuDrawer selectedPage={selectedPage} />
      <main>
        <LegatorsSafe />
      </main>
    </div>
  );
};

export default withApollo(LegatorsSafePage);
