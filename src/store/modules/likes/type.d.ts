interface ILike {
  quantidade: number;
}

interface IAction {
  type: string;
  payload: ILike;
}
