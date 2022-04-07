import { withApollo } from '@/utils/withApollo';

import { Box } from '@mui/system';

import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import MyAccount from '@/components/MyAccount/MyAccount';

const MyAccountPage = () => {
  return (
    <div className="flex-container">
      <MenuDrawer selectedPage={''} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <MyAccount />
      </Box>
    </div>
  );
};
export default withApollo(MyAccountPage);
