import React from 'react';
import { storiesOf } from '@storybook/react';
import PostCommentWhole from './PostCommentWhole';

storiesOf('PostCommentWhole', module)
  .add("Default", () => (
    <PostCommentWhole />
  )
)
