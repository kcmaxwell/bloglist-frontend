import React from 'react';
import PropTypes from 'prop-types';

function BlogForm({
  addBlog,
  title,
  setTitle,
  author,
  setAuthor,
  url,
  setUrl,
}) {
  return (
    <div>
        <h2>Create new blog</h2>
      <form onSubmit={addBlog}>
        <div>
          Title:
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Author:
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          URL:
          <input value={url} onChange={({ target }) => setUrl(target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  setAuthor: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  setUrl: PropTypes.func.isRequired,
};

export default BlogForm;
