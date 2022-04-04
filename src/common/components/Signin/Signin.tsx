import { useLoginMutation } from 'generated/graphql';
import { TextField, Button } from '@mui/material';
import styles from '../Signup/Signup.module.css';
import Router from 'next/router';

import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { setCookies } from 'cookies-next';
import translate from '@/utils/translate';
import { ask_reset_password_url, home_url } from '@/utils/config';
import Link from 'next/link';

function Authenticate(token: string) {
  localStorage.setItem('token', token);
  setCookies('jwtoken', token);
  Router.push(home_url);
}

export default function Signin() {
  // Input Variables: updated by user input
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  //Mutation : use the codegen hook: which return a function (Login),
  //           and the lifecycle of the request
  const [Login, { data, loading, error }] = useLoginMutation();

  const [isDoneWritingEmail, setIsDoneWritingEmail] = useState(false);
  const isEmailValid = !isDoneWritingEmail || /.+@.+\..+/.test(email);
  const [hasUpdatedAfterError, sethasUpdatedAfterError] = useState(false);

  // Check if all fields are correct, and send the form to create User
  function sendForm() {
    //Set all forms to written, in order to display the error messages
    sethasUpdatedAfterError(false);
    Login({
      variables: { email: email, password: pwd },
    });
  }
  if (data && !loading && !error) {
    Authenticate(data.login.access_token);
  }

  // Display the conditionnal JSX to show the button, depending on the
  // corectness of the fields
  function displayButton() {
    if (error && !hasUpdatedAfterError) {
      let message = translate('signin.error');
      if (
        error.graphQLErrors[0].extensions.code == 'UNAUTHENTICATED' ||
        error.message == 'Unauthorized' ||
        error.message == "Cannot read properties of null (reading 'password')"
      ) {
        message = translate('signin.wrong_password');
      }
      return (
        <Button
          className={styles.inscription_button}
          variant="outlined"
          color="error"
        >
          {message}
        </Button>
      );
    }
    if (data) {
      // TODO : redirect user to his homepage
      return (
        <Button
          className={styles.inscription_button}
          variant="outlined"
          color="success"
        >
          {translate('signin.success')}
        </Button>
      );
    }

    return (
      <>
        <Button
          className={styles.inscription_button}
          variant="contained"
          color="success"
          style={{ marginTop: '20px' }}
          disabled={loading}
          onClick={() => {
            sendForm();
          }}
        >
          {loading
            ? translate('common.button.sending')
            : translate('signin.button.signin')}
        </Button>
      </>
    );
  }

  return (
    <form className={styles.form}>
      <TextField
        id="email"
        type="email"
        label={translate('common.label.email')}
        variant="standard"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value), sethasUpdatedAfterError(true);
        }}
        onBlur={() => setIsDoneWritingEmail(true)}
        fullWidth
      />

      {!isEmailValid && (
        <span className={styles.invalid}>
          {translate('common.invalid_email')}
        </span>
      )}
      <div className={styles.field_container}>
        <TextField
          type={showPassword ? 'text' : 'password'}
          id="password"
          label={translate('common.label.password')}
          variant="standard"
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value), sethasUpdatedAfterError(true);
          }}
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
      <Link href={ask_reset_password_url} passHref>
        <span className={styles.forgot_password}>
          {translate('signin.forgot_password')}
        </span>
      </Link>
      {displayButton()}
    </form>
  );
}
