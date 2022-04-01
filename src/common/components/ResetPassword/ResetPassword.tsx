import { TextField, Button } from '@mui/material';
import styles from '../Signup/Signup.module.css';

import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useCreateUserMutation } from 'generated/graphql';

export default function ResetPassword() {
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

  //Mutation : use the codegen hook: which return a function (createUser),
  //           and the lifecycle of the request
  const [createUser, { data, loading, error }] = useCreateUserMutation();

  // Check if all fields are correct, and send the form to create User
  function sendForm() {
    //Set all forms to written, in order to display the error messages
    setIsDoneWritingPwd(true);
    setIsDoneWritingConfirmPwd(true);
    if (
      isPasswordValid &&
      isDoneWritingPwd &&
      arePasswordsEquals &&
      isDoneWritingConfirmPwd
    ) {
      //   createUser({
      //     variables: {
      //       email: email,
      //       lastname: lastname,
      //       firstname: firstname,
      //       password: pwd,
      //     },
      //   });
    }
  }

  // Display the conditionnal JSX to show the button, depending on the
  // corectness of the fields
  function displayButton() {
    if (error) {
      return (
        <Button
          className={styles.inscription_button}
          variant="outlined"
          color="error"
        >
          {'Erreur de connexion, veuillez réessayer plus tard.'}
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
          {'Votre nouveau mot de passe a bien été pris en compte!'}
        </Button>
      );
    }

    return (
      <>
        <Button
          className={styles.inscription_button}
          variant="contained"
          color="success"
          disabled={loading || !isPasswordValid || !arePasswordsEquals}
          onClick={() => sendForm()}
        >
          {loading ? 'Envoi en cours...' : 'Réinitialiser mon mot de passe'}
        </Button>
      </>
    );
  }

  return (
    <form className={styles.form}>
      <div className={styles.field_container}>
        <TextField
          type={showPassword ? 'text' : 'password'}
          id="password"
          label="Nouveau mot de passe"
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
          Votre mot de passe doit contenir :
          <li className={hasPwdCorrectLength ? styles.valid : styles.invalid}>
            Au moins 8 caractères
          </li>
          <li className={hasPwdLowerLetter ? styles.valid : styles.invalid}>
            Une minuscule
          </li>
          <li className={hasPwdUpperLetter ? styles.valid : styles.invalid}>
            Une majuscule
          </li>
          <li className={hasPwdDigit ? styles.valid : styles.invalid}>
            Un chiffre
          </li>
          <li className={hasPwdSpecialChar ? styles.valid : styles.invalid}>
            Un caractère spécial
          </li>
        </ul>
      ) : (
        <></>
      )}

      <div className={styles.field_container}>
        <TextField
          type={showPassword ? 'text' : 'password'}
          id="confirm-password"
          label="Confirmation de mot de passe"
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
          Les mots de passes ne sont pas équivalents
        </span>
      )}
      {displayButton()}
    </form>
  );
}