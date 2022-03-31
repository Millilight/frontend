import jwt from 'jsonwebtoken';
import Router from 'next/router';
// import { withApollo } from './withApollo';
import { useEffect } from 'react';

export default function useAuth() {
  useEffect(() => {
    let isExpired = true;
    // Perform localStorage action
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt.decode(token, { complete: true });
      const dateNow = new Date();
      if (
        decodedToken &&
        decodedToken.payload &&
        typeof decodedToken.payload != 'string' &&
        decodedToken.payload.exp &&
        decodedToken.payload.exp >= dateNow.getTime() / 1000
      ) {
        isExpired = false;
      }
    }
    if (isExpired === true && Router.pathname != '/') {
      Router.push(`/`); // redirection vers la page login
    }
    if (isExpired === false && Router.pathname == '/') {
      Router.push(`/volontes-ceremoniales`); // redirection vers la page login
    }
  }, []);
}
