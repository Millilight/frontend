// THIS FILE IS GENERATED; DO NOT EDIT
import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient, ApolloClientContext } from '@/utils/withApollo';

export async function getServerPageGetUrgentData(
  options: Omit<
    Apollo.QueryOptions<Types.GetUrgentDataQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetUrgentDataQuery>({
    ...options,
    query: Operations.GetUrgentDataDocument,
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
export const useGetUrgentData = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetUrgentDataQuery,
    Types.GetUrgentDataQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetUrgentDataDocument, options);
};
export type PageGetUrgentDataComp = React.FC<{
  data?: Types.GetUrgentDataQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetUrgentData =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetUrgentDataQuery,
      Types.GetUrgentDataQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetUrgentDataComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetUrgentDataDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetUrgentData = {
  getServerPage: getServerPageGetUrgentData,
  withPage: withPageGetUrgentData,
  usePage: useGetUrgentData,
};

export async function getServerPageGetLegatorUsersDetails(
  options: Omit<
    Apollo.QueryOptions<Types.GetLegatorUsersDetailsQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetLegatorUsersDetailsQuery>({
    ...options,
    query: Operations.GetLegatorUsersDetailsDocument,
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
export const useGetLegatorUsersDetails = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetLegatorUsersDetailsQuery,
    Types.GetLegatorUsersDetailsQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetLegatorUsersDetailsDocument, options);
};
export type PageGetLegatorUsersDetailsComp = React.FC<{
  data?: Types.GetLegatorUsersDetailsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetLegatorUsersDetails =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetLegatorUsersDetailsQuery,
      Types.GetLegatorUsersDetailsQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetLegatorUsersDetailsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.GetLegatorUsersDetailsDocument,
      options
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetLegatorUsersDetails = {
  getServerPage: getServerPageGetLegatorUsersDetails,
  withPage: withPageGetLegatorUsersDetails,
  usePage: useGetLegatorUsersDetails,
};
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

export async function getServerPageGetLegatorUsers(
  options: Omit<
    Apollo.QueryOptions<Types.GetLegatorUsersQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetLegatorUsersQuery>({
    ...options,
    query: Operations.GetLegatorUsersDocument,
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
export const useGetLegatorUsers = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetLegatorUsersQuery,
    Types.GetLegatorUsersQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetLegatorUsersDocument, options);
};
export type PageGetLegatorUsersComp = React.FC<{
  data?: Types.GetLegatorUsersQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetLegatorUsers =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetLegatorUsersQuery,
      Types.GetLegatorUsersQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetLegatorUsersComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.GetLegatorUsersDocument,
      options
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetLegatorUsers = {
  getServerPage: getServerPageGetLegatorUsers,
  withPage: withPageGetLegatorUsers,
  usePage: useGetLegatorUsers,
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
