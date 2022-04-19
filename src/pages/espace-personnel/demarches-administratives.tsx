import { withApollo } from '@/utils/withApollo';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import Paperwork from '@/components/Paperwork/Paperwork';
import AccountMenu from '@/components/AccountMenu/AccountMenu';

const PaperworkPage = () => {
  //To know what to highlight on the menu
  const selectedPage = 'paperwork';

  return (
    <div className="flex-container">
      <AccountMenu />
      <MenuDrawer selectedPage={selectedPage} />
      <main>
        <Paperwork />
      </main>
    </div>
  );
};

export default withApollo(PaperworkPage);
