import { withApollo } from '@/utils/withApollo';
import React from 'react';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
import ResetPassword from '@/components/ResetPassword/ResetPassword';
import { Typography } from '@mui/material';
import translate from '@/utils/translate';
/*
Le mail pour mot de passe oublié contient une url qui renvoit vers 
cette page, permettant à l'utilisateur de renseigner son nouveau mot de passe
*/

const Reinitialisation = () => {
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
            {translate('reset.password')}
          </Typography>
          <Typography variant="subtitle1" textAlign={'center'}>
            {translate('reset.new_password')}
          </Typography>
          <ResetPassword />
        </div>
      </div>
    </div>
  );
};

export default withApollo(Reinitialisation);
