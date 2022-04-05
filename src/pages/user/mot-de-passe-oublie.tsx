// import { PageCountriesComp } from 'generated/page';
import { withApollo } from '@/utils/withApollo';

// import { Visibility, VisibilityOff } from '@mui/icons-material';
import AskResetPassword from '@/components/AskResetPassword/AskResetPassword';
import { Typography } from '@mui/material';
import translate from '@/utils/translate';
import Link from 'next/link';
import { login_url } from '@/utils/config';

/*
La page qui s'affiche quand l'utilisateur clique sur 'mot de passe oublié'
*/

const MotDePasseOublie = () => {
  return (
    <div>
      <div className="visual-decoration-container">
        <div className="visual-deco-1"></div>
        <div className="visual-deco-2"></div>
        <div className="visual-deco-3"></div>
        <div className="visual-deco-4"></div>
        <div className="visual-deco-5"></div>
      </div>
      <Link href={login_url} passHref>
        <div className="back-button">
          {'< '}
          {translate('signin.title')}
        </div>
      </Link>
      <div className="container-column-center">
        <div className="inscription-white-container">
          <Typography variant="h4" textAlign={'center'}>
            {translate('reset.title')}
          </Typography>
          <AskResetPassword />
        </div>
      </div>
    </div>
  );
};

export default withApollo(MotDePasseOublie);
