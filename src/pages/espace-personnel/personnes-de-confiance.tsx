import { withApollo } from '@/utils/withApollo';
import { Box } from '@mui/material';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import AddHeirs from '@/components/addHeirs/AddHeirs';
import AccountMenu from '@/components/AccountMenu/AccountMenu';

const AddHeirsPage = () => {
  //To know what to highlight on the menu
  const selectedPage = 'trusted_persons';

  return (
    <div className="flex-container">
      <AccountMenu />
      <MenuDrawer selectedPage={selectedPage} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <AddHeirs />
      </Box>
    </div>
  );
};

export default withApollo(AddHeirsPage);
