// THIS FILE IS GENERATED; DO NOT EDIT
import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient, ApolloClientContext } from '@/utils/withApollo';

export async function getServerPageGetLegatorUrgentDataWishes(
  options: Omit<
    Apollo.QueryOptions<Types.GetLegatorUrgentDataWishesQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetLegatorUrgentDataWishesQuery>({
    ...options,
    query: Operations.GetLegatorUrgentDataWishesDocument,
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
export const useGetLegatorUrgentDataWishes = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetLegatorUrgentDataWishesQuery,
    Types.GetLegatorUrgentDataWishesQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetLegatorUrgentDataWishesDocument, options);
};
export type PageGetLegatorUrgentDataWishesComp = React.FC<{
  data?: Types.GetLegatorUrgentDataWishesQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetLegatorUrgentDataWishes =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetLegatorUrgentDataWishesQuery,
      Types.GetLegatorUrgentDataWishesQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetLegatorUrgentDataWishesComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.GetLegatorUrgentDataWishesDocument,
      options
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetLegatorUrgentDataWishes = {
  getServerPage: getServerPageGetLegatorUrgentDataWishes,
  withPage: withPageGetLegatorUrgentDataWishes,
  usePage: useGetLegatorUrgentDataWishes,
};
export async function getServerPageGetLegatorSensitiveDataProcedures(
  options: Omit<
    Apollo.QueryOptions<Types.GetLegatorSensitiveDataProceduresQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data =
    await apolloClient.query<Types.GetLegatorSensitiveDataProceduresQuery>({
      ...options,
      query: Operations.GetLegatorSensitiveDataProceduresDocument,
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
export const useGetLegatorSensitiveDataProcedures = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetLegatorSensitiveDataProceduresQuery,
    Types.GetLegatorSensitiveDataProceduresQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(
    Operations.GetLegatorSensitiveDataProceduresDocument,
    options
  );
};
export type PageGetLegatorSensitiveDataProceduresComp = React.FC<{
  data?: Types.GetLegatorSensitiveDataProceduresQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetLegatorSensitiveDataProcedures =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetLegatorSensitiveDataProceduresQuery,
      Types.GetLegatorSensitiveDataProceduresQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetLegatorSensitiveDataProceduresComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.GetLegatorSensitiveDataProceduresDocument,
      options
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetLegatorSensitiveDataProcedures = {
  getServerPage: getServerPageGetLegatorSensitiveDataProcedures,
  withPage: withPageGetLegatorSensitiveDataProcedures,
  usePage: useGetLegatorSensitiveDataProcedures,
};

export async function getServerPageGetMyUrgentDataWishes(
  options: Omit<
    Apollo.QueryOptions<Types.GetMyUrgentDataWishesQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetMyUrgentDataWishesQuery>({
    ...options,
    query: Operations.GetMyUrgentDataWishesDocument,
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
export const useGetMyUrgentDataWishes = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetMyUrgentDataWishesQuery,
    Types.GetMyUrgentDataWishesQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetMyUrgentDataWishesDocument, options);
};
export type PageGetMyUrgentDataWishesComp = React.FC<{
  data?: Types.GetMyUrgentDataWishesQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetMyUrgentDataWishes =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetMyUrgentDataWishesQuery,
      Types.GetMyUrgentDataWishesQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetMyUrgentDataWishesComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.GetMyUrgentDataWishesDocument,
      options
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetMyUrgentDataWishes = {
  getServerPage: getServerPageGetMyUrgentDataWishes,
  withPage: withPageGetMyUrgentDataWishes,
  usePage: useGetMyUrgentDataWishes,
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

export async function getServerPageGetMySensitiveDataProcedures(
  options: Omit<
    Apollo.QueryOptions<Types.GetMySensitiveDataProceduresQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data =
    await apolloClient.query<Types.GetMySensitiveDataProceduresQuery>({
      ...options,
      query: Operations.GetMySensitiveDataProceduresDocument,
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
export const useGetMySensitiveDataProcedures = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetMySensitiveDataProceduresQuery,
    Types.GetMySensitiveDataProceduresQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetMySensitiveDataProceduresDocument, options);
};
export type PageGetMySensitiveDataProceduresComp = React.FC<{
  data?: Types.GetMySensitiveDataProceduresQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetMySensitiveDataProcedures =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetMySensitiveDataProceduresQuery,
      Types.GetMySensitiveDataProceduresQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetMySensitiveDataProceduresComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.GetMySensitiveDataProceduresDocument,
      options
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetMySensitiveDataProcedures = {
  getServerPage: getServerPageGetMySensitiveDataProcedures,
  withPage: withPageGetMySensitiveDataProcedures,
  usePage: useGetMySensitiveDataProcedures,
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
