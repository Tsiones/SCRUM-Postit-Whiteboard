import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';

const PostIt = (props) => {
  function handleClick() {
    props.handleRemove(props.id);
  }

  function handleEdit() {
    props.handleEdit(props.id);
  }

  const title = (
    <div style={{ backgroundColor: props.currentColor }}>
      <h3 className="panel-title-text inline-title">{props.title}</h3>
      <button className="badge" id="edit" onClick={handleEdit}>Edit</button>
      <button className="badge" id="kryss" onClick={handleClick}>X</button>
    </div>
  );
  return (<div className="postit-container">
    <Panel header={title}>
      {props.description}
    </Panel>
  </div>
  );
};

PostIt.propTypes = () => ({
  changeColor: React.PropTypes.func,
  currentColor: React.PropTypes.func
});


export default PostIt;
