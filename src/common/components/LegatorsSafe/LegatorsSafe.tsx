import translate from '@/utils/translate';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import {
  GetLegatorUsersDetailsQuery,
  useGetLegatorUsersDetailsQuery,
} from 'generated/graphql';
import AccessToLegator from '../AccessToLegator/AccessToLegator';
import styles from './LegatorsSafe.module.css';

import DoneAllIcon from '@mui/icons-material/DoneAll';
import KeyIcon from '@mui/icons-material/Key';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function LegatorsSafe() {
  //Load legators
  const legatorsList: Legator[] = [];
  const { data, loading, error } = useGetLegatorUsersDetailsQuery();
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return null;
  }
  const legators: GetLegatorUsersDetailsQuery['user']['legators'] | undefined =
    data?.user.legators;
  if (legators) {
    legators.forEach((l) => {
      legatorsList.push({
        _id: l._id,
        first_name: l.user_details.firstname,
        last_name: l.user_details.lastname,
        state: l.state,
        urgent_data_unlocked: l.urgent_data_unlocked,
      });
    });
  }

  return (
    <div className={styles.horizontal_container}>
      <div className={styles.item}>
        <h1 className={`${styles.title} ${'title'}`}>
          <Box
            component="img"
            sx={{
              width: '40px',
            }}
            alt="..."
            src="/key.png"
          />
          {'   '}
          {translate('legators_safe.title')}
        </h1>
        <h2 className={`${styles.subtitle} ${'subtitle'}`}>
          {translate('legators_safe.subtitle')}
        </h2>
        <Stack spacing={2} justifyContent="center" alignItems="center">
          {legatorsList.map((legator: Legator) => (
            <AccessToLegator legator={legator} key={legator._id} />
          ))}
        </Stack>
      </div>
      <div className={styles.item}>
        <div className={styles.help}>
          <b>
            <p>{translate('legators_safe.help.1')}</p>
          </b>
          <p className={styles.yellow}>
            <DoneAllIcon className={styles.icon} />{' '}
            {translate('legators_safe.help.2')}
          </p>
          <b>
            <p>{translate('legators_safe.help.3')}</p>
          </b>
          <p className={styles.yellow}>
            <KeyIcon className={styles.icon} />
            {translate('legators_safe.help.4')}
          </p>
          <p>{translate('legators_safe.help.5')}</p>
          <p className={styles.yellow}>
            <MenuBookIcon className={styles.icon} />
            {translate('legators_safe.help.6')}
          </p>
          <p>{translate('legators_safe.help.7')}</p>
          <p>{translate('legators_safe.help.8')}</p>
        </div>
      </div>
    </div>
  );
}
