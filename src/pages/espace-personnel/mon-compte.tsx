import { withApollo } from '@/utils/withApollo';
import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useGetCurrentUserQuery, GetCurrentUserQuery } from 'generated/graphql';

import MyAccountField from '@/components/MyAccount/MyAccountField';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import MyAccount from '@/components/MyAccount/MyAccount';

const MonCompte = () => {
  return (
    <div className="flex-container">
      <MenuDrawer selectedPage={''} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <MyAccount />
      </Box>
    </div>
  );
};
export default withApollo(MonCompte);
