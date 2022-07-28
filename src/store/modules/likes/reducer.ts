import { LIKES_STORE } from './constants';

const initialState: ILike = {
  quantidade: 0,
};

export const likeReducer = (
  state = initialState,
  { type, payload }: IAction
) => {
  switch (type) {
    case LIKES_STORE.ADICIONAR:
      return {
        ...state,
        quantidade: state.quantidade + payload.quantidade,
      };

    case LIKES_STORE.RETIRAR:
      return {
        ...state,
        quantidade: state.quantidade - payload.quantidade,
      };

    default:
      return state;
  }
};
