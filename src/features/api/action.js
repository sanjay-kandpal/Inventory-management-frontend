import { createAction } from '@reduxjs/toolkit';

export const deleteItem = createAction('DELETE_ITEM', (id, token) => ({
  payload: { id, token },
}));