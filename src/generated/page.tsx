// THIS FILE IS GENERATED; DO NOT EDIT
import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient, ApolloClientContext } from '@/utils/withApollo';

export async function getServerPageGetWishesforUser(
  options: Omit<
    Apollo.QueryOptions<Types.GetWishesforUserQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetWishesforUserQuery>({
    ...options,
    query: Operations.GetWishesforUserDocument,
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
export const useGetWishesforUser = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetWishesforUserQuery,
    Types.GetWishesforUserQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetWishesforUserDocument, options);
};
export type PageGetWishesforUserComp = React.FC<{
  data?: Types.GetWishesforUserQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetWishesforUser =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetWishesforUserQuery,
      Types.GetWishesforUserQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetWishesforUserComp): NextPag
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.GetWishesforUserDocument,
      options
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetWishesforUser = {
  getServerPage: getServerPageGetWishesforUser,
  withPage: withPageGetWishesforUser,
  usePage: useGetWishesforUser,
};
