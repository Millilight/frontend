import translate from '@/utils/translate';
import {
  Button,
  CircularProgress,
  Box,
  TextField,
  Typography,
} from '@mui/material';
import styles from './AddHeirs.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { useAddHeirMutation, useGetHeirsQuery } from 'generated/graphql';
import Router from 'next/router';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function TrustedPersons() {
  //current step to display the corresponding help :
  // no_user, adding_user, display_code, verified_user
  const [step, setStep] = useState('no_user');
  const [selectedFieldId, setSelectedFieldId] = useState('');
  const [addingUser, setAddingUser] = useState(false);

  //Mutation to add a user as a trusted user
  const [addHeirUser, addHeirUserResponse] = useAddHeirMutation();
  if (addHeirUserResponse.data && !addHeirUserResponse.loading) {
    Router.reload();
  }

  //Query to get all Heir users
  const getHeirsResponse = useGetHeirsQuery();

  // State Variables : updated on events
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  // Check if user has started to write fields, in order to display errors
  // Only if he has already clicked on the corresponding field
  const [isDoneWritingFirstname, setIsDoneWritingFirstname] = useState(false);
  const [isDoneWritingLastname, setIsDoneWritingLastname] = useState(false);
  const [isDoneWritingEmail, setIsDoneWritingEmail] = useState(false);

  // Correctness variables : check if fields are correct
  const isFirstNameValid = !isDoneWritingFirstname || firstname.length > 0;
  const isLastNameValid = !isDoneWritingLastname || lastname.length > 0;
  const isEmailValid = !isDoneWritingEmail || /.+@.+\..+/.test(email);

  function setSelectedField(id: string, state: string) {
    if (state == 'INVITATION_SENT') {
      setSelectedFieldId(id);
      setStep('display_code');
    } else if (state == 'VALIDATED') {
      setSelectedFieldId(id);
      setStep('verified_user');
    } else if (state == 'adding_user') {
      setSelectedFieldId('adding_user');
      setStep('adding_user');
    } else {
      setSelectedFieldId('');
      setStep('no_user');
    }
  }

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
          <ul className={styles.help_add_user_step}>
            <li
              className={
                step == 'adding_user'
                  ? styles.current_step
                  : step == 'display_code' || step == 'verified_user'
                  ? styles.validated
                  : ''
              }
            >
              Invitez votre proche
            </li>
            <li
              className={
                step == 'display_code'
                  ? styles.current_step
                  : step == 'verified_user'
                  ? styles.validated
                  : ''
              }
            >
              Transmettez lui le code de sécurité
            </li>
            <li className={step == 'verified_user' ? styles.current_step : ''}>
              Votre lien de confiance est validé !
            </li>
          </ul>
          <div>
            {step == 'adding_user'
              ? 'Renseignez les volontés de votre proche : Il recevra une invitation par mail pour créer son compte et accéder à vos informations'
              : step == 'display_code'
              ? "Transmettez ce code à votre proche de confiance. Il doit le renseigner dans son compte afin d'avoir accès à vos données. Ce mécanisme permet de s'assurer que la personne qui accède à vos données est bien celle que vous pensez."
              : "Votre proche de confiance a validé son lien avec vous. Il peut désormais accéder à vos informations s'il le juge nécessaire."}
          </div>
        </>
      );
    }
  }

  function displayHeirs() {
    if (getHeirsResponse.loading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      );
    } else if (getHeirsResponse.error) {
      return <div>{'Il semblerait que vous ayiez un problème de réseau'}</div>;
    } else if (
      getHeirsResponse.data &&
      getHeirsResponse.data.user &&
      getHeirsResponse.data.user.heir_users &&
      getHeirsResponse.data.user.heir_users.length > 0
    ) {
      return getHeirsResponse.data.user.heir_users.map((user) => {
        return (
          <div
            className={`${styles.heir_user_container} ${
              selectedFieldId == user._id ? styles.selected : ''
            }`}
            key={user._id}
            onClick={() => setSelectedField(user._id, user.state)}
          >
            <div className={styles.heir_user_subcontainer}>
              <div className={styles.heir_user_info}>
                <div className={styles.heir_info_name}>
                  {user.user_details.firstname +
                    ' ' +
                    user.user_details.lastname}
                </div>
                <div className={styles.heir_info_email}>
                  {user.user_details.email}
                </div>
              </div>
              <div className={styles.heir_user_status}>
                {user.state == 'INVITATION_SENT' ? (
                  <div className={styles.heir_status_icon_waiting}>
                    <span>En attente</span>
                    <WatchLaterIcon />
                  </div>
                ) : (
                  <div className={styles.heir_status_icon_valid}>
                    <span>Lien validé</span>
                    <DoneAllIcon />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.heir_information}>
              {user.state == 'INVITATION_SENT' ? (
                <>
                  Transmettez ce code de façon orale à votre proche, il devra le
                  renseigner pour valider votre lien.
                  <div className={styles.heir_code}>{user.security_code}</div>
                </>
              ) : (
                <>
                  Votre proche de confiance est validé et peut accéder à vos
                  informations en cas de nécessité
                </>
              )}
            </div>
          </div>
        );
      });
    }
  }

  function displayAddHeir() {
    if (addingUser) {
      return (
        <div
          className={`${styles.add_trusted_user_container} ${
            selectedFieldId == 'adding_user' ? styles.selected : ''
          }`}
          onClick={() => setSelectedField('adding_user', 'adding_user')}
        >
          <div
            onClick={() => setAddingUser(false)}
            className={styles.remove_add_user}
          >
            X
          </div>
          <Typography variant="h6">Ajouter un proche</Typography>
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
            disabled={
              !isFirstNameValid ||
              !isLastNameValid ||
              !isEmailValid ||
              addHeirUserResponse.loading
            }
            onClick={() =>
              addHeirUser({
                variables: {
                  firstname: firstname,
                  lastname: lastname,
                  email: email,
                },
              })
            }
          >
            {addHeirUserResponse.error
              ? 'Il semblerait que vous ayez un problème de réseau'
              : addHeirUserResponse.data
              ? 'Invitation envoyée avec succès !'
              : addHeirUserResponse.loading
              ? 'Envoi de la demande en cours...'
              : 'Inviter à devenir votre personne de confiance'}
          </Button>
        </div>
      );
    } else {
      return (
        <>
          <Button variant="contained" onClick={() => setAddingUser(true)}>
            Ajouter
          </Button>
        </>
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
          {displayHeirs()}
          {displayAddHeir()}
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
