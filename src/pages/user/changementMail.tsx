import React from 'react';

import { withApollo } from '@/utils/withApollo';
import ChangeMail from '@/components/ChangeMail/ChangeMail';
/*
Le lien envoyé par mail pour confirmer l'adresse mail redirige vers cette page
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
