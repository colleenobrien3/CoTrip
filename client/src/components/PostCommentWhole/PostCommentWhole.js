
import React from 'react';
import ForumPost from '../ForumPost/ForumPost';
import "./PostCommentWhole.css";

// Function based React Component
const PostCommentWhole = (props) => {

  // Default Class to apply to Component
  let classList = `PostCommentWhole`;

  return(
    <div className='PostCommentWhole'>
      <ForumPost />
    </div>
  );
}

export default PostCommentWhole;
