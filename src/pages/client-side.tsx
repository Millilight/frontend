import Head from 'next/head';
import Countries from '@/components/Countries/Countries';
import { Typography } from '@mui/material';
import { PageCountriesComp } from 'generated/page';
import { withApollo } from '@/utils/withApollo';

const ClientSide: PageCountriesComp = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography variant="h3">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Typography>

        <Countries />
      </main>
    </div>
  );
};

export default withApollo(ClientSide);
