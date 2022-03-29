// import Head from 'next/head';
// import Countries from '@/components/Countries/Countries';
import { Typography, TextField } from '@mui/material';
// import { PageCountriesComp } from 'generated/page';
import { withApollo } from '@/utils/withApollo';

const ClientSide = () => {
  return (
    <div>
      <Typography variant="h3">Connexion</Typography>
      <TextField id="textfield-email" label="Email" variant="standard" />
      <TextField
        id="textfield-password"
        label="Mot de passe"
        variant="standard"
        type="password"
      />
    </div>
  );
};

export default withApollo(ClientSide);
