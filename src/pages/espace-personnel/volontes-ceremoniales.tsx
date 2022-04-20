import { withApollo } from '@/utils/withApollo';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import Ceremonial from '@/components/Ceremonial/Ceremonial';
const CeremonialWishesPage = () => {
  //To know what to highlight on the menu
  const selectedPage = 'ceremonial';

  return (
    <div className="flex-container">
      <MenuDrawer selectedPage={selectedPage} />
      <main>
        <Ceremonial />
      </main>
    </div>
  );
};

export default withApollo(CeremonialWishesPage);
