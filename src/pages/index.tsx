import { Typography } from '@mui/material';
// import { PageCountriesComp } from 'generated/page';
import { withApollo } from '@/utils/withApollo';
import { useState } from 'react';
import { useRouter } from 'next/router';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
import Signup from '@/components/Signup/Signup';
import Signin from '@/components/Signin/Signin';
import useAuth from '@/utils/useAuth';
import translate from '@/utils/translate';

const Index = () => {
  useAuth();
  const [showSignup, setShowSignup] = useState(true);
  const router = useRouter();
  const { action } = router.query;

  function displayForm() {
    if (!action || action == 'signup') {
      return (
        <>
          <Typography variant="h4">{translate('signup.title')}</Typography>
          <Typography variant="subtitle1" textAlign={'center'}>
            {translate('signup.description')}
          </Typography>
          <Signup />
          <div
            className="connection-link"
            onClick={() =>
              router.push({
                pathname: '/',
                query: { action: 'signin' },
              })
            }
          >
            {translate('signup.go_to_signin')}
          </div>
        </>
      );
    } else {
      return (
        <>
          <Typography variant="h4">{translate('signin.title')}</Typography>
          <Typography variant="subtitle1" textAlign={'center'}>
            {translate('signin.description')}
          </Typography>
          <Signin />
          <div
            className="connection-link"
            onClick={() =>
              router.push({
                pathname: '/',
                query: { action: 'signup' },
              })
            }
          >
            {translate('signin.go_to_signup')}
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

export default withApollo(Index);
