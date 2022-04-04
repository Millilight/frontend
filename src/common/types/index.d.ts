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
