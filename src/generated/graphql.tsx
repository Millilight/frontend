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
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
  user: User;
};

export type LoginUserDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  login: LoginResponse;
  updateWishes: Wishes;
};

export type MutationCreateUserArgs = {
  createUserDto: CreateUserDto;
};

export type MutationLoginArgs = {
  loginUserDto: LoginUserDto;
};

export type MutationUpdateWishesArgs = {
  updateWishesDto: UpdateWishesDto;
};

export type Query = {
  __typename?: 'Query';
  user: User;
};

export type UpdateWishesDto = {
  burial_cremation?: InputMaybe<Scalars['String']>;
  burial_cremation_place?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  wishes?: Maybe<Wishes>;
};

export type Wishes = {
  __typename?: 'Wishes';
  burial_cremation?: Maybe<Scalars['String']>;
  burial_cremation_place?: Maybe<Scalars['String']>;
};

export type UpdateWishesMutationVariables = Exact<{
  burialCremation?: InputMaybe<Scalars['String']>;
  burialCremationPlace?: InputMaybe<Scalars['String']>;
}>;

export type UpdateWishesMutation = {
  __typename?: 'Mutation';
  updateWishes: {
    __typename?: 'Wishes';
    burial_cremation?: string | null;
    burial_cremation_place?: string | null;
  };
};

export type GetWishesforUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetWishesforUserQuery = {
  __typename?: 'Query';
  user: {
    __typename?: 'User';
    wishes?: {
      __typename?: 'Wishes';
      burial_cremation?: string | null;
      burial_cremation_place?: string | null;
    } | null;
  };
};

export const UpdateWishesDocument = gql`
  mutation updateWishes(
    $burialCremation: String
    $burialCremationPlace: String
  ) {
    updateWishes(
      updateWishesDto: {
        burial_cremation: $burialCremation
        burial_cremation_place: $burialCremationPlace
      }
    ) {
      burial_cremation
      burial_cremation_place
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
  query getWishesforUser {
    user {
      wishes {
        burial_cremation
        burial_cremation_place
      }
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
 *   },
 * });
 */
export function useGetWishesforUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
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
