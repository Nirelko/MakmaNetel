const SEARCH_CHANGE_TITLE = 'SEARCH_CHANGED';

export const searchChanged = text => ({
    type: SEARCH_CHANGE_TITLE,
    text
});

export default (state = '', action) => {
    switch (action.type) {
        case SEARCH_CHANGE_TITLE: {
            return action.text;
        }
        default: {
            return state
        }
    }
};