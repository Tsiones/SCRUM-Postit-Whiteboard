import React from 'react';
import PostIt from './post-it';

const PostItList = (props) => {
  const postIts = props.postIts;
  console.log(props);
  return (<ul className="list-group">{
      postIts.map(postIt => (
        <li key={postIt.id}>
          <PostIt
            handleRemove={props.handleRemove}
            id={postIt.id}
            description={postIt.description}
            title={postIt.title}
            currentColor={postIt.color}
            handleEdit={props.handleEdit}
          />
        </li>
    )).reverse()
  }</ul>
  );
};

PostItList.propTypes = () => ({
  handleRemove: React.PropTypes.func,
  changeColor: React.PropTypes.func
});

export default PostItList;

//
//
