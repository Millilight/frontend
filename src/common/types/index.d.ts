declare interface Wish {
  wishId: string;
  title: string;
  content?: string | null;
  help: JSX.Element;
  type: string;
  possibleValues?: string[];
}
