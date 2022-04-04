import Wishes from '@/components/Wishes/Wishes';
import { Typography, Grid, Box, Paper, CircularProgress } from '@mui/material';
import { useState } from 'react';
import {
  useGetWishesforUserQuery,
  GetWishesforUserQuery,
} from 'generated/graphql';
import AccountMenu from '@/components/AccountMenu/AccountMenu';
import translate from '@/utils/translate';

export default function Ceremonial() {
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

  function changeHelp(title: JSX.Element, image: string, newHelp: JSX.Element) {
    const newHelpTransformed = (
      <div>
        <Box
          component="img"
          sx={{
            width: '12%',
            marginX: '45%',
            marginBottom: '20px',
          }}
          alt="..."
          src={image}
        />
        <h2>{title}</h2>
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
      image: '/bird.png',
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
      image: '/place.png',
    },
    {
      wishId: 'music',
      title: translate('ceremonial.music.title'),
      content: '',
      help: (
        <div>
          <h3>{translate('ceremonial.music.help.1')}</h3>
          <p>{translate('ceremonial.music.help.2')}</p>
          <h3>{translate('ceremonial.music.help.3')}</h3>
          <p>{translate('ceremonial.music.help.4')}</p>
        </div>
      ),
      type: 'textfield',
      image: '/music.png',
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
    <main>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div onClick={() => setHelp(initial_help)}>
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
          </div>
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
  );
}
