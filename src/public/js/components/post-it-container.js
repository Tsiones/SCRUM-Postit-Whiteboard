import _ from 'lodash';
import React from 'react';
import AddPostIt from './post-it-button';
import PostItList from './post-it-list';
import PostItPopup from './post-it-form-popup';

class PostItContainer extends React.Component {
  constructor() {
    super();
    this.state =
    {
      postItList: [
      ],
      isShowingModal: false,
      isEditing: false
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
    this.onSavePostIt = this.onSavePostIt.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.updatePostIt = this.updatePostIt.bind(this);
  }

  onSavePostIt(inputPostIt) {
    this.setState({
      postItList: this.state.postItList.concat([{
        id: +(new Date()),
        title: inputPostIt.title,
        description: inputPostIt.description,
        color: inputPostIt.color }])
    });
  }

  updatePostIt(inputPostIt) {
    const foundPostIt = _.find(this.state.postItList, postIt => postIt.id === inputPostIt.id);
    const i = this.state.postItList.indexOf(foundPostIt);
    this.state.postItList[i] = inputPostIt;
    this.setState({ postIts: this.state.postItList });
    // console.log(_.find(this.state.postItList, postIt => postIt.id === inputPostIt.id));
  }

  handleAddButton() {
    this.setState({ isShowingModal: true });
  }

  handleCancel() {
    this.setState({ isShowingModal: false });
    this.setState({ isEditing: false });
  }

  handleRemove(id) {
    this.setState({
      postItList: this.state.postItList.filter(postIt => postIt.id !== id)
    });
  }

  handleEdit(id) {
    this.setState({
      editingPostIt: _.find(this.state.postItList, postIt => postIt.id === id),
      isEditing: true
    });
  }

  render() {
    return (
      <div className="container">
        <AddPostIt onAdd={this.handleAddButton} />
        <PostItList
          postIts={this.state.postItList}
          handleRemove={this.handleRemove}
          handleEdit={this.handleEdit}
        />
        <PostItPopup
          isEditing={this.state.isEditing}
          updatePostIt={this.updatePostIt}
          editingPostIt={this.state.editingPostIt}
          handleCancel={this.handleCancel}
          isVisible={this.state.isShowingModal}
          onSave={this.onSavePostIt}
        />
      </div>
    );
  }
}

export default PostItContainer;
