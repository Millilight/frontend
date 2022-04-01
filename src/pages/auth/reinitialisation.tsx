// import { PageCountriesComp } from 'generated/page';
import { withApollo } from '@/utils/withApollo';
import React from 'react';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
import ResetPassword from '@/components/ResetPassword/ResetPassword';
import { Typography } from '@mui/material';

const Verification = () => {
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
          <Typography variant="h4" style={{ textAlign: 'center' }}>
            Récupération de compte
          </Typography>
          <Typography variant="subtitle1" textAlign={'center'}>
            Choisissez un nouveau mot de passe:
          </Typography>
          <ResetPassword />
        </div>
      </div>
    </div>
  );
};

export default withApollo(Verification);
