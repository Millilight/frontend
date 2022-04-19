import { withApollo } from '@/utils/withApollo';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import MyAccount from '@/components/MyAccount/MyAccount';
import AccountMenu from '@/components/AccountMenu/AccountMenu';

const MyAccountPage = () => {
  return (
    <div className="">
      <AccountMenu />
      <MenuDrawer selectedPage={''} />
      <main>
        <MyAccount />
      </main>
    </div>
  );
};
export default withApollo(MyAccountPage);
