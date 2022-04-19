import { withApollo } from '@/utils/withApollo';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import Medical from '@/components/Medical/Medical';
import AccountMenu from '@/components/AccountMenu/AccountMenu';

const MedicalWishesPage = () => {
  //To know what to highlight on the menu
  const selectedPage = 'medical';

  return (
    <div className="flex-container">
      <AccountMenu />
      <MenuDrawer selectedPage={selectedPage} />
      <main>
        <Medical />
      </main>
    </div>
  );
};

export default withApollo(MedicalWishesPage);
