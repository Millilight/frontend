import { withApollo } from '@/utils/withApollo';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import FreeSpace from '@/components/FreeSpace/FreeSpace';

const FreeSpacePage = () => {
  //To know what to highlight on the menu
  const selectedPage = 'free_space';

  return (
    <div className="flex-container">
      <MenuDrawer selectedPage={selectedPage} />
      <main>
        <FreeSpace />
      </main>
    </div>
  );
};

export default withApollo(FreeSpacePage);
