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

const CeremonialWishes: PageGetWishesforUserComp = () => {
  // Help on the right hand side  pannel
  const [help, setHelp] = useState(
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
      <p>
        Dans cet espace, vous allez pouvoir renseigner vos volontés concernant
        la cérémonie funéraire. Ces informations peuvent permettre à votre
        famille de s’accorder simplement sur la démarche à suivre, sans avoir à
        prendre de décision dans un moment difficile.
      </p>
      <p>
        Une fois que vous aurez transmis l’accès à vos proches de confiance, ils
        pourront accéder à ces informations s’ils le jugent nécessaire. Vous
        serez également notifié du dévérouillage de vos données de leur part.{' '}
      </p>
    </div>
  );

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
      title: 'Souhaitez-vous une crémation ou une inhumation ?',
      content: '',
      help: (
        <div>
          <h3>Inhumation ou crémation ?</h3>
          <p>
            Ce sont les deux procédés possibles après un décès, qui ont chacun
            leurs avantages et inconvénients.
          </p>
          <p>
            La crémation, de plus en plus utilisée, consiste à brûler le corps
            dans un crématorium pour en récupérer les cendres. Elle peut êter
            plus simple à organiser et moins chère qu’une inhumation, mais peut
            sembler un peu impersonnelle pour les proches.
          </p>
          <p>
            Pur une inhumation, ou enterrement, le corps du défunt est placé
            dans un cerceuil. Cela peut rendre le deuil plus facile. Dans le cas
            d’un caveau familial, les membres d’une famille peuvent reposer
            ensemble. Son organisation demande certaines démarches
            adminiistrative (acte de décès, autorisation de la mairie) qui
            peuvent être un peu lourdes au moment du deuil pour les proches.
          </p>
        </div>
      ),
      type: 'radio',
      possibleValues: ['Inhumation', 'Crémation'],
    },
    {
      wishId: 'burial_cremation_place',
      title:
        'Où souhaitez-vous être inhumé, ou que vos cendres soient placées ?',
      content: '',
      help: (
        <div>
          <h3>Où peut-on être inhumé ?</h3>
          <p>
            Le lieu d’inhumation le plus commun est le cimetière communal. Il
            peut s’agir d’un cimetière de la commune où :
          </p>
          <ul>
            <li>Le défunt est décédé.</li>
            <li>Le défunt était domicilié.</li>
            <li>
              Se trouve une sépulture de famille (caveau familial) à laquelle a
              droit le défunt.
            </li>
            <li>
              Dans le cas particulier où il résidait hors de France, la commune
              où le défunt était inscrit sur la liste électorale.
            </li>
          </ul>
          <p>
            Il est également possible sur un terrain privé, mais des conditions
            précises doivent être respectées.
          </p>
          <h3>Quid des cendres après une crémation ?</h3>
          <p>
            Pour conserver les cendres après une crémation, elles sont mises
            dans une urne qui peut être
          </p>
          <ul>
            <li>Inhumée dans une sépulture existante.</li>
            <li>Déposée dans un columbarium.</li>
            <li>Placée dans un monument funéraire dans un cimetière.</li>
          </ul>
          <p>
            Deuxième possibilité: Les cendres peuvent être dispersées, mais cela
            ne peut pas être fait de partout! Légalement cela peut être dans les
            espaces aménagés dans les cimetières communaux, en pleine nature, ou
            en mer, à un minimum de 300 mètres des côtes.
          </p>
          <p>
            Attention ! Depuis 2008, il n’est plus possible de conserver les
            cendres d’un proche dans un logement.
          </p>
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
        <title>Volontés cérémoniales</title>
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
              {'   '} Renseigner mes volontés cérémoniales
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
