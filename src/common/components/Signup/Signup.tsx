import { useCreateUserMutation } from 'generated/graphql';
import { TextField, Button } from '@mui/material';
import styles from './Signup.module.css';
import { login_url } from '@/utils/config';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Link from 'next/link';

import translate from '@/utils/translate';

export default function Signup() {
  // Input Variables: updated by user input
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  // State Variables : updated on events
  // Check if user has started to write fields, in order to display errors
  // Only if he has already clicked on the corresponding field
  const [isDoneWritingFirstname, setIsDoneWritingFirstname] = useState(false);
  const [isDoneWritingLastname, setIsDoneWritingLastname] = useState(false);
  const [isDoneWritingEmail, setIsDoneWritingEmail] = useState(false);
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
  const isFirstNameValid = !isDoneWritingFirstname || firstname.length > 0;
  const isLastNameValid = !isDoneWritingLastname || lastname.length > 0;
  const isEmailValid = !isDoneWritingEmail || /.+@.+\..+/.test(email);
  const arePasswordsEquals = !isDoneWritingConfirmPwd || pwd == confirmPwd;

  //Mutation : use the codegen hook: which return a function (createUser),
  //           and the lifecycle of the request
  const [createUser, { data, loading, error }] = useCreateUserMutation();

  // Check if all fields are correct, and send the form to create User
  function sendForm() {
    //Set all forms to written, in order to display the error messages
    setIsDoneWritingFirstname(true);
    setIsDoneWritingLastname(true);
    setIsDoneWritingEmail(true);
    setIsDoneWritingPwd(true);
    setIsDoneWritingConfirmPwd(true);
    if (
      isPasswordValid &&
      isDoneWritingPwd &&
      isFirstNameValid &&
      isDoneWritingFirstname &&
      isLastNameValid &&
      isDoneWritingLastname &&
      isEmailValid &&
      isDoneWritingEmail &&
      arePasswordsEquals &&
      isDoneWritingConfirmPwd
    ) {
      createUser({
        variables: {
          email: email,
          lastname: lastname,
          firstname: firstname,
          password: pwd,
        },
      });
    }
  }

  // Display the conditionnal JSX to show the button, depending on the
  // corectness of the fields
  function displayButton() {
    if (error) {
      if (
        error.graphQLErrors[0].extensions.code == '409' ||
        error.message == 'This email is already registered'
      ) {
        return (
          <Link href={login_url} passHref>
            <Button
              className={styles.inscription_button}
              variant="outlined"
              color="error"
            >
              {translate('signup.error.existing_account')}
            </Button>
          </Link>
        );
      } else {
        return (
          <Button
            className={styles.inscription_button}
            variant="outlined"
            color="error"
          >
            {translate('signin.error')}
          </Button>
        );
      }
    }
    if (data) {
      // TODO : redirect user to his homepage
      return (
        <Button
          className={styles.inscription_button}
          variant="outlined"
          color="success"
        >
          {translate('signup.success')}
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
          disabled={
            loading ||
            !isPasswordValid ||
            !isFirstNameValid ||
            !isLastNameValid ||
            !isEmailValid ||
            !arePasswordsEquals
          }
          onClick={() => sendForm()}
        >
          {loading
            ? translate('common.button.sending')
            : translate('signup.button.signup')}
        </Button>
      </>
    );
  }

  return (
    <form className={styles.form}>
      <TextField
        id="firstname"
        label={translate('signup.label.first_name')}
        variant="standard"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
        onBlur={() => setIsDoneWritingFirstname(true)}
        fullWidth
      />
      {!isFirstNameValid && (
        <span className={styles.invalid}>
          {translate('signup.missing_first_name')}
        </span>
      )}
      <TextField
        id="lastname"
        label={translate('signup.label.last_name')}
        variant="standard"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
        onBlur={() => setIsDoneWritingLastname(true)}
        fullWidth
      />
      {!isLastNameValid && (
        <span className={styles.invalid}>
          {translate('signup.missing_last_name')}
        </span>
      )}
      <TextField
        id="email"
        type="email"
        label={translate('common.label.email')}
        variant="standard"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => setIsDoneWritingEmail(true)}
        fullWidth
        error={!isEmailValid}
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
}
