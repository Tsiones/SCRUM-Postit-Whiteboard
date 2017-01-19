import * as types from '../constants/action-types';

const initalState = { postItList: [], isEditing: false, isShowingModal: false };

const reducer = (state = initalState, action) => {
  let newState;
  switch (action.type) {
    case types.REMOVE_POSTIT: {
      newState = state.postItList.filter(postIt => postIt.id !== action.data.id);
      return newState;
    }
    case types.ADD_POSTIT: {
      const newPostit = Object.assign({}, action.data);
      newState = [...state.postItList, newPostit];
      return newState;
    }
    case types.SAVE_POSTIT: {
      return state;
    }
    case types.CANCEL_EDIT: {
      return state;
    }
    case types.EDIT_POSTIT: {
      return state;
    }
    case types.UPDATE_POSTIT: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
