import { useRouter } from 'next/router';
import {
  useVerifyEmailMutation,
  useVerifyEmailWithInvitationMutation,
} from 'generated/graphql';
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { login_url, register_url } from '@/utils/config';
import Link from 'next/link';
import DoneIcon from '@mui/icons-material/Done';
import translate from '@/utils/translate';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import styles from '../Signup/Signup.module.css';

export default function VerifyEmail() {
  const router = useRouter();
  let { token, user_id, fromInvitation } = router.query;
  if (token && typeof token != 'string') {
    token = token[0];
  }
  if (user_id && typeof user_id != 'string') {
    user_id = user_id[0];
  }
  if (fromInvitation && typeof fromInvitation != 'string') {
    fromInvitation = fromInvitation[0];
  }
  const [isRequestSent, setIsRequestSent] = useState(false);

  //Mutation : use the codegen hook: which return a function (Login),
  //           and the lifecycle of the request
  const [verifyEmail, { data, loading, error }] = useVerifyEmailMutation();
  const [verifyEmailWithInvitation, verifyEmailWithInvitationResponse] =
    useVerifyEmailWithInvitationMutation();

  // Input Variables: updated by user input
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  // State Variables : updated on events
  // Check if user has started to write fields, in order to display errors
  // Only if he has already clicked on the corresponding field

  const [isDoneWritingPwd, setIsDoneWritingPwd] = useState(false);
  const [isDoneWritingConfirmPwd, setIsDoneWritingConfirmPwd] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isWritingPwd, setIsWritingPwd] = useState(false);

  // Correctness variables : check if fields are correct
  const isPasswordValid =
    !isDoneWritingPwd ||
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?~!@$%^&*-]).{8,}$/.test(pwd);
  const hasPwdCorrectLength = pwd.length >= 8;
  const hasPwdUpperLetter = /(?=.*[A-Z])/.test(pwd);
  const hasPwdLowerLetter = /(?=.*[a-z])/.test(pwd);
  const hasPwdDigit = /(?=.*[0-9])/.test(pwd);
  const hasPwdSpecialChar = /(?=.*[#?~!@$%^&*-])/.test(pwd);
  const arePasswordsEquals = !isDoneWritingConfirmPwd || pwd == confirmPwd;

  // Check if all fields are correct, and send the form to create User
  function sendForm() {
    //Set all forms to written, in order to display the error messages
    setIsDoneWritingPwd(true);
    setIsDoneWritingConfirmPwd(true);
    if (
      isPasswordValid &&
      isDoneWritingPwd &&
      arePasswordsEquals &&
      isDoneWritingConfirmPwd &&
      token &&
      user_id
    ) {
      if (token && typeof token != 'string') {
        token = token[0];
      }
      if (user_id && typeof user_id != 'string') {
        user_id = user_id[0];
      }
      if (fromInvitation == 'true') {
        verifyEmailWithInvitation({
          variables: {
            password: pwd,
            token: token,
            user_id: user_id,
          },
        });
      } else {
        verifyEmail({
          variables: {
            token: token,
            user_id: user_id,
          },
        });
      }
    }
  }

  // Display the conditionnal JSX to show the button, depending on the
  // corectness of the fields
  function displayButton() {
    if (error || verifyEmailWithInvitationResponse.error) {
      return (
        <Button
          className={styles.inscription_button}
          variant="outlined"
          color="error"
        >
          {translate('signup.error')}
        </Button>
      );
    }
    if (!user_id || !token) {
      return (
        <Button
          className={styles.inscription_button}
          variant="outlined"
          color="error"
          disabled
        >
          {translate('reset.invalid')}
        </Button>
      );
    }

    if (data || verifyEmailWithInvitationResponse.data) {
      // TODO : redirect user to his homepage
      return (
        <Link href={login_url} passHref>
          <Button
            className={styles.inscription_button}
            variant="outlined"
            color="success"
          >
            {translate('reset.validation')}
          </Button>
        </Link>
      );
    }

    return (
      <>
        <Button
          className={styles.inscription_button}
          variant="contained"
          color="success"
          disabled={
            loading ||
            verifyEmailWithInvitationResponse.loading ||
            !isPasswordValid ||
            !arePasswordsEquals
          }
          onClick={() => sendForm()}
        >
          {loading || verifyEmailWithInvitationResponse.loading
            ? translate('common.button.sending')
            : translate('reset.send.request')}
        </Button>
      </>
    );
  }
  if (fromInvitation == 'true') {
    return (
      <form className={styles.form}>
        <Typography variant="h5">{translate('verify_email.title')}</Typography>
        <div className={styles.field_container}>
          <TextField
            type={showPassword ? 'text' : 'password'}
            id="password"
            label={translate('signup.new_password')}
            variant="standard"
            value={pwd}
            onClick={() => setIsWritingPwd(true)}
            onBlur={() => {
              setIsDoneWritingPwd(true), setIsWritingPwd(false);
            }}
            onChange={(e) => setPwd(e.target.value)}
            error={!isPasswordValid}
            fullWidth
          />
          <div
            className={styles.visibility_button}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <div className={styles.visibility}>
                <VisibilityOff />
              </div>
            ) : (
              <div className={styles.visibility}>
                <Visibility />
              </div>
            )}
          </div>
        </div>
        {isWritingPwd || !isPasswordValid ? (
          <ul className={styles.password_checking}>
            {translate('signup.password_help')}
            <li className={hasPwdCorrectLength ? styles.valid : styles.invalid}>
              {translate('signup.password_help.length')}
            </li>
            <li className={hasPwdLowerLetter ? styles.valid : styles.invalid}>
              {translate('signup.password_help.min')}
            </li>
            <li className={hasPwdUpperLetter ? styles.valid : styles.invalid}>
              {translate('signup.password_help.maj')}
            </li>
            <li className={hasPwdDigit ? styles.valid : styles.invalid}>
              {translate('signup.password_help.digit')}
            </li>
            <li className={hasPwdSpecialChar ? styles.valid : styles.invalid}>
              {translate('signup.password_help.special_character')}
            </li>
          </ul>
        ) : (
          <></>
        )}

        <div className={styles.field_container}>
          <TextField
            type={showPassword ? 'text' : 'password'}
            id="confirm-password"
            label={translate('signup.label.password_confirmation')}
            variant="standard"
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.target.value)}
            onBlur={() => {
              setIsDoneWritingConfirmPwd(true);
            }}
            error={!arePasswordsEquals}
            fullWidth
          />
          <div
            className={styles.visibility_button}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <div className={styles.visibility}>
                <VisibilityOff />
              </div>
            ) : (
              <div className={styles.visibility}>
                <Visibility />
              </div>
            )}
          </div>
        </div>
        {!arePasswordsEquals && (
          <span className={styles.invalid}>
            {translate('signup.password_help.not_identical')}
          </span>
        )}
        {displayButton()}
      </form>
    );

    //IF ONLY VERFYING EMAIL, NOT RESETING PASSWORD
  } else {
    // Check if all fields are correct, and send the form to create User
    if (token && user_id && !isRequestSent) {
      setIsRequestSent(true);
      verifyEmail({ variables: { token: token, user_id: user_id } });
    }

    if (loading) {
      return (
        <div style={{ textAlign: 'center' }}>
          {translate('verification.ongoing')}
        </div>
      );
    }

    if (error || (data && !data.verifyEmail?.success)) {
      if (error && error.message == 'This mail has already been verified') {
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
    if (data && data.verifyEmail?.success) {
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
}
