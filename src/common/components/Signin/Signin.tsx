import { useLoginMutation } from 'generated/graphql';
import { TextField, Button } from '@mui/material';
import styles from '../Signup/Signup.module.css';
import Router from 'next/router';

import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Authenticate(token: string) {
  localStorage.setItem('token', token);
  Router.push('/volontes-ceremoniales');
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

  console.log(error);
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
      let message = 'Erreur de connexion, veuillez réessayer plus tard.';
      if (
        error.graphQLErrors[0].extensions.code == 'UNAUTHENTICATED' ||
        error.message == 'Unauthorized' ||
        error.message == "Cannot read properties of null (reading 'password')"
      ) {
        message = 'Adresse mail ou mot de passe incorrect, veuillez réessayer';
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
          {'Connexion réussie!'}
        </Button>
      );
    }

    return (
      <>
        <Button
          className={styles.inscription_button}
          variant="contained"
          color="success"
          disabled={loading}
          onClick={() => {
            sendForm();
          }}
        >
          {loading ? 'Envoi en cours...' : 'Me connecter'}
        </Button>
      </>
    );
  }

  return (
    <form className={styles.form}>
      <TextField
        id="email"
        type="email"
        label="E-mail"
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
          {"L'adresse email n'est pas valide"}
        </span>
      )}
      <div className={styles.field_container}>
        <TextField
          type={showPassword ? 'text' : 'password'}
          id="password"
          label="Mot de passe"
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
      {displayButton()}
    </form>
  );
}
