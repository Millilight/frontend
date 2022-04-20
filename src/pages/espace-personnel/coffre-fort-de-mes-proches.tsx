import { withApollo } from '@/utils/withApollo';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import LegatorsSafe from '@/components/LegatorsSafe/LegatorsSafe';

const LegatorsSafePage = () => {
  //To know what to highlight on the menu
  const selectedPage = 'legators_safe';

  return (
    <div className="flex-container">
      <MenuDrawer selectedPage={selectedPage} />
      <main>
        <LegatorsSafe />
      </main>
    </div>
  );
};

export default withApollo(LegatorsSafePage);
