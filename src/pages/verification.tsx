import VerifyEmail from '@/components/VerifyEmail/VerifyEmail';
// import { PageCountriesComp } from 'generated/page';
import { withApollo } from '@/utils/withApollo';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
import translate from '@/utils/translate';

const Verification = () => {
  return (
    <div>
      <h4 style={{ textAlign: 'center', width: '100%', marginTop: '40vh' }}>
        {translate('signup.enter_code')}
      </h4>
      <div className="container-column-center verification-container">
        <VerifyEmail />
      </div>
      <div className="visual-decoration-container">
        <div className="visual-deco-1"></div>
        <div className="visual-deco-2"></div>
        <div className="visual-deco-3"></div>
        <div className="visual-deco-4"></div>
        <div className="visual-deco-5"></div>
      </div>
    </div>
  );
};

export default withApollo(Verification);
