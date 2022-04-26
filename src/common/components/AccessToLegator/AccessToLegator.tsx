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
import {
  dowloadLegatorPaperworkProcedures,
  dowloadLegatorWishes,
} from '@/utils/pdf';
import styles from './AccessToLegator.module.css';
import {
  ConfirmSecurityCodeMutation,
  GetLegatorSensitiveDataProceduresQuery,
  GetLegatorUrgentDataWishesQuery,
  UnlockUrgentDataMutation,
  useConfirmSecurityCodeMutation,
  useGetLegatorSensitiveDataProceduresLazyQuery,
  useGetLegatorUrgentDataWishesLazyQuery,
  useUnlockUrgentDataMutation,
} from 'generated/graphql';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import KeyIcon from '@mui/icons-material/Key';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Router from 'next/router';

import amplitude from 'amplitude-js';

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
    amplitude.getInstance().logEvent('Code Validation Button Clicked');
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

  /*******  Unlock the safe (urgent data)********* */
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

  function displayUnlockUrgentButton() {
    if (dataUnlock && !loadingUnlock && !errorUnlock) {
      const response:
        | UnlockUrgentDataMutation['unlockUrgentData']['success']
        | undefined = dataUnlock?.unlockUrgentData.success;
      if (response === true) {
        Router.reload();
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
          {translate('legators_safe.button.unlock_urgent')}
        </Button>
      </>
    );
  }

  // Conditional display of the warning before unlocking the legator's safe
  function displayWarningUrgent() {
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
            : translate('legators_safe.button.unlock_urgent')}
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
  ] = useGetLegatorUrgentDataWishesLazyQuery();

  function getUrgentData() {
    getUrgentDataQuery();
  }

  function displayGetUrgentDataButton() {
    if (dataGet && !loadingGet) {
      const response:
        | GetLegatorUrgentDataWishesQuery['user']['legators']
        | undefined = dataGet?.user.legators;
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

  /*******  Unlock the safe (sensitive data)********* */
  // Warning before accessing safe
  const [dialogOpenSensitive, setDialogOpenSensitive] = useState(false);

  function displayUnlockSensitiveButton() {
    return (
      <>
        <Button
          onClick={() => setDialogOpenSensitive(true)}
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
          {translate('legators_safe.button.unlock_sensitive')}
        </Button>
      </>
    );
  }

  // Conditional display of the warning before unlocking the legator's safe
  function displayWarningSensitive() {
    const button = (
      <div className={styles.horizontal_container}>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'var(--yellow)',
            '&:hover': {
              bgcolor: 'var(--dark-blue)',
            },
          }}
          onClick={() => setDialogOpenSensitive(false)}
        >
          {translate('legators_safe.button.ok')}
        </Button>
      </div>
    );

    return (
      <Dialog
        fullScreen={fullScreen}
        open={dialogOpenSensitive}
        onClose={() => setDialogOpenSensitive(false)}
      >
        <div className={styles.dialog}>
          <Typography variant="h5">
            {translate('legators_safe.warning2.title')}
          </Typography>
          <Typography variant="body1">
            {translate('legators_safe.warning2.description1', {
              first_name: legator.first_name,
              last_name: legator.last_name,
            })}
            <b>{translate('legators_safe.warning2.description2')}</b>
            <br />
            <br />
            {translate('legators_safe.warning2.description3')}
          </Typography>
          <div>{button}</div>
        </div>
      </Dialog>
    );
  }

  /*******  Access the content (sensitive data) the safe ********* */
  // Query
  const [
    getSensitiveDataQuery,
    {
      data: dataGetSensitive,
      loading: loadingGetSensitive,
      error: errorGetSensitive,
    },
  ] = useGetLegatorSensitiveDataProceduresLazyQuery();

  function getSensitiveData() {
    getSensitiveDataQuery();
  }

  function displayGetSensitiveDataButton() {
    if (dataGetSensitive && !loadingGetSensitive) {
      const response:
        | GetLegatorSensitiveDataProceduresQuery['user']['legators']
        | undefined = dataGetSensitive?.user.legators;
      if (response) {
        // Find the right legator by id
        const retrievedLegator = response.find((l) => {
          return l._id === legator._id;
        });

        // Extract procedures
        let data: SensitiveDataProcedures = {};
        if (retrievedLegator?.sensitive_data?.procedures) {
          data = { ...retrievedLegator?.sensitive_data?.procedures };
          delete data.__typename;
          // Make PDF
          dowloadLegatorPaperworkProcedures(data, legator);
        }
      }
    }

    return (
      <>
        <Button
          onClick={() => getSensitiveData()}
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
          {translate('legators_safe.button.access_sensitive')}
        </Button>
      </>
    );
  }

  /*******  MAIN RETURN ********* */
  return legator.state === 'VALIDATED' ? (
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
      {legator.urgent_data_unlocked ? (
        <div className={styles.horizontal_container_right}>
          {displayGetUrgentDataButton()}
        </div>
      ) : (
        <>
          <div className={styles.horizontal_container_right}>
            {displayUnlockUrgentButton()}
          </div>
          {displayWarningUrgent()}
        </>
      )}
      {legator.sensitive_data_unlocked ? (
        <div className={styles.horizontal_container_right}>
          {displayGetSensitiveDataButton()}
        </div>
      ) : (
        <>
          <div className={styles.horizontal_container_right}>
            {displayUnlockSensitiveButton()}
          </div>
          {displayWarningSensitive()}
        </>
      )}
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
