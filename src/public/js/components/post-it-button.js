import React from 'react';

const AddPostIt = (props) => {
  function addTodo() {
    props.onAdd();
  }

  function handleClick() {
    addTodo();
  }

  return (<button onClick={handleClick} className="badge">Add post it< /button>);
};


export default AddPostIt;
