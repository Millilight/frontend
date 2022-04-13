declare interface Wish {
  wishId: string;
  title: JSX.Element;
  content?: string | null;
  help: JSX.Element;
  type: string;
  possibleValues?: string[];
  image: string;
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
