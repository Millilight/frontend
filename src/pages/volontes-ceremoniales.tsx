import Head from 'next/head';
import Wishes from '@/components/Wishes/Wishes';
import { Typography, Grid, Box, Paper, CircularProgress } from '@mui/material';
import { PageGetWishesforUserComp } from 'generated/page';
import { withApollo } from '@/utils/withApollo';
import { useState } from 'react';
import {
  useGetWishesforUserQuery,
  GetWishesforUserQuery,
} from 'generated/graphql';
import translate from '@/utils/translate';

const CeremonialWishes: PageGetWishesforUserComp = () => {
  // Help on the right hand side  pannel
  const initial_help = (
    <div>
      <Box
        component="img"
        sx={{
          width: '40%',
          marginX: '30%',
        }}
        alt="..."
        src="/yoga_woman.png"
      />
      <p>{translate('ceremonial.default_help')}</p>
    </div>
  );
  const [help, setHelp] = useState(initial_help);

  function changeHelp(newHelp: JSX.Element) {
    const newHelpTransformed = (
      <div>
        <Box
          component="img"
          sx={{
            width: '20%',
            marginX: '40%',
          }}
          alt="..."
          src="/question.png"
        />
        {newHelp}
      </div>
    );
    setHelp(newHelpTransformed);
  }

  //List of ceremonial wishes with help texts
  const ceremonialWishesList: Wish[] = [
    {
      wishId: 'burial_cremation',
      title: translate('ceremonial.burial_cremation.title'),
      content: '',
      help: (
        <div>
          <h3>{translate('ceremonial.burial_cremation.help.1')}</h3>
          <p>{translate('ceremonial.burial_cremation.help.2')}</p>
        </div>
      ),
      type: 'radio',
      possibleValues: ['Inhumation', 'Crémation'],
    },
    {
      wishId: 'burial_cremation_place',
      title: translate('ceremonial.burial_cremation_place.title'),
      content: '',
      help: (
        <div>
          <h3>{translate('ceremonial.burial_cremation_place.help.1')}</h3>
          <p>{translate('ceremonial.burial_cremation_place.help.2')}</p>
          <ul>
            <li>{translate('ceremonial.burial_cremation_place.help.3')}</li>
            <li>{translate('ceremonial.burial_cremation_place.help.4')}</li>
            <li>{translate('ceremonial.burial_cremation_place.help.5')}</li>
            <li>{translate('ceremonial.burial_cremation_place.help.6')}</li>
          </ul>
          <p>{translate('ceremonial.burial_cremation_place.help.7')}</p>
          <h3>{translate('ceremonial.burial_cremation_place.help.8')}</h3>
          <p>{translate('ceremonial.burial_cremation_place.help.9')}</p>
          <ul>
            <li>{translate('ceremonial.burial_cremation_place.help.10')}</li>
            <li>{translate('ceremonial.burial_cremation_place.help.11')}</li>
            <li>{translate('ceremonial.burial_cremation_place.help.12')}</li>
          </ul>
          <p>{translate('ceremonial.burial_cremation_place.help.13')}</p>
        </div>
      ),
      type: 'textfield',
    },
  ];

  //Update the list of wishes with data (content) retreived from backend
  function updateWishesList(
    savedWishes: GetWishesforUserQuery['user']['wishes']
  ) {
    if (savedWishes !== undefined && savedWishes !== null) {
      for (const [key, value] of Object.entries(savedWishes)) {
        const existingWish = ceremonialWishesList.find(
          (item) => item.wishId === key
        );
        existingWish !== undefined ? (existingWish.content = value) : null;
      }
    }
  }

  //Load ceremonial wishes
  const { data, loading, error } = useGetWishesforUserQuery();
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    console.error(error);
    return null;
  }
  const savedWishes: GetWishesforUserQuery['user']['wishes'] | undefined =
    data?.user.wishes;
  if (!savedWishes) {
    console.error(savedWishes);
    return null;
  }

  updateWishesList(savedWishes);

  return (
    <div>
      <Head>
        <title>{translate('ceremonial.header')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              variant="h3"
              sx={{
                m: 10,
                textAlign: 'center',
              }}
            >
              <Box
                component="img"
                sx={{
                  width: '50px',
                }}
                alt="..."
                src="/candle.png"
              />
              {'   '}
              {translate('ceremonial.title')}
            </Typography>
            <Wishes wishes={ceremonialWishesList} helpCallback={changeHelp} />
          </Grid>
          <Grid item xs={6}>
            <Paper
              sx={{
                m: 10,
                p: 10,
                bgcolor: '#03546D',
                color: 'white',
                textAlign: 'justify',
                borderRadius: '40px',
                position: 'fixed',
                maxHeight: '80%',
                overflow: 'auto',
              }}
            >
              {help}
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default withApollo(CeremonialWishes);
