import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts, toggleVerify }) => {
  return (
    <div className="PostList">
      {posts.map((post) => (
        <Post key={post.id} post={post} toggleVerify={toggleVerify} />
      ))}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      verifyPost: PropTypes.bool.isRequired,
      bgColor: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleVerify: PropTypes.func.isRequired,
};

export default PostList;
