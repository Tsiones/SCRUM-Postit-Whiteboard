import * as types from '../constants/action-types';

module.exports.handleRemove = id => ({
  type: types.REMOVE_POSTIT,
  data: id
});
module.exports.handleAdd = postIt => ({
  type: types.ADD_POSTIT,
  data: postIt
});
module.exports.onSavePostIt = postIt => ({
  type: types.SAVE_POSTIT,
  data: postIt
});
module.exports.handleCancel = postIt => ({
  type: types.CANCEL_EDIT,
  data: postIt
});
module.exports.handleEdit = postIt => ({
  type: types.EDIT_POSTIT,
  data: postIt
});
module.exports.handleUpdate = postIt => ({
  type: types.UPDATE_POSTIT,
  data: postIt
});
