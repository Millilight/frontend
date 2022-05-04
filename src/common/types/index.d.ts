declare interface Wish {
  wishId: string;
  title: JSX.Element;
  content?: string | null;
  help: JSX.Element;
  type: string;
  possibleValues?: string[];
  image: string;
}

declare interface PaperworkProcedureRow {
  __typename?: string;
}

declare interface BankProduct extends PaperworkProcedureRow {
  type: string;
  company: string;
  localization: string;
}

declare interface LifeInsurance extends PaperworkProcedureRow {
  company: string;
  contract_number: string;
}

declare interface InsuranceProduct extends PaperworkProcedureRow {
  type: string;
  company: string;
  localization: string;
}

declare interface Vehicle extends PaperworkProcedureRow {
  type: string;
  registration_number: string;
}

declare interface RealEstate extends PaperworkProcedureRow {
  type: string;
  localization: string;
}

declare interface ConsumerCredit extends PaperworkProcedureRow {
  company: string;
  contract_number: string;
}

declare interface InternetAccountToBeDeleted extends PaperworkProcedureRow {
  site: string;
  username: string;
}

declare interface PaperworkProcedure {
  itemId: string;
  title: JSX.Element;
  help: JSX.Element;
  image: string;
  emptyRow:
    | PaperworkProcedureRow
    | BankProduct
    | LifeInsurance
    | InsuranceProduct
    | Vehicle
    | RealEstate
    | ConsumerCredit
    | InternetAccountToBeDeleted;
  rows?:
    | PaperworkProcedureRow[]
    | BankProduct[]
    | LifeInsurance[]
    | InsuranceProduct[]
    | Vehicle[]
    | RealEstate[]
    | ConsumerCredit[]
    | InternetAccountToBeDeleted[]
    | null;
}

declare interface User {
  first_name: string;
  last_name: string;
}

declare interface Legator extends User {
  _id: string;
  state: string;
  urgent_data_unlocked: boolean;
  urgent_data?: { wishes: Wish[] };
  sensitive_data_unlocked: boolean;
  sensitive_data?: { procedures: PaperworkProcedure[] };
}

declare interface MyAccountField {
  fieldId: string;
  title: JSX.Element;
  content: string;
  type: string;
}

declare interface UrgentDataWishes {
  __typename?: string | null;
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
}

declare interface SensitiveDataProcedures {
  __typename?: string | null;
  bank_products?: BankProduct[] | null;
  life_insurances?: LifeInsurance[] | null;
  insurance_products?: InsuranceProduct[] | null;
  vehicles?: Vehicle[] | null;
  properties?: RealEstate[] | null;
  consumer_credits?: ConsumerCredit[] | null;
  internet_accounts_to_be_deleted?: InternetAccountToBeDeleted[] | null;
}
