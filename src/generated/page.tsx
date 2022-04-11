// THIS FILE IS GENERATED; DO NOT EDIT
import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient, ApolloClientContext } from '@/utils/withApollo';

export async function getServerPageGetCurrentUser(
  options: Omit<
    Apollo.QueryOptions<Types.GetCurrentUserQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetCurrentUserQuery>({
    ...options,
    query: Operations.GetCurrentUserDocument,
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
export const useGetCurrentUser = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetCurrentUserQuery,
    Types.GetCurrentUserQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetCurrentUserDocument, options);
};
export type PageGetCurrentUserComp = React.FC<{
  data?: Types.GetCurrentUserQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetCurrentUser =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetCurrentUserQuery,
      Types.GetCurrentUserQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetCurrentUserComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.GetCurrentUserDocument,
      options
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetCurrentUser = {
  getServerPage: getServerPageGetCurrentUser,
  withPage: withPageGetCurrentUser,
  usePage: useGetCurrentUser,
};

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
  (WrappedComponent: PageGetWishesforUserComp): NextPage =>
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

export async function getServerPageGetHeirs(
  options: Omit<Apollo.QueryOptions<Types.GetHeirsQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetHeirsQuery>({
    ...options,
    query: Operations.GetHeirsDocument,
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
export const useGetHeirs = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.GetHeirsQuery, Types.GetHeirsQueryVariables>
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetHeirsDocument, options);
};
export type PageGetHeirsComp = React.FC<{
  data?: Types.GetHeirsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetHeirs =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetHeirsQuery, Types.GetHeirsQueryVariables>
  ) =>
  (WrappedComponent: PageGetHeirsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetHeirsDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetHeirs = {
  getServerPage: getServerPageGetHeirs,
  withPage: withPageGetHeirs,
  usePage: useGetHeirs,
};
