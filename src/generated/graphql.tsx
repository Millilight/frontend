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

export type AskResetPasswordUserDto = {
  email: Scalars['String'];
};

export type AskResetPasswordUserResponse = {
  __typename?: 'AskResetPasswordUserResponse';
  success: Scalars['Boolean'];
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
  askResetPasswordUser: AskResetPasswordUserResponse;
  createUser: User;
  login: LoginResponse;
  resetPasswordUser: User;
  updateEmailUser: User;
  updateUser: User;
  updateWishes: Wishes;
  verifyEmail: VerifyEmailResponse;
};

export type MutationAskResetPasswordUserArgs = {
  ask_reset_password_user_dto: AskResetPasswordUserDto;
};

export type MutationCreateUserArgs = {
  create_user_dto: CreateUserDto;
};

export type MutationLoginArgs = {
  login_user_dto: LoginUserDto;
};

export type MutationResetPasswordUserArgs = {
  reset_password_user_dto: ResetPasswordUserDto;
};

export type MutationUpdateEmailUserArgs = {
  update_email_user_dto: UpdateEmailUserDto;
};

export type MutationUpdateUserArgs = {
  update_user_dto: UpdateUserDto;
};

export type MutationUpdateWishesArgs = {
  update_wishes_dto: UpdateWishesDto;
};

export type MutationVerifyEmailArgs = {
  verify_email_dto: VerifyEmailDto;
};

export type Query = {
  __typename?: 'Query';
  user: User;
};

export type ResetPasswordUserDto = {
  new_password: Scalars['String'];
  token: Scalars['String'];
  user_id: Scalars['String'];
};

export type UpdateEmailUserDto = {
  token: Scalars['String'];
  user_id: Scalars['String'];
};

export type UpdateUserDto = {
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  new_email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UpdateWishesDto = {
  burial_cremation?: InputMaybe<Scalars['String']>;
  burial_cremation_place?: InputMaybe<Scalars['String']>;
  music?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  wishes: Wishes;
};

export type VerifyEmailDto = {
  token: Scalars['String'];
  user_id: Scalars['String'];
};

export type VerifyEmailResponse = {
  __typename?: 'VerifyEmailResponse';
  success: Scalars['Boolean'];
};

export type Wishes = {
  __typename?: 'Wishes';
  burial_cremation?: Maybe<Scalars['String']>;
  burial_cremation_place?: Maybe<Scalars['String']>;
  music?: Maybe<Scalars['String']>;
};

export type AskResetPasswordUserMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type AskResetPasswordUserMutation = {
  __typename?: 'Mutation';
  askResetPasswordUser: {
    __typename?: 'AskResetPasswordUserResponse';
    success: boolean;
  };
};

export type UpdateEmailUserMutationVariables = Exact<{
  token: Scalars['String'];
  user_id: Scalars['String'];
}>;

export type UpdateEmailUserMutation = {
  __typename?: 'Mutation';
  updateEmailUser: {
    __typename?: 'User';
    firstname: string;
    lastname: string;
    email: string;
  };
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = {
  __typename?: 'Query';
  user: {
    __typename?: 'User';
    firstname: string;
    lastname: string;
    email: string;
  };
};

export type UpdateUserMutationVariables = Exact<{
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  updateUser: {
    __typename?: 'User';
    firstname: string;
    lastname: string;
    email: string;
  };
};

export type ResetPasswordMutationVariables = Exact<{
  user_id: Scalars['String'];
  new_password: Scalars['String'];
  token: Scalars['String'];
}>;

export type ResetPasswordMutation = {
  __typename?: 'Mutation';
  resetPasswordUser: { __typename?: 'User'; _id: string };
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'LoginResponse';
    access_token: string;
    user: { __typename?: 'User'; _id: string };
  };
};

export type CreateUserMutationVariables = Exact<{
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser: { __typename?: 'User'; email: string; _id: string };
};

export type VerifyEmailMutationVariables = Exact<{
  token: Scalars['String'];
  user_id: Scalars['String'];
}>;

export type VerifyEmailMutation = {
  __typename?: 'Mutation';
  verifyEmail: { __typename?: 'VerifyEmailResponse'; success: boolean };
};

export type UpdateWishesMutationVariables = Exact<{
  burial_cremation?: InputMaybe<Scalars['String']>;
  burial_cremation_place?: InputMaybe<Scalars['String']>;
  music?: InputMaybe<Scalars['String']>;
}>;

export type UpdateWishesMutation = {
  __typename?: 'Mutation';
  updateWishes: {
    __typename?: 'Wishes';
    burial_cremation?: string | null;
    burial_cremation_place?: string | null;
    music?: string | null;
  };
};

export type GetWishesforUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetWishesforUserQuery = {
  __typename?: 'Query';
  user: {
    __typename?: 'User';
    wishes: {
      __typename?: 'Wishes';
      burial_cremation?: string | null;
      burial_cremation_place?: string | null;
      music?: string | null;
    };
  };
};

export const AskResetPasswordUserDocument = gql`
  mutation askResetPasswordUser($email: String!) {
    askResetPasswordUser(ask_reset_password_user_dto: { email: $email }) {
      success
    }
  }
`;
export type AskResetPasswordUserMutationFn = Apollo.MutationFunction<
  AskResetPasswordUserMutation,
  AskResetPasswordUserMutationVariables
>;

/**
 * __useAskResetPasswordUserMutation__
 *
 * To run a mutation, you first call `useAskResetPasswordUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAskResetPasswordUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [askResetPasswordUserMutation, { data, loading, error }] = useAskResetPasswordUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAskResetPasswordUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AskResetPasswordUserMutation,
    AskResetPasswordUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AskResetPasswordUserMutation,
    AskResetPasswordUserMutationVariables
  >(AskResetPasswordUserDocument, options);
}
export type AskResetPasswordUserMutationHookResult = ReturnType<
  typeof useAskResetPasswordUserMutation
>;
export type AskResetPasswordUserMutationResult =
  Apollo.MutationResult<AskResetPasswordUserMutation>;
export type AskResetPasswordUserMutationOptions = Apollo.BaseMutationOptions<
  AskResetPasswordUserMutation,
  AskResetPasswordUserMutationVariables
>;
export const UpdateEmailUserDocument = gql`
  mutation updateEmailUser($token: String!, $user_id: String!) {
    updateEmailUser(
      update_email_user_dto: { token: $token, user_id: $user_id }
    ) {
      firstname
      lastname
      email
    }
  }
`;
export type UpdateEmailUserMutationFn = Apollo.MutationFunction<
  UpdateEmailUserMutation,
  UpdateEmailUserMutationVariables
>;

/**
 * __useUpdateEmailUserMutation__
 *
 * To run a mutation, you first call `useUpdateEmailUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmailUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmailUserMutation, { data, loading, error }] = useUpdateEmailUserMutation({
 *   variables: {
 *      token: // value for 'token'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUpdateEmailUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateEmailUserMutation,
    UpdateEmailUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateEmailUserMutation,
    UpdateEmailUserMutationVariables
  >(UpdateEmailUserDocument, options);
}
export type UpdateEmailUserMutationHookResult = ReturnType<
  typeof useUpdateEmailUserMutation
>;
export type UpdateEmailUserMutationResult =
  Apollo.MutationResult<UpdateEmailUserMutation>;
export type UpdateEmailUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateEmailUserMutation,
  UpdateEmailUserMutationVariables
>;
export const GetCurrentUserDocument = gql`
  query getCurrentUser {
    user {
      firstname
      lastname
      email
    }
  }
`;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options
  );
}
export function useGetCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options
  );
}
export type GetCurrentUserQueryHookResult = ReturnType<
  typeof useGetCurrentUserQuery
>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<
  typeof useGetCurrentUserLazyQuery
>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<
  GetCurrentUserQuery,
  GetCurrentUserQueryVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser(
    $firstname: String
    $lastname: String
    $password: String
    $email: String
  ) {
    updateUser(
      update_user_dto: {
        firstname: $firstname
        lastname: $lastname
        password: $password
        new_email: $email
      }
    ) {
      firstname
      lastname
      email
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const ResetPasswordDocument = gql`
  mutation resetPassword(
    $user_id: String!
    $new_password: String!
    $token: String!
  ) {
    resetPasswordUser(
      reset_password_user_dto: {
        user_id: $user_id
        new_password: $new_password
        token: $token
      }
    ) {
      _id
    }
  }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      new_password: // value for 'new_password'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, options);
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>;
export type ResetPasswordMutationResult =
  Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const LoginDocument = gql`
  mutation login($email: String!, $password: String!) {
    login(login_user_dto: { email: $email, password: $password }) {
      user {
        _id
      }
      access_token
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const CreateUserDocument = gql`
  mutation createUser(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      create_user_dto: {
        firstname: $firstname
        lastname: $lastname
        email: $email
        password: $password
      }
    ) {
      email
      _id
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const VerifyEmailDocument = gql`
  mutation verifyEmail($token: String!, $user_id: String!) {
    verifyEmail(verify_email_dto: { token: $token, user_id: $user_id }) {
      success
    }
  }
`;
export type VerifyEmailMutationFn = Apollo.MutationFunction<
  VerifyEmailMutation,
  VerifyEmailMutationVariables
>;

/**
 * __useVerifyEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailMutation, { data, loading, error }] = useVerifyEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useVerifyEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyEmailMutation,
    VerifyEmailMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(
    VerifyEmailDocument,
    options
  );
}
export type VerifyEmailMutationHookResult = ReturnType<
  typeof useVerifyEmailMutation
>;
export type VerifyEmailMutationResult =
  Apollo.MutationResult<VerifyEmailMutation>;
export type VerifyEmailMutationOptions = Apollo.BaseMutationOptions<
  VerifyEmailMutation,
  VerifyEmailMutationVariables
>;
export const UpdateWishesDocument = gql`
  mutation updateWishes(
    $burial_cremation: String
    $burial_cremation_place: String
    $music: String
  ) {
    updateWishes(
      update_wishes_dto: {
        burial_cremation: $burial_cremation
        burial_cremation_place: $burial_cremation_place
        music: $music
      }
    ) {
      burial_cremation
      burial_cremation_place
      music
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
 *      burial_cremation: // value for 'burial_cremation'
 *      burial_cremation_place: // value for 'burial_cremation_place'
 *      music: // value for 'music'
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
        music
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
