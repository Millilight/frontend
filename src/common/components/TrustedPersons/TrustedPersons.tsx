import translate from '@/utils/translate';
import { Button, TextField, Typography } from '@mui/material';
import styles from './TrustedPersons.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function TrustedPersons() {
  //current step to display the corresponding help :
  // no_user, adding_user, display_code, verified_user
  const [step, setStep] = useState('no_user');

  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  // State Variables : updated on events
  // Check if user has started to write fields, in order to display errors
  // Only if he has already clicked on the corresponding field
  const [isDoneWritingFirstname, setIsDoneWritingFirstname] = useState(false);
  const [isDoneWritingLastname, setIsDoneWritingLastname] = useState(false);
  const [isDoneWritingEmail, setIsDoneWritingEmail] = useState(false);

  // Correctness variables : check if fields are correct
  const isFirstNameValid = !isDoneWritingFirstname || firstname.length > 0;
  const isLastNameValid = !isDoneWritingLastname || lastname.length > 0;
  const isEmailValid = !isDoneWritingEmail || /.+@.+\..+/.test(email);

  function displayHelpText() {
    if (step == 'no_user') {
      return (
        <>
          {' '}
          <p>
            {`Les personnes de confiance sont les proches qui auront accès à
        votre coffre-fort en cas de nécessité. Nous vous invitons à
        renseigner plusieurs personnes de confiance afin d’être certain
        que vos données soient récupérées.`}
          </p>
          <p>
            {`Une fois renseigné, votre proche recevra un mail l'invitant à
        créer son compte. Vous devrez lui transmettre un code de vérification 
        lui permettant d'accéder à vos informations`}
          </p>
        </>
      );
    } else if (
      step == 'adding_user' ||
      step == 'display_code' ||
      step == 'verified_user'
    ) {
      return (
        <>
          <div
            className={`${styles.help_text_container}
            ${step == 'adding_user' ? styles.current_step : ''}
          `}
          >
            <div className={styles.help_text_step}>
              <span>{step == 'adding_user' ? '→ ' : '✓'}</span>
              {`Ajouter votre proche`}
            </div>
            <div className={styles.help_text_substep}>
              {
                "Votre proche recevra un mail l'invitant à devenir personne de confiance."
              }
            </div>
          </div>
          <div
            className={`${styles.help_text_container}
              ${step == 'display_code' ? styles.current_step : ''}
            `}
          >
            <div className={styles.help_text_step}>
              <span>
                {step == 'display_code'
                  ? '→ '
                  : step == 'verified_user'
                  ? '✓'
                  : ''}
              </span>
              {`Code de confirmation`}
            </div>
            <div className={styles.help_text_substep}>
              {
                'Transmettez-lui le code de confirmation pour valider votre lien'
              }
            </div>
          </div>
          <div
            className={`${styles.help_text_container}
              ${step == 'verified_user' ? styles.current_step : ''}
            `}
          >
            <div className={styles.help_text_step}>
              <span>{step == 'verified_user' ? '✓  ' : ''}</span>
              {`Personne de confiance confirmée`}
            </div>
            <div className={styles.help_text_substep}>
              {
                'Votre proche peut désormais accéder à vos informations si nécessaire'
              }
            </div>
          </div>
        </>
      );
    }
  }

  function displayTrustedPerson() {
    if (step == 'no_user') {
      return (
        <>
          <Button variant="contained" onClick={() => setStep('adding_user')}>
            Ajouter
          </Button>
        </>
      );
    } else if (step == 'adding_user') {
      return (
        <div className={styles.add_trusted_user_container}>
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

          <Button
            className={styles.inscription_button}
            variant="contained"
            color="success"
            style={{ marginTop: '20px' }}
            disabled={!isFirstNameValid || !isLastNameValid || !isEmailValid}
          >
            {'Inviter à devenir personne de confiance'}
          </Button>
        </div>
      );
    }
  }

  return (
    <div className="personnal-space-main-container">
      <div className="personnal-space-content-container">
        <Typography variant="h4">{translate('trustedperson.title')}</Typography>
        <Typography variant="h5">
          {translate('trustedperson.subtitle')}
        </Typography>
        <div className="personnal-space-content-main">
          {displayTrustedPerson()}
        </div>
      </div>
      <div className="personnal-space-help-container">
        <div className="personnal-space-help-wrapper">
          <Image
            className="personnal-space-help-image"
            src="/trusted_persons.png"
            alt=""
            width={'160px'}
            height={'160px'}
          />
          <div className="personnal-space-help-text">{displayHelpText()}</div>
        </div>
      </div>
    </div>
  );
}
