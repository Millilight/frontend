import { useRouter } from 'next/router';
import { useVerifyEmailMutation } from 'generated/graphql';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { login_url, register_url } from '@/utils/config';
import Link from 'next/link';
import DoneIcon from '@mui/icons-material/Done';

export default function VerifyEmail() {
  const router = useRouter();
  let { token, user_id } = router.query;
  if (token && typeof token != 'string') {
    token = token[0];
  }
  if (user_id && typeof user_id != 'string') {
    user_id = user_id[0];
  }
  const [isRequestSent, setIsRequestSent] = useState(false);

  //Mutation : use the codegen hook: which return a function (Login),
  //           and the lifecycle of the request
  const [VerifyEmail, { data, loading, error }] = useVerifyEmailMutation();

  // Check if all fields are correct, and send the form to create User
  if (token && user_id && !isRequestSent) {
    setIsRequestSent(true);
    VerifyEmail({ variables: { token: token, user_id: user_id } });
  }

  if (loading) {
    return <div style={{ textAlign: 'center' }}>{'Vérification en cours'}</div>;
  }

  if (error) {
    if (error.message == 'This mail has already been verified') {
      return (
        <div style={{ textAlign: 'center', fontSize: '22px' }}>
          <DoneIcon color={'success'} style={{ fontSize: '60px' }} />
          <div>{'Votre email a déjà été vérifié !'}</div>
          <br />
          <Link href={login_url} passHref>
            <Button color={'success'} variant={'outlined'}>
              Me connecter
            </Button>
          </Link>
        </div>
      );
    }
    return (
      <div style={{ textAlign: 'center', fontSize: '22px' }}>
        <div>{"Votre compte n'existe plus, merci d'en créer un nouveau"}</div>
        <Link href={register_url} passHref>
          <Button color={'success'} variant={'outlined'}>
            Créer mon compte
          </Button>
        </Link>
      </div>
    );
  }
  if (data) {
    return (
      <div style={{ textAlign: 'center' }}>
        <DoneIcon color={'success'} style={{ fontSize: '60px' }} />
        <div>{'Vérification réussie !'}</div>
        <br />
        <Link href={login_url} passHref>
          <Button color={'success'} variant={'outlined'}>
            Me connecter
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', fontSize: '18px' }}>
      <div>
        {
          'Cliquez sur le lien que vous avez reçu par email pour confirmer votre inscription (pensez à vérifier vos spams)'
        }
      </div>
      <br />
      <Link href={login_url} passHref>
        <Button color={'success'} variant={'outlined'}>
          {"Retourner à l'écran de connexion"}
        </Button>
      </Link>
    </div>
  );
}
