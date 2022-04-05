import { withApollo } from '@/utils/withApollo';
import { Box } from '@mui/material';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import PersonalSpaceHome from '@/components/PersonalSpaceHome/PersonalSpaceHome';
import AccountMenu from '@/components/AccountMenu/AccountMenu';

const PersonalSpace = () => {
  const selectedPage = 'home';
  return (
    <div className="flex-container">
      <AccountMenu />
      <MenuDrawer selectedPage={selectedPage} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <PersonalSpaceHome />
      </Box>
    </div>
  );
};

export default withApollo(PersonalSpace);
