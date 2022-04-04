import { withApollo } from '@/utils/withApollo';
import { Box } from '@mui/material';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import FreeSpace from '@/components/FreeSpace/FreeSpace';

const FreeSpacePage = () => {
  //To know what to highlight on the menu
  const selectedPage = 'free_space';

  return (
    <div className="flex-container">
      <MenuDrawer selectedPage={selectedPage} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <FreeSpace />
      </Box>
    </div>
  );
};

export default withApollo(FreeSpacePage);
