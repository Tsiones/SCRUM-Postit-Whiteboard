import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AddPostIt from './post-it-button';
import PostItList from './post-it-list';
import PostItPopup from './post-it-form-popup';

const PostItContainer = (props) => {
  console.log(props);
  return (<div>
    <AddPostIt onAdd={props.handleAdd} />
    <PostItList
      postIts={props.postItList}
      handleRemove={props.handleRemove}
      handleEdit={props.handleEdit}
    />
    <PostItPopup
      isEditing={props.isEditing}
      updatePostIt={props.updatePostIt}
      editingPostIt={props.editingPostIt}
      handleCancel={props.handleCancel}
      isVisible={props.isShowingModal}
      onSave={props.onSavePostIt}
    />
  </div>);
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    postItList: state.postit.postItList,
    isEditing: state.postit.isEditing,
    isModal: state.postit.isShowingModal
  };
};

const mapDispatchToProps = dispatch => ({
  handleAdd: (postIt) => {
    dispatch(actions.handleAdd(postIt));
  },
  handleRemove: (id) => {
    dispatch(actions.handleRemove(id));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(PostItContainer);
