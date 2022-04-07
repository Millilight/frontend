import { Box, CircularProgress, Typography } from '@mui/material';
import { GetCurrentUserQuery, useGetCurrentUserQuery } from 'generated/graphql';
import MyAccountField from './MyAccountField';
import translate from '@/utils/translate';

export default function MyAccount() {
  const allaccountfields: MyAccountField[] = [
    {
      fieldId: 'firstname',
      title: translate('myaccount.firstname'),
      content: '',
      type: 'textfield',
    },
    {
      fieldId: 'lastname',
      title: translate('myaccount.lastname'),
      content: '',
      type: 'textfield',
    },
    {
      fieldId: 'email',
      title: translate('myaccount.mail'),
      content: '',
      type: 'textfield',
    },
    {
      fieldId: 'password',
      title: translate('signup.label.password'),
      content: '',
      type: 'password',
    },
  ];

  function updateSavedInfos(savedInfos: GetCurrentUserQuery['user']) {
    if (savedInfos !== undefined && savedInfos !== null) {
      for (const [key, value] of Object.entries(savedInfos)) {
        const existingInfo = allaccountfields.find(
          (item) => item.fieldId === key
        );
        existingInfo !== undefined ? (existingInfo.content = value) : null;
      }
    }
  }

  const { data, loading, error } = useGetCurrentUserQuery();
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
  const savedInfos: GetCurrentUserQuery['user'] | undefined = data?.user;
  if (!savedInfos) {
    return null;
  }

  updateSavedInfos(savedInfos);

  return (
    <div>
      <main>
        <Typography
          variant="h4"
          sx={{
            m: 2,
            textAlign: 'center',
          }}
        >
          {translate('myaccount.title')}
        </Typography>
        <MyAccountField myaccountfields={allaccountfields} />
      </main>
    </div>
  );
}
