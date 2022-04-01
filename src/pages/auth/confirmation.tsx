import { withApollo } from '@/utils/withApollo';
import React from 'react';
import VerifyEmail from '@/components/VerifyEmail/VerifyEmail';

const Confirmation = () => {
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
          <VerifyEmail />
        </div>
      </div>
    </div>
  );
};

export default withApollo(Confirmation);
