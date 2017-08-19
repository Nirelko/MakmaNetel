import { createAction, handleAction } from 'redux-actions';

export const searchChanged = createAction('SEARCH_CHANGED');

export default handleAction(searchChanged, (state, { payload: text }) => text, '');