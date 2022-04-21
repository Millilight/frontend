import { withApollo } from '@/utils/withApollo';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import MyAccount from '@/components/MyAccount/MyAccount';
import { Box } from '@mui/material';

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
