import translate from '@/utils/translate';
import { useUpdateEmailUserMutation } from 'generated/graphql';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import Link from 'next/link';
import { Button } from '@mui/material';
import { login_url, register_url } from '@/utils/config';

export default function ChangeMail(): JSX.Element {
  const router = useRouter();
  let { token, user_id } = router.query;
  if (token && typeof token != 'string') {
    token = token[0];
  }
  if (user_id && typeof user_id != 'string') {
    user_id = user_id[0];
  }
  const [isRequestSent, setIsRequestSent] = useState(false);

  const [changeMail, { data, loading, error }] = useUpdateEmailUserMutation();

  if (token && user_id && !isRequestSent) {
    console.log(token, user_id);
    setIsRequestSent(true);
    changeMail({ variables: { token: token, user_id: user_id } });
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
          <div>{translate('verification.already_verified')}</div>
          <br />
          <Link href={login_url} passHref>
            <Button color={'success'} variant={'outlined'}>
              {translate('signin.button.signin')}
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
      <div>{translate('changeMail.message.sent')}</div>
      <br />
      <Link href={login_url} passHref>
        <Button color={'success'} variant={'outlined'}>
          {translate('changeMail.back_to_personnal_space')}
        </Button>
      </Link>
    </div>
  );
}
