import { useRouter } from 'next/router';
import { useVerifyEmailMutation } from 'generated/graphql';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { login_url, register_url } from '@/utils/config';
import Link from 'next/link';
import DoneIcon from '@mui/icons-material/Done';
import translate from '@/utils/translate';

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
    return (
      <div style={{ textAlign: 'center' }}>
        {translate('verification.ongoing')}
      </div>
    );
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
        <div>{translate('verification.outdated')}</div>
        <Link href={register_url} passHref>
          <Button color={'success'} variant={'outlined'}>
            {translate('common.button.create_account')}
          </Button>
        </Link>
      </div>
    );
  }
  if (data) {
    return (
      <div style={{ textAlign: 'center' }}>
        <DoneIcon color={'success'} style={{ fontSize: '60px' }} />
        <div>{translate('verification.success')}</div>
        <br />
        <Link href={login_url} passHref>
          <Button color={'success'} variant={'outlined'}>
            {translate('common.button.connect')}
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', fontSize: '18px' }}>
      <div>{translate('verification.message_sent')}</div>
      <br />
      <Link href={login_url} passHref>
        <Button color={'success'} variant={'outlined'}>
          {translate('verification.back_to_login')}
        </Button>
      </Link>
    </div>
  );
}
