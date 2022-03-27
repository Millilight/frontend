// THIS FILE IS GENERATED; DO NOT EDIT
import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient, ApolloClientContext } from '@/utils/withApollo';
export async function getServerPageCountries(
  options: Omit<Apollo.QueryOptions<Types.CountriesQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.CountriesQuery>({
    ...options,
    query: Operations.CountriesDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useCountries = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.CountriesQuery, Types.CountriesQueryVariables>
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.CountriesDocument, options);
};
export type PageCountriesComp = React.FC<{
  data?: Types.CountriesQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageCountries =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.CountriesQuery, Types.CountriesQueryVariables>
  ) =>
  (WrappedComponent: PageCountriesComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.CountriesDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrCountries = {
  getServerPage: getServerPageCountries,
  withPage: withPageCountries,
  usePage: useCountries,
};
