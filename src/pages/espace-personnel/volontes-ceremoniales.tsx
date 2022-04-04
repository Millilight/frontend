import { withApollo } from '@/utils/withApollo';
import { Box } from '@mui/material';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import Ceremonial from '@/components/Ceremonial/Ceremonial';

const CeremonialWishesPage = () => {
  //To know what to highlight on the menu
  const selectedPage = 'ceremonial';

  return (
    <div className="flex-container">
      <MenuDrawer selectedPage={selectedPage} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Ceremonial />
      </Box>
    </div>
  );
};

export default withApollo(CeremonialWishesPage);
