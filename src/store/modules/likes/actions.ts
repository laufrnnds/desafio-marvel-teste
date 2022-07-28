import { LIKES_STORE } from './constants';

export const adicionarLike = (payload: ILike) => {
  return {
    type: LIKES_STORE.ADICIONAR,
    payload,
  };
};

export const retirarLike = (payload: ILike) => {
  return {
    type: LIKES_STORE.RETIRAR,
    payload,
  };
};
