import { withApollo } from '@/utils/withApollo';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import MyAccount from '@/components/MyAccount/MyAccount';

const MyAccountPage = () => {
  return (
    <div className="flex-container">
      <MenuDrawer selectedPage={''} />
      <main>
        <MyAccount />
      </main>
    </div>
  );
};
export default withApollo(MyAccountPage);
