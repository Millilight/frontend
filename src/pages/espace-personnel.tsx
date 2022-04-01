import useAuth from '@/utils/useAuth';
import { withApollo } from '@/utils/withApollo';
import { Box } from '@mui/material';
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer';
import PersonalSpaceHome from '@/components/PersonalSpaceHome/PersonalSpaceHome';
import React from 'react';
import Ceremonial from '@/components/Ceremonial/Ceremonial';
import Medical from '@/components/Medical/Medical';
import Paperwork from '@/components/Paperwork/Paperwork';
import FreeSpace from '@/components/FreeSpace/FreeSpace';
import TrustedPersons from '@/components/TrustedPersons/TrustedPersons';

const PersonalSpace = () => {
  //Check authentication
  useAuth();

  // To know which page to display
  const [selectedPage, setSelectedPage] = React.useState('home');

  // Display compenent corresponding to the right page
  function displayPage() {
    switch (selectedPage) {
      case 'ceremonial':
        return <Ceremonial />;
      case 'medical':
        return <Medical />;
      case 'paperwork':
        return <Paperwork />;
      case 'free_space':
        return <FreeSpace />;
      case 'trusted_persons':
        return <TrustedPersons />;
      default:
        return <PersonalSpaceHome setSelectedPage={setSelectedPage} />;
    }
  }

  return (
    <div className="flex-container">
      <MenuDrawer
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {displayPage()}
      </Box>
    </div>
  );
};

export default withApollo(PersonalSpace);
