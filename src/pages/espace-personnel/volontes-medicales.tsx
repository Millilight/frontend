import { withApollo } from '@/utils/withApollo';
import { Box } from '@mui/material';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import Medical from '@/components/Medical/Medical';

const MedicalWishesPage = () => {
  //To know what to highlight on the menu
  const selectedPage = 'medical';

  return (
    <div className="flex-container">
      <MenuDrawer selectedPage={selectedPage} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Medical />
      </Box>
    </div>
  );
};

export default withApollo(MedicalWishesPage);
