import { withApollo } from '@/utils/withApollo';
import { Box } from '@mui/material';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import TrustedPersons from '@/components/TrustedPersons/TrustedPersons';

const TrustedPersonsPage = () => {
  //To know what to highlight on the menu
  const selectedPage = 'trusted_persons';

  return (
    <div className="flex-container">
      <MenuDrawer selectedPage={selectedPage} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <TrustedPersons />
      </Box>
    </div>
  );
};

export default withApollo(TrustedPersonsPage);
