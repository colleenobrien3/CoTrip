
import React from 'react';
import ForumPost from '../ForumPost/ForumPost';
import CommentBody from '../CommentBody/CommentBody';
import "./PostCommentWhole.css";

// Function based React Component
const PostCommentWhole = (props) => {

  return(
    <div className='PostCommentWhole'>
      <ForumPost />
      <CommentBody body="Hello" date="today" time="12 pm"/>
    </div>
  );
}

export default PostCommentWhole;
