import Head from 'next/head';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { ssrCountries, PageCountriesComp } from '../generated/page';
import { GetServerSideProps } from 'next';
import { withApollo } from '@/utils/withApollo';

const HomePage: PageCountriesComp = (props) => {
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

        <Grid container spacing={2}>
          {props?.data?.countries?.map((country: Country) => (
            <Grid item xs={2} key={country.code}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{country.name}</Typography>
                  <Typography>
                    {country.code} - {country.emoji}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrCountries.getServerPage({}, ctx);
};

export default withApollo(ssrCountries.withPage(() => ({}))(HomePage));
