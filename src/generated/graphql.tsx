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
  /** Date custom scalar type */
  Date: any;
};

export type AddHeirInput = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type AddHeirResponse = {
  __typename?: 'AddHeirResponse';
  heir_user: Heir;
};

export type AskResetPasswordUserDto = {
  email: Scalars['String'];
};

export type AskResetPasswordUserResponse = {
  __typename?: 'AskResetPasswordUserResponse';
  success: Scalars['Boolean'];
};

export type ConfirmSecurityCodeInput = {
  legator_user_id: Scalars['ID'];
  security_code: Scalars['String'];
};

export type ConfirmSecurityCodeResponse = {
  __typename?: 'ConfirmSecurityCodeResponse';
  legator_user: Legator;
};

export type CreateUserDto = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
};

export type Heir = {
  __typename?: 'Heir';
  _id: Scalars['ID'];
  added_date: Scalars['Date'];
  security_code?: Maybe<Scalars['String']>;
  state: StateTrust;
  urgent_data_unlocked: Scalars['Boolean'];
  urgent_data_unlocked_date?: Maybe<Scalars['Date']>;
  user_details: UserDetails;
};

export type Legator = {
  __typename?: 'Legator';
  _id: Scalars['ID'];
  added_date: Scalars['Date'];
  state: StateTrust;
  urgent_data?: Maybe<UrgentData>;
  urgent_data_unlocked: Scalars['Boolean'];
  urgent_data_unlocked_date?: Maybe<Scalars['Date']>;
  user_details: UserDetails;
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
  addHeir: AddHeirResponse;
  askResetPasswordUser: AskResetPasswordUserResponse;
  confirmSecurityCode: ConfirmSecurityCodeResponse;
  createUser: User;
  login: LoginResponse;
  resetPasswordUser: User;
  unlockUrgentData: UnlockUrgentDataResponse;
  updateEmailUser: User;
  updateUser: User;
  updateWishes: Wishes;
  verifyEmail: VerifyEmailResponse;
  verifyEmailWithInvitation: VerifyEmailWithInvitationResponse;
};

export type MutationAddHeirArgs = {
  add_heir_user_input: AddHeirInput;
};

export type MutationAskResetPasswordUserArgs = {
  ask_reset_password_user_dto: AskResetPasswordUserDto;
};

export type MutationConfirmSecurityCodeArgs = {
  confirm_security_code_input: ConfirmSecurityCodeInput;
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

export type MutationUnlockUrgentDataArgs = {
  unlock_urgent_data_input: UnlockUrgentDataInput;
};

export type MutationUpdateEmailUserArgs = {
  update_email_user_dto: UpdateEmailUserDto;
};

export type MutationUpdateUserArgs = {
  update_user_dto: UpdateUserDto;
};

export type MutationUpdateWishesArgs = {
  update_wishes_dto: UpdateWishesInput;
};

export type MutationVerifyEmailArgs = {
  verify_email_dto: VerifyEmailDto;
};

export type MutationVerifyEmailWithInvitationArgs = {
  verify_email_with_invitation_input: VerifyEmailWithInvitationInput;
};

export type Query = {
  __typename?: 'Query';
  urgentData: UrgentDataResponse;
  user: User;
};

export type QueryUrgentDataArgs = {
  urgent_data_input: UrgentDataInput;
};

export type ResetPasswordUserDto = {
  new_password: Scalars['String'];
  token: Scalars['String'];
  user_id: Scalars['String'];
};

export enum StateTrust {
  InvitationSent = 'INVITATION_SENT',
  Validated = 'VALIDATED',
}

export type UnlockUrgentDataInput = {
  legator_user_id: Scalars['ID'];
};

export type UnlockUrgentDataResponse = {
  __typename?: 'UnlockUrgentDataResponse';
  success: Scalars['Boolean'];
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

export type UpdateWishesInput = {
  burial_cremation?: InputMaybe<Scalars['String']>;
  burial_cremation_place?: InputMaybe<Scalars['String']>;
  coffin?: InputMaybe<Scalars['String']>;
  list_of_people?: InputMaybe<Scalars['String']>;
  music?: InputMaybe<Scalars['String']>;
  ornament?: InputMaybe<Scalars['String']>;
  other?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
  prevoyance?: InputMaybe<Scalars['String']>;
  religion?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type UrgentData = {
  __typename?: 'UrgentData';
  wishes: Wishes;
};

export type UrgentDataInput = {
  legator_user_id: Scalars['ID'];
};

export type UrgentDataResponse = {
  __typename?: 'UrgentDataResponse';
  urgent_data: UrgentData;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  heir_users: Array<Heir>;
  lastname: Scalars['String'];
  legator_users: Array<Legator>;
  urgent_data: UrgentData;
};

export type UserDetails = {
  __typename?: 'UserDetails';
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type VerifyEmailDto = {
  password?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
  user_id: Scalars['String'];
};

export type VerifyEmailResponse = {
  __typename?: 'VerifyEmailResponse';
  success: Scalars['Boolean'];
};

export type VerifyEmailWithInvitationInput = {
  password: Scalars['String'];
  token: Scalars['String'];
  user_id: Scalars['ID'];
};

export type VerifyEmailWithInvitationResponse = {
  __typename?: 'VerifyEmailWithInvitationResponse';
  sucess: Scalars['Boolean'];
};

export type Wishes = {
  __typename?: 'Wishes';
  burial_cremation?: Maybe<Scalars['String']>;
  burial_cremation_place?: Maybe<Scalars['String']>;
  coffin?: Maybe<Scalars['String']>;
  list_of_people?: Maybe<Scalars['String']>;
  music?: Maybe<Scalars['String']>;
  ornament?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  prevoyance?: Maybe<Scalars['String']>;
  religion?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ConfirmSecurityCodeMutationVariables = Exact<{
  legator_user_id: Scalars['ID'];
  security_code: Scalars['String'];
}>;

export type ConfirmSecurityCodeMutation = {
  __typename?: 'Mutation';
  confirmSecurityCode: {
    __typename?: 'ConfirmSecurityCodeResponse';
    legator_user: { __typename?: 'Legator'; state: StateTrust };
  };
};

export type UnlockUrgentDataMutationVariables = Exact<{
  legator_user_id: Scalars['ID'];
}>;

export type UnlockUrgentDataMutation = {
  __typename?: 'Mutation';
  unlockUrgentData: {
    __typename?: 'UnlockUrgentDataResponse';
    success: boolean;
  };
};

export type GetLegatorUrgentDataWishesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetLegatorUrgentDataWishesQuery = {
  __typename?: 'Query';
  user: {
    __typename?: 'User';
    legator_users: Array<{
      __typename?: 'Legator';
      _id: string;
      urgent_data?: {
        __typename?: 'UrgentData';
        wishes: {
          __typename?: 'Wishes';
          burial_cremation?: string | null;
          burial_cremation_place?: string | null;
          music?: string | null;
          religion?: string | null;
          place?: string | null;
          prevoyance?: string | null;
          list_of_people?: string | null;
          coffin?: string | null;
          ornament?: string | null;
          text?: string | null;
          other?: string | null;
        };
      } | null;
    }>;
  };
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

export type GetMyUrgentDataWishesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetMyUrgentDataWishesQuery = {
  __typename?: 'Query';
  user: {
    __typename?: 'User';
    urgent_data: {
      __typename?: 'UrgentData';
      wishes: {
        __typename?: 'Wishes';
        burial_cremation?: string | null;
        burial_cremation_place?: string | null;
        music?: string | null;
        religion?: string | null;
        place?: string | null;
        prevoyance?: string | null;
        list_of_people?: string | null;
        coffin?: string | null;
        ornament?: string | null;
        text?: string | null;
        other?: string | null;
      };
    };
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

export type GetLegatorUsersDetailsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetLegatorUsersDetailsQuery = {
  __typename?: 'Query';
  user: {
    __typename?: 'User';
    legator_users: Array<{
      __typename?: 'Legator';
      _id: string;
      state: StateTrust;
      urgent_data_unlocked: boolean;
      user_details: {
        __typename?: 'UserDetails';
        firstname: string;
        lastname: string;
      };
    }>;
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

export type GetLegatorUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetLegatorUsersQuery = {
  __typename?: 'Query';
  user: {
    __typename?: 'User';
    legator_users: Array<{ __typename?: 'Legator'; _id: string }>;
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
  religion?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
  prevoyance?: InputMaybe<Scalars['String']>;
  list_of_people?: InputMaybe<Scalars['String']>;
  coffin?: InputMaybe<Scalars['String']>;
  ornament?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  music?: InputMaybe<Scalars['String']>;
  other?: InputMaybe<Scalars['String']>;
}>;

export type UpdateWishesMutation = {
  __typename?: 'Mutation';
  updateWishes: {
    __typename?: 'Wishes';
    burial_cremation?: string | null;
    burial_cremation_place?: string | null;
    religion?: string | null;
    place?: string | null;
    prevoyance?: string | null;
    list_of_people?: string | null;
    coffin?: string | null;
    ornament?: string | null;
    text?: string | null;
    music?: string | null;
    other?: string | null;
  };
};

export type GetWishesforUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetWishesforUserQuery = {
  __typename?: 'Query';
  user: {
    __typename?: 'User';
    urgent_data: {
      __typename?: 'UrgentData';
      wishes: {
        __typename?: 'Wishes';
        burial_cremation?: string | null;
        burial_cremation_place?: string | null;
        religion?: string | null;
        place?: string | null;
        prevoyance?: string | null;
        list_of_people?: string | null;
        coffin?: string | null;
        ornament?: string | null;
        text?: string | null;
        music?: string | null;
        other?: string | null;
      };
    };
  };
};

export type AddHeirMutationVariables = Exact<{
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
}>;

export type AddHeirMutation = {
  __typename?: 'Mutation';
  addHeir: {
    __typename?: 'AddHeirResponse';
    heir_user: {
      __typename?: 'Heir';
      _id: string;
      user_details: {
        __typename?: 'UserDetails';
        firstname: string;
        lastname: string;
        email: string;
      };
    };
  };
};

export type GetHeirsQueryVariables = Exact<{ [key: string]: never }>;

export type GetHeirsQuery = {
  __typename?: 'Query';
  user: {
    __typename?: 'User';
    heir_users: Array<{
      __typename?: 'Heir';
      _id: string;
      added_date: any;
      security_code?: string | null;
      state: StateTrust;
      urgent_data_unlocked: boolean;
      user_details: {
        __typename?: 'UserDetails';
        firstname: string;
        lastname: string;
        email: string;
      };
    }>;
  };
};

export const ConfirmSecurityCodeDocument = gql`
  mutation confirmSecurityCode($legator_user_id: ID!, $security_code: String!) {
    confirmSecurityCode(
      confirm_security_code_input: {
        legator_user_id: $legator_user_id
        security_code: $security_code
      }
    ) {
      legator_user {
        state
      }
    }
  }
`;
export type ConfirmSecurityCodeMutationFn = Apollo.MutationFunction<
  ConfirmSecurityCodeMutation,
  ConfirmSecurityCodeMutationVariables
>;

/**
 * __useConfirmSecurityCodeMutation__
 *
 * To run a mutation, you first call `useConfirmSecurityCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmSecurityCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmSecurityCodeMutation, { data, loading, error }] = useConfirmSecurityCodeMutation({
 *   variables: {
 *      legator_user_id: // value for 'legator_user_id'
 *      security_code: // value for 'security_code'
 *   },
 * });
 */
export function useConfirmSecurityCodeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ConfirmSecurityCodeMutation,
    ConfirmSecurityCodeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ConfirmSecurityCodeMutation,
    ConfirmSecurityCodeMutationVariables
  >(ConfirmSecurityCodeDocument, options);
}
export type ConfirmSecurityCodeMutationHookResult = ReturnType<
  typeof useConfirmSecurityCodeMutation
>;
export type ConfirmSecurityCodeMutationResult =
  Apollo.MutationResult<ConfirmSecurityCodeMutation>;
export type ConfirmSecurityCodeMutationOptions = Apollo.BaseMutationOptions<
  ConfirmSecurityCodeMutation,
  ConfirmSecurityCodeMutationVariables
>;
export const UnlockUrgentDataDocument = gql`
  mutation unlockUrgentData($legator_user_id: ID!) {
    unlockUrgentData(
      unlock_urgent_data_input: { legator_user_id: $legator_user_id }
    ) {
      success
    }
  }
`;
export type UnlockUrgentDataMutationFn = Apollo.MutationFunction<
  UnlockUrgentDataMutation,
  UnlockUrgentDataMutationVariables
>;

/**
 * __useUnlockUrgentDataMutation__
 *
 * To run a mutation, you first call `useUnlockUrgentDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlockUrgentDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlockUrgentDataMutation, { data, loading, error }] = useUnlockUrgentDataMutation({
 *   variables: {
 *      legator_user_id: // value for 'legator_user_id'
 *   },
 * });
 */
export function useUnlockUrgentDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UnlockUrgentDataMutation,
    UnlockUrgentDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UnlockUrgentDataMutation,
    UnlockUrgentDataMutationVariables
  >(UnlockUrgentDataDocument, options);
}
export type UnlockUrgentDataMutationHookResult = ReturnType<
  typeof useUnlockUrgentDataMutation
>;
export type UnlockUrgentDataMutationResult =
  Apollo.MutationResult<UnlockUrgentDataMutation>;
export type UnlockUrgentDataMutationOptions = Apollo.BaseMutationOptions<
  UnlockUrgentDataMutation,
  UnlockUrgentDataMutationVariables
>;
export const GetLegatorUrgentDataWishesDocument = gql`
  query getLegatorUrgentDataWishes {
    user {
      legator_users {
        _id
        urgent_data {
          wishes {
            burial_cremation
            burial_cremation_place
            music
            religion
            place
            prevoyance
            list_of_people
            coffin
            ornament
            text
            other
          }
        }
      }
    }
  }
`;

/**
 * __useGetLegatorUrgentDataWishesQuery__
 *
 * To run a query within a React component, call `useGetLegatorUrgentDataWishesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLegatorUrgentDataWishesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLegatorUrgentDataWishesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLegatorUrgentDataWishesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLegatorUrgentDataWishesQuery,
    GetLegatorUrgentDataWishesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetLegatorUrgentDataWishesQuery,
    GetLegatorUrgentDataWishesQueryVariables
  >(GetLegatorUrgentDataWishesDocument, options);
}
export function useGetLegatorUrgentDataWishesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLegatorUrgentDataWishesQuery,
    GetLegatorUrgentDataWishesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLegatorUrgentDataWishesQuery,
    GetLegatorUrgentDataWishesQueryVariables
  >(GetLegatorUrgentDataWishesDocument, options);
}
export type GetLegatorUrgentDataWishesQueryHookResult = ReturnType<
  typeof useGetLegatorUrgentDataWishesQuery
>;
export type GetLegatorUrgentDataWishesLazyQueryHookResult = ReturnType<
  typeof useGetLegatorUrgentDataWishesLazyQuery
>;
export type GetLegatorUrgentDataWishesQueryResult = Apollo.QueryResult<
  GetLegatorUrgentDataWishesQuery,
  GetLegatorUrgentDataWishesQueryVariables
>;
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
export const GetMyUrgentDataWishesDocument = gql`
  query getMyUrgentDataWishes {
    user {
      urgent_data {
        wishes {
          burial_cremation
          burial_cremation_place
          music
          religion
          place
          prevoyance
          list_of_people
          coffin
          ornament
          text
          other
        }
      }
    }
  }
`;

/**
 * __useGetMyUrgentDataWishesQuery__
 *
 * To run a query within a React component, call `useGetMyUrgentDataWishesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyUrgentDataWishesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyUrgentDataWishesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyUrgentDataWishesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMyUrgentDataWishesQuery,
    GetMyUrgentDataWishesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetMyUrgentDataWishesQuery,
    GetMyUrgentDataWishesQueryVariables
  >(GetMyUrgentDataWishesDocument, options);
}
export function useGetMyUrgentDataWishesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMyUrgentDataWishesQuery,
    GetMyUrgentDataWishesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetMyUrgentDataWishesQuery,
    GetMyUrgentDataWishesQueryVariables
  >(GetMyUrgentDataWishesDocument, options);
}
export type GetMyUrgentDataWishesQueryHookResult = ReturnType<
  typeof useGetMyUrgentDataWishesQuery
>;
export type GetMyUrgentDataWishesLazyQueryHookResult = ReturnType<
  typeof useGetMyUrgentDataWishesLazyQuery
>;
export type GetMyUrgentDataWishesQueryResult = Apollo.QueryResult<
  GetMyUrgentDataWishesQuery,
  GetMyUrgentDataWishesQueryVariables
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
export const GetLegatorUsersDetailsDocument = gql`
  query getLegatorUsersDetails {
    user {
      legator_users {
        _id
        user_details {
          firstname
          lastname
        }
        state
        urgent_data_unlocked
      }
    }
  }
`;

/**
 * __useGetLegatorUsersDetailsQuery__
 *
 * To run a query within a React component, call `useGetLegatorUsersDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLegatorUsersDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLegatorUsersDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLegatorUsersDetailsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLegatorUsersDetailsQuery,
    GetLegatorUsersDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetLegatorUsersDetailsQuery,
    GetLegatorUsersDetailsQueryVariables
  >(GetLegatorUsersDetailsDocument, options);
}
export function useGetLegatorUsersDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLegatorUsersDetailsQuery,
    GetLegatorUsersDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLegatorUsersDetailsQuery,
    GetLegatorUsersDetailsQueryVariables
  >(GetLegatorUsersDetailsDocument, options);
}
export type GetLegatorUsersDetailsQueryHookResult = ReturnType<
  typeof useGetLegatorUsersDetailsQuery
>;
export type GetLegatorUsersDetailsLazyQueryHookResult = ReturnType<
  typeof useGetLegatorUsersDetailsLazyQuery
>;
export type GetLegatorUsersDetailsQueryResult = Apollo.QueryResult<
  GetLegatorUsersDetailsQuery,
  GetLegatorUsersDetailsQueryVariables
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
export const GetLegatorUsersDocument = gql`
  query getLegatorUsers {
    user {
      legator_users {
        _id
      }
    }
  }
`;

/**
 * __useGetLegatorUsersQuery__
 *
 * To run a query within a React component, call `useGetLegatorUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLegatorUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLegatorUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLegatorUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLegatorUsersQuery,
    GetLegatorUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLegatorUsersQuery, GetLegatorUsersQueryVariables>(
    GetLegatorUsersDocument,
    options
  );
}
export function useGetLegatorUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLegatorUsersQuery,
    GetLegatorUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLegatorUsersQuery,
    GetLegatorUsersQueryVariables
  >(GetLegatorUsersDocument, options);
}
export type GetLegatorUsersQueryHookResult = ReturnType<
  typeof useGetLegatorUsersQuery
>;
export type GetLegatorUsersLazyQueryHookResult = ReturnType<
  typeof useGetLegatorUsersLazyQuery
>;
export type GetLegatorUsersQueryResult = Apollo.QueryResult<
  GetLegatorUsersQuery,
  GetLegatorUsersQueryVariables
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
    $religion: String
    $place: String
    $prevoyance: String
    $list_of_people: String
    $coffin: String
    $ornament: String
    $text: String
    $music: String
    $other: String
  ) {
    updateWishes(
      update_wishes_dto: {
        burial_cremation: $burial_cremation
        burial_cremation_place: $burial_cremation_place
        religion: $religion
        place: $place
        prevoyance: $prevoyance
        list_of_people: $list_of_people
        coffin: $coffin
        ornament: $ornament
        text: $text
        music: $music
        other: $other
      }
    ) {
      burial_cremation
      burial_cremation_place
      religion
      place
      prevoyance
      list_of_people
      coffin
      ornament
      text
      music
      other
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
 *      religion: // value for 'religion'
 *      place: // value for 'place'
 *      prevoyance: // value for 'prevoyance'
 *      list_of_people: // value for 'list_of_people'
 *      coffin: // value for 'coffin'
 *      ornament: // value for 'ornament'
 *      text: // value for 'text'
 *      music: // value for 'music'
 *      other: // value for 'other'
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
      urgent_data {
        wishes {
          burial_cremation
          burial_cremation_place
          religion
          place
          prevoyance
          list_of_people
          coffin
          ornament
          text
          music
          other
        }
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
export const AddHeirDocument = gql`
  mutation addHeir($firstname: String!, $lastname: String!, $email: String!) {
    addHeir(
      add_heir_user_input: {
        firstname: $firstname
        lastname: $lastname
        email: $email
      }
    ) {
      heir_user {
        _id
        user_details {
          firstname
          lastname
          email
        }
      }
    }
  }
`;
export type AddHeirMutationFn = Apollo.MutationFunction<
  AddHeirMutation,
  AddHeirMutationVariables
>;

/**
 * __useAddHeirMutation__
 *
 * To run a mutation, you first call `useAddHeirMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddHeirMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addHeirMutation, { data, loading, error }] = useAddHeirMutation({
 *   variables: {
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAddHeirMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddHeirMutation,
    AddHeirMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddHeirMutation, AddHeirMutationVariables>(
    AddHeirDocument,
    options
  );
}
export type AddHeirMutationHookResult = ReturnType<typeof useAddHeirMutation>;
export type AddHeirMutationResult = Apollo.MutationResult<AddHeirMutation>;
export type AddHeirMutationOptions = Apollo.BaseMutationOptions<
  AddHeirMutation,
  AddHeirMutationVariables
>;
export const GetHeirsDocument = gql`
  query getHeirs {
    user {
      heir_users {
        _id
        added_date
        security_code
        state
        urgent_data_unlocked
        user_details {
          firstname
          lastname
          email
        }
      }
    }
  }
`;

/**
 * __useGetHeirsQuery__
 *
 * To run a query within a React component, call `useGetHeirsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHeirsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHeirsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHeirsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetHeirsQuery, GetHeirsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetHeirsQuery, GetHeirsQueryVariables>(
    GetHeirsDocument,
    options
  );
}
export function useGetHeirsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHeirsQuery,
    GetHeirsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetHeirsQuery, GetHeirsQueryVariables>(
    GetHeirsDocument,
    options
  );
}
export type GetHeirsQueryHookResult = ReturnType<typeof useGetHeirsQuery>;
export type GetHeirsLazyQueryHookResult = ReturnType<
  typeof useGetHeirsLazyQuery
>;
export type GetHeirsQueryResult = Apollo.QueryResult<
  GetHeirsQuery,
  GetHeirsQueryVariables
>;
