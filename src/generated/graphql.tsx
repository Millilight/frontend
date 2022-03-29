// THIS FILE IS GENERATED; DO NOT EDIT
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserDto = {
  age: Scalars['Float'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  updateWishes: Wishes;
};

export type MutationCreateUserArgs = {
  createUserDto: CreateUserDto;
};

export type MutationUpdateWishesArgs = {
  updateWishesDto: UpdateWishesDto;
};

export type Query = {
  __typename?: 'Query';
  getWishesforUser: Wishes;
  users: Array<User>;
  wishes: Array<Wishes>;
};

export type QueryGetWishesforUserArgs = {
  UserId: Scalars['String'];
};

export type UpdateWishesDto = {
  burialCremation?: InputMaybe<Scalars['String']>;
  burialCremationPlace?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  age: Scalars['Float'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Wishes = {
  __typename?: 'Wishes';
  burialCremation?: Maybe<Scalars['String']>;
  burialCremationPlace?: Maybe<Scalars['String']>;
  user: User;
};

export type UpdateWishesMutationVariables = Exact<{
  burialCremation?: InputMaybe<Scalars['String']>;
  burialCremationPlace?: InputMaybe<Scalars['String']>;
}>;

export type UpdateWishesMutation = {
  __typename?: 'Mutation';
  updateWishes: {
    __typename?: 'Wishes';
    burialCremation?: string | null;
    burialCremationPlace?: string | null;
  };
};

export type GetWishesforUserQueryVariables = Exact<{
  UserId: Scalars['String'];
}>;

export type GetWishesforUserQuery = {
  __typename?: 'Query';
  getWishesforUser: {
    __typename?: 'Wishes';
    burialCremation?: string | null;
    burialCremationPlace?: string | null;
  };
};

export const UpdateWishesDocument = gql`
  mutation updateWishes(
    $burialCremation: String
    $burialCremationPlace: String
  ) {
    updateWishes(
      updateWishesDto: {
        burialCremation: $burialCremation
        burialCremationPlace: $burialCremationPlace
      }
    ) {
      burialCremation
      burialCremationPlace
    }
  }
`;
export type UpdateWishesMutationFn = Apollo.MutationFunction<
  UpdateWishesMutation,
  UpdateWishesMutationVariables
>;

/**
 * __useUpdateWishesMutation__
 *
 * To run a mutation, you first call `useUpdateWishesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWishesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWishesMutation, { data, loading, error }] = useUpdateWishesMutation({
 *   variables: {
 *      burialCremation: // value for 'burialCremation'
 *      burialCremationPlace: // value for 'burialCremationPlace'
 *   },
 * });
 */
export function useUpdateWishesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateWishesMutation,
    UpdateWishesMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateWishesMutation,
    UpdateWishesMutationVariables
  >(UpdateWishesDocument, options);
}
export type UpdateWishesMutationHookResult = ReturnType<
  typeof useUpdateWishesMutation
>;
export type UpdateWishesMutationResult =
  Apollo.MutationResult<UpdateWishesMutation>;
export type UpdateWishesMutationOptions = Apollo.BaseMutationOptions<
  UpdateWishesMutation,
  UpdateWishesMutationVariables
>;
export const GetWishesforUserDocument = gql`
  query getWishesforUser($UserId: String!) {
    getWishesforUser(UserId: $UserId) {
      burialCremation
      burialCremationPlace
    }
  }
`;

/**
 * __useGetWishesforUserQuery__
 *
 * To run a query within a React component, call `useGetWishesforUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWishesforUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWishesforUserQuery({
 *   variables: {
 *      UserId: // value for 'UserId'
 *   },
 * });
 */
export function useGetWishesforUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetWishesforUserQuery,
    GetWishesforUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetWishesforUserQuery, GetWishesforUserQueryVariables>(
    GetWishesforUserDocument,
    options
  );
}
export function useGetWishesforUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetWishesforUserQuery,
    GetWishesforUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetWishesforUserQuery,
    GetWishesforUserQueryVariables
  >(GetWishesforUserDocument, options);
}
export type GetWishesforUserQueryHookResult = ReturnType<
  typeof useGetWishesforUserQuery
>;
export type GetWishesforUserLazyQueryHookResult = ReturnType<
  typeof useGetWishesforUserLazyQuery
>;
export type GetWishesforUserQueryResult = Apollo.QueryResult<
  GetWishesforUserQuery,
  GetWishesforUserQueryVariables
>;
