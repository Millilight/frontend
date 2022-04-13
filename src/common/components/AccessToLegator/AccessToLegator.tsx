import {
  TextField,
  Button,
  Dialog,
  useTheme,
  useMediaQuery,
  Typography,
} from '@mui/material';

import { useState } from 'react';
import translate from '@/utils/translate';
import { dowloadLegatorWishes } from '@/utils/pdf';
import styles from './AccessToLegator.module.css';
import {
  ConfirmSecurityCodeMutation,
  GetUrgentDataQuery,
  UnlockUrgentDataMutation,
  useConfirmSecurityCodeMutation,
  useGetUrgentDataLazyQuery,
  useUnlockUrgentDataMutation,
} from 'generated/graphql';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import KeyIcon from '@mui/icons-material/Key';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function AccessToLegator(props: { legator: Legator }) {
  const [legator, setLegator] = useState(props.legator);

  /******Code confirmation  ********/
  // Input Variable : code entered by the trusted user
  const [code, setCode] = useState('');
  const [hasUpdatedAfterError, sethasUpdatedAfterError] = useState(false);

  // Mutation
  const [sendCode, { data: dataCode, loading: loadingCode, error: errorCode }] =
    useConfirmSecurityCodeMutation();

  // Handle form submit to validate the code
  function sendCodeForm() {
    sethasUpdatedAfterError(false);
    sendCode({
      variables: { legator_user_id: legator._id, security_code: code },
    });
  }

  // Conditional display of the button
  function displayCodeValidationButton() {
    if (errorCode && !hasUpdatedAfterError) {
      let message = translate('legators_safe.error');
      if (
        (errorCode?.message && errorCode?.message == 'Unauthorized') ||
        errorCode?.message == "Cannot read properties of null (reading 'code')"
      ) {
        message = translate('legators_safe.wrong_code');
      }
      return (
        <Button variant="outlined" color="error">
          {message}
        </Button>
      );
    }

    if (dataCode && !errorCode && !loadingCode) {
      const response:
        | ConfirmSecurityCodeMutation['confirmSecurityCode']['legator_user']['state']
        | undefined = dataCode?.confirmSecurityCode.legator_user.state;
      if (response) {
        setLegator({
          ...legator,
          state: response,
        });
      }
    }

    return (
      <>
        <Button
          variant="contained"
          disabled={loadingCode}
          onClick={() => {
            sendCodeForm();
          }}
          sx={{
            width: '100px',
            mt: '2px',
            bgcolor: 'var(--yellow)',
            '&:hover': {
              bgcolor: 'var(--dark-blue)',
            },
          }}
        >
          <WatchLaterIcon className={styles.icon} />
          {loadingCode
            ? translate('common.button.sending')
            : translate('common.button.validate')}
        </Button>
      </>
    );
  }

  /*******  Unlock the safe ********* */
  // Warning before accessing safe
  const [dialogOpen, setDialogOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Mutation to unlock data if necessary
  const [
    unlockUrgentData,
    { data: dataUnlock, loading: loadingUnlock, error: errorUnlock },
  ] = useUnlockUrgentDataMutation();

  // Unlock the urgent data of the safe
  function unlockSafe() {
    if (!legator.urgent_data_unlocked) {
      unlockUrgentData({
        variables: { legator_user_id: legator._id },
      });
    }
    setDialogOpen(false);
  }

  function displayUnlockButton() {
    if (dataUnlock && !loadingUnlock && !errorUnlock) {
      const response:
        | UnlockUrgentDataMutation['unlockUrgentData']['success']
        | undefined = dataUnlock?.unlockUrgentData.success;
      if (response === true) {
        setLegator({
          ...legator,
          urgent_data_unlocked: true,
        });
      }
    }

    return (
      <>
        <Button
          onClick={() => setDialogOpen(true)}
          sx={{
            color: 'var(--yellow)',
            border: '1px solid var(--yellow)',
            '&:hover': {
              bgcolor: 'var(--dark-blue)',
              color: 'var(--white)',
              border: '1px solid var(--white)',
            },
          }}
          variant="outlined"
        >
          <KeyIcon className={styles.icon} />
          {translate('legators_safe.button.unlock')}
        </Button>
      </>
    );
  }

  // Conditional display of the warning before unlocking the legator's safe
  function displayWarning() {
    const button = (
      <div className={styles.horizontal_container}>
        <Button
          variant="outlined"
          sx={{
            color: 'var(--yellow)',
            border: '1px solid var(--yellow)',
            '&:hover': {
              bgcolor: 'var(--dark-blue)',
              color: 'var(--white)',
              border: '1px solid var(--white)',
            },
          }}
          onClick={() => setDialogOpen(false)}
        >
          {translate('common.button.cancel')}
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'var(--yellow)',
            '&:hover': {
              bgcolor: 'var(--dark-blue)',
            },
          }}
          onClick={() => unlockSafe()}
        >
          {loadingUnlock
            ? translate('common.button.loading')
            : translate('legators_safe.button.unlock')}
        </Button>
      </div>
    );

    return (
      <Dialog
        fullScreen={fullScreen}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <div className={styles.dialog}>
          <Typography variant="h5">
            {translate('legators_safe.warning.title')}
          </Typography>
          <Typography variant="subtitle1">
            {translate('legators_safe.warning.subtitle', {
              first_name: legator.first_name,
              last_name: legator.last_name,
            })}
          </Typography>
          <Typography variant="body1">
            {translate('legators_safe.warning.description')}
          </Typography>
          <div>{button}</div>
        </div>
      </Dialog>
    );
  }

  /*******  Access the content (urgent data) the safe ********* */
  // Query
  const [
    getUrgentDataQuery,
    { data: dataGet, loading: loadingGet, error: errorGet },
  ] = useGetUrgentDataLazyQuery();

  function getUrgentData() {
    getUrgentDataQuery();
  }

  function displayGetUrgentDataButton() {
    if (dataGet && !loadingGet) {
      const response: GetUrgentDataQuery['user']['legator_users'] | undefined =
        dataGet?.user.legator_users;
      if (response) {
        // Find the right legator by id
        const retrievedLegator = response.find((l) => {
          return l._id === legator._id;
        });

        // Extract urgent data wishes
        const data: UrgentDataWishes = {};
        if (retrievedLegator?.urgent_data?.wishes) {
          for (const [key, value] of Object.entries(
            retrievedLegator?.urgent_data?.wishes
          )) {
            data[key as keyof UrgentDataWishes] =
              value !== null ? value : undefined;
          }
          delete data.__typename;

          // Make PDF
          dowloadLegatorWishes(data, legator);
        }
      }
    }

    return (
      <>
        <Button
          onClick={() => getUrgentData()}
          sx={{
            bgcolor: 'var(--yellow)',
            '&:hover': {
              bgcolor: 'var(--dark-blue)',
            },
          }}
          variant="contained"
        >
          {' '}
          <MenuBookIcon className={styles.icon} />
          {translate('legators_safe.button.access')}
        </Button>
      </>
    );
  }

  /*******  MAIN RETURN ********* */
  return legator.state === 'VALIDATED' && !legator.urgent_data_unlocked ? (
    <div className={styles.rounded_container}>
      {/** Already validated but not unlocked*/}
      <div className={styles.horizontal_container}>
        <Typography variant="h5">
          {legator.first_name} {legator.last_name}
        </Typography>
        <div className={styles.status_icon_valid}>
          <span className={styles.status_text}>
            {translate('legators_safe.status.allowed')}
          </span>
          <DoneAllIcon />
        </div>
      </div>
      <div className={styles.horizontal_container_right}>
        {displayUnlockButton()}
      </div>
      {displayWarning()}
    </div>
  ) : legator.state === 'VALIDATED' && legator.urgent_data_unlocked ? (
    <div className={styles.rounded_container}>
      {' '}
      {/** Already validated and unlocked*/}
      <div className={styles.horizontal_container}>
        <Typography variant="h5">
          {props.legator.first_name} {props.legator.last_name}
        </Typography>
        <div className={styles.status_icon_valid}>
          <span className={styles.status_text}>
            {translate('legators_safe.status.allowed')}
          </span>
          <DoneAllIcon />
        </div>
      </div>
      <div className={styles.horizontal_container_right}>
        {displayGetUrgentDataButton()}
      </div>
    </div>
  ) : (
    <div className={styles.rounded_container}>
      {' '}
      {/** Not validated yet */}
      <div className={styles.horizontal_container}>
        <Typography variant="h5">
          {legator.first_name} {legator.last_name}
        </Typography>
        <div className={styles.status_icon_pending}>
          <span className={styles.status_text}>
            {translate('legators_safe.status.pending')}
          </span>
          <WatchLaterIcon />
        </div>
      </div>
      <form className={styles.fullwidth}>
        <Typography
          variant="body1"
          className={styles.horizontal_container_right}
        >
          {translate('legators_safe.label.code', {
            name: legator.first_name,
          })}
        </Typography>{' '}
        <div className={styles.horizontal_container_right}>
          <TextField
            className={styles.code_input}
            id="code"
            type="code"
            variant="standard"
            placeholder="123456"
            value={code}
            onChange={(e) => {
              setCode(e.target.value), sethasUpdatedAfterError(true);
            }}
          />
          {displayCodeValidationButton()}
        </div>
      </form>
    </div>
  );
}
