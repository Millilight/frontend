import { withApollo } from '@/utils/withApollo';
import { Box } from '@mui/material';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import Paperwork from '@/components/Paperwork/Paperwork';

const PaperworkPage = () => {
  //To know what to highlight on the menu
  const selectedPage = 'paperwork';

  return (
    <div className="flex-container">
      <MenuDrawer selectedPage={selectedPage} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Paperwork />
      </Box>
    </div>
  );
};

export default withApollo(PaperworkPage);
