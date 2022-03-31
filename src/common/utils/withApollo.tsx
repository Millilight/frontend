// From: https://github.com/correttojs/graphql-codegen-apollo-next-ssr/blob/main/example/src/withApollo.tsx
// See https://github.com/vercel/next.js/discussions/9542
// See https://github.com/borisowsky/next-advanced-apollo-starter
// See https://github.com/vercel/next.js/tree/ff2d28c4ff0a2cc1ce408817f2714eebf1cf72c2/examples/with-apollo

import { NextPage } from 'next';

import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import {
  NextApiRequestCookies,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore This path is generated at build time and conflicts otherwise
} from 'next-server/server/api-utils';
import { IncomingMessage } from 'http';
import { config } from './config';
import { setContext } from '@apollo/client/link/context';

export type ApolloClientContext = {
  req?: IncomingMessage & {
    cookies: NextApiRequestCookies;
  };
};

export const withApollo =
  (Comp: NextPage) =>
  // eslint-disable-next-line react/display-name
  ({ apolloState }: { apolloState: NormalizedCacheObject }) => {
    return (
      <ApolloProvider client={getApolloClient(undefined, apolloState)}>
        <Comp />
      </ApolloProvider>
    );
  };

export const getApolloClient = (
  ctx?: ApolloClientContext,
  initialState?: NormalizedCacheObject
) => {
  if (ctx && ctx.req) {
    const { req } = ctx;
    // Do something with the cookies here, maybe add a header for authentication
    req.cookies;
  }

  const httpLink = createHttpLink({
    uri: config.apiURL,
    fetch,
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  const cache = new InMemoryCache().restore(initialState || {});

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });
  return client;
};
