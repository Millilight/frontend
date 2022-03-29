import { Typography } from '@mui/material';
// import { PageCountriesComp } from 'generated/page';
import { withApollo } from '@/utils/withApollo';
import { useState } from 'react';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
import Signup from '@/components/Signup/Signup';
import Signin from '@/components/Signin/Signin';

const Inscription = () => {
  const [showSignup, setShowSignup] = useState(true);

  function displayForm() {
    if (showSignup) {
      return (
        <>
          <Typography variant="h4">Inscription</Typography>
          <Typography variant="subtitle1" textAlign={'center'}>
            Inscrivez vous pour créer votre coffre fort
          </Typography>
          <Signup />
          <div
            className="connection-link"
            onClick={() => setShowSignup(!showSignup)}
          >
            Déjà inscrit(e) ? Connectez-vous ici
          </div>
        </>
      );
    } else {
      return (
        <>
          <Typography variant="h4">Connexion</Typography>
          <Typography variant="subtitle1" textAlign={'center'}>
            Connectez-vous pour accéder à vos informations
          </Typography>
          <Signin />
          <div
            className="connection-link"
            onClick={() => setShowSignup(!showSignup)}
          >
            {'Pas encore de compte ? Inscrivez-vous ici'}
          </div>
        </>
      );
    }
  }

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
        <div className="inscription-white-container">{displayForm()}</div>
      </div>
    </div>
  );
};

export default withApollo(Inscription);
