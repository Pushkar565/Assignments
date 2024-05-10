import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const Post = React.memo(({ post, toggleVerify }) => {
  const handleToggleVerify = useCallback(() => {
    toggleVerify(post.id);
  }, [post.id, toggleVerify]);

  return (
    <div style={{ backgroundColor: post.bgColor }} className="Post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={handleToggleVerify}>
        {post.verifyPost ? 'Verified' : 'Verify'}
      </button>
    </div>
  );
});

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    verifyPost: PropTypes.bool.isRequired,
    bgColor: PropTypes.string.isRequired,
  }).isRequired,
  toggleVerify: PropTypes.func.isRequired,
};

export default Post;
