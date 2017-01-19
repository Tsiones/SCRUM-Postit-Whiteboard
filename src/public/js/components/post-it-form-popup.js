import React from 'react';

const PostItPopup = (props) => {
  let isVisible = props.isVisible;
  let isEditing = props.isEditing;
  const editPostIt = props.editingPostIt;
  let titleInput;
  let descriptionInput;
  let colorInput;

  function handleSave() {
    const postIt = {
      title: titleInput.value,
      description: descriptionInput.value,
      color: colorInput.value
    };
    if (isEditing) {
      postIt.id = editPostIt.id;
      if (postIt.title === '') {
        postIt.title = editPostIt.title;
      }
      if (postIt.description === '') {
        postIt.description = editPostIt.description;
      }
      if (postIt.color === '') {
        postIt.color = editPostIt.color;
      }
      props.updatePostIt(postIt);
    } else {
      props.onSave(postIt);
    }
    props.handleCancel();
    isVisible = false;
    isEditing = false;
  }

  function handleCancel() {
    props.handleCancel();
    isVisible = false;
    isEditing = false;
  }

  if (isVisible) {
    return (<div className="popup-container">
      <h3>Add postit</h3>
      <p>Title:</p>
      <input type="text" ref={(c) => { titleInput = c; }} autoFocus />
      <p>Notes:</p>
      <input type="text" ref={(d) => { descriptionInput = d; }} />
      <p>Color:</p>
      <select ref={(e) => { colorInput = e; }} name="color">
        <option value="rgb(125, 204, 93)">Green</option>
        <option value="rgb(60, 170, 199)">Blue</option>
        <option value="rgb(209, 65, 65)">Red</option>
        <option value="rgb(182, 80, 245)">Purple</option>
      </select>
      <br />
      <button onClick={handleSave} type="button">Save postit</button>
      <button onClick={handleCancel} type="button">Cancel postit</button>
    </div>);
  } else if (isEditing) {
    return (<div className="popup-container">
      <h3>Edit postit</h3>
      <p>Title:</p>
      <input defaultValue={editPostIt.title} type="text" ref={(c) => { titleInput = c; }} autoFocus />
      <p>Notes:</p>
      <input defaultValue={editPostIt.description} type="text" ref={(d) => { descriptionInput = d; }} />
      <p>Color:</p>
      <select ref={(e) => { colorInput = e; }} name="color">
        <option value="" selected>{editPostIt.color}</option>
        <option value="rgb(125, 204, 93)">Green</option>
        <option value="rgb(60, 170, 199)">Blue</option>
        <option value="rgb(209, 65, 65)">Red</option>
        <option value="rgb(182, 80, 245)">Purple</option>
      </select>
      <br />
      <button onClick={handleSave} type="button">Save postit</button>
      <button onClick={handleCancel} type="button">Cancel postit</button>
    </div>);
  }
  return null;
};

PostItPopup.propTypes = () => ({
  isVisible: React.PropTypes.func,
  isEditing: React.PropTypes.func,
  editingPostIt: React.PropTypes.func
});

export default PostItPopup;
