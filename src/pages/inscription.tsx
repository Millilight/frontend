import { Typography } from '@mui/material';
// import { PageCountriesComp } from 'generated/page';
import { withApollo } from '@/utils/withApollo';
// import { useState } from 'react';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
import Signup from '@/components/Signup/Signup';

const ClientSide = () => {
  return (
    <div>
      <div className="visual-decoration-container">
        <div className="visual-deco-1"></div>
        <div className="visual-deco-2"></div>
        <div className="visual-deco-3"></div>
        <div className="visual-deco-4"></div>
        <div className="visual-deco-5"></div>
      </div>
      <div className="container-column-center">
        <div className="inscription-white-container">
          <Typography variant="h3">Inscription</Typography>
          <Typography variant="h5" textAlign={'center'}>
            Inscrivez vous pour créer votre coffre fort
          </Typography>
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default withApollo(ClientSide);
