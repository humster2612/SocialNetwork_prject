import React from 'react';
import CreatePostPage from '../../../CreatePostPage';

const ContentTabssecond = ({ onlyForm }) => {
  return (
    <div className="content-tabs">
      <div className="content active-content">
        {onlyForm && <CreatePostPage />}
      </div>
    </div>
  );
};

export default ContentTabssecond;
