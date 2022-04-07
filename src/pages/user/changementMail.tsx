import React from 'react';

import { withApollo } from '@/utils/withApollo';
import ChangeMail from '@/components/ChangeMail/ChangeMail';
/*
User will be redirected to with page by clicking on the link sent by mail
*/

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
          <ChangeMail />
        </div>
      </div>
    </div>
  );
};

export default withApollo(Confirmation);
