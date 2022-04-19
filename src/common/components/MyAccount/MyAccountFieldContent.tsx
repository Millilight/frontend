import { Box, Button, CircularProgress, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useUpdateUserMutation } from 'generated/graphql';
import translate from '@/utils/translate';

import styles from './MyAccount.module.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useRouter } from 'next/router';

export default function MyAccountFieldContent(props: {
  myaccountfield: MyAccountField;
}): JSX.Element {
  // Mutation : update using codegen hook
  const [updateUserMutation, { data, loading, error }] =
    useUpdateUserMutation();

  // To display fields in read only or editing
  const [editionMode, setEditionMode] = useState(false);

  //input variable for password
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

  const router = useRouter();

  // Send the submitted wish for firstname and lastname
  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    fieldId: string
  ) {
    event.preventDefault();
    setEditionMode(false);
    const target = new FormData(event.currentTarget);
    updateUserMutation({
      variables: { [fieldId]: target.get('content') },
    });
    if (loading) {
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      );
    }
    if (error) {
      alert(translate('myaccount.error'));
      return null;
    }
    if (data && fieldId === 'email') {
      router.push('/user/changementMail');
    }
  }

  function submitPassword(pwd: string) {
    updateUserMutation({ variables: { password: pwd } });

    if (loading) {
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      );
    }
    if (error) {
      return null;
    }
    if (data) {
      setEditionMode(false);
    }
  }

  switch (props.myaccountfield.type) {
    case 'textfield':
      return (
        <Stack
          spacing={2}
          component="form"
          textAlign="center"
          alignItems="center"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            handleSubmit(e, props.myaccountfield.fieldId);
          }}
        >
          <TextField
            id={props.myaccountfield.title + '_field'}
            defaultValue={props.myaccountfield.content}
            disabled={!editionMode}
            sx={{
              width: '50%',
              textAlign: 'center',
            }}
            required
            multiline
            name="content"
          />

          {editionMode ? (
            <div>
              <Button
                sx={{
                  width: '120px',
                  mr: '3px',
                  bgcolor: 'var(--yellow)',
                  '&:hover': {
                    bgcolor: 'var(--dark-blue)',
                  },
                }}
                variant="contained"
                type="submit"
              >
                {translate('common.button.save')}
              </Button>
              <Button
                sx={{
                  color: 'var(--yellow)',
                  border: '1px solid var(--yellow)',
                  ml: '3px',
                  '&:hover': {
                    bgcolor: 'var(--dark-blue)',
                    color: 'var(--white)',
                    border: '1px solid var(--white)',
                  },
                }}
                variant="outlined"
                onClick={() => setEditionMode(!editionMode)}
              >
                {translate('common.button.cancel')}
              </Button>
            </div>
          ) : (
            <Button
              sx={{
                width: '100px',
                bgcolor: 'var(--yellow)',
                '&:hover': {
                  bgcolor: 'var(--dark-blue)',
                },
              }}
              variant="contained"
              onClick={() => setEditionMode(!editionMode)}
            >
              {translate('common.button.edit')}
            </Button>
          )}
        </Stack>
      );
      break;

    case 'password':
      return (
        <Stack spacing={2} alignItems="center" component="form">
          {!editionMode ? (
            <Button
              sx={{
                bgcolor: 'var(--yellow)',
                '&:hover': {
                  bgcolor: 'var(--dark-blue)',
                },
              }}
              variant="contained"
              onClick={() => setEditionMode(!editionMode)}
            >
              {translate('reset.send.request')}
            </Button>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
              }}
            >
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
                  sx={{ width: '50%' }}
                />

                {isWritingPwd || !isPasswordValid ? (
                  <ul className={styles.password_checking}>
                    {translate('signup.password_help')}
                    <li
                      className={
                        hasPwdCorrectLength ? styles.valid : styles.invalid
                      }
                    >
                      {translate('signup.password_help.length')}
                    </li>
                    <li
                      className={
                        hasPwdLowerLetter ? styles.valid : styles.invalid
                      }
                    >
                      {translate('signup.password_help.min')}
                    </li>
                    <li
                      className={
                        hasPwdUpperLetter ? styles.valid : styles.invalid
                      }
                    >
                      {translate('signup.password_help.maj')}
                    </li>
                    <li className={hasPwdDigit ? styles.valid : styles.invalid}>
                      {translate('signup.password_help.digit')}
                    </li>
                    <li
                      className={
                        hasPwdSpecialChar ? styles.valid : styles.invalid
                      }
                    >
                      {translate('signup.password_help.special_character')}
                    </li>
                  </ul>
                ) : (
                  <></>
                )}

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
                sx={{ width: '50%', mb: '2' }}
              />

              <Button
                sx={{
                  width: '120px',
                  mt: '10px',
                  bgcolor: 'var(--yellow)',
                  '&:hover': {
                    bgcolor: 'var(--dark-blue)',
                  },
                }}
                variant="contained"
                onClick={() => {
                  if (arePasswordsEquals && isPasswordValid) {
                    setEditionMode(!editionMode);
                    submitPassword(pwd);
                  } /*else if (!arePasswordsEquals) {
                    alert(translate('signup.password_help.not_identical'));
                  } else {
                    alert(translate('signup.password_help.full_sentence'));
                  }*/
                }}
              >
                {translate('common.button.save')}
              </Button>
              <Button
                sx={{
                  color: 'var(--yellow)',
                  border: '1px solid var(--yellow)',
                  mt: '5px',
                  '&:hover': {
                    bgcolor: 'var(--dark-blue)',
                    color: 'var(--white)',
                    border: '1px solid var(--white)',
                  },
                }}
                variant="outlined"
                onClick={() => setEditionMode(!editionMode)}
              >
                {translate('common.button.cancel')}
              </Button>
            </div>
          )}
        </Stack>
      );

    default:
      return <div></div>;
  }
}
