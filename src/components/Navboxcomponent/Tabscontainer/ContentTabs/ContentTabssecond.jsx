import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './ContentTabssecond.css';
// import MyPostsContainer from './MyPosts/MyPostsContainer';
import CreatePostPage from '../../../CreatePostPage';

const ContentTabssecond = (props) => {
  const { toggleState, store } = props;

  return (
    <div className="content-tabs">
      <div className={toggleState === 1 ? 'content active-content' : 'content'}>
        <div className="post-header">
          <div className="media">
            <div className="activity-avatar">
              <img
                alt=""
                className="avatar"
                src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg"
              />
            </div>
            <div className="status-info">
              <div className="activity-title">
                <div className="user-info-container">
                  <FaCheck className="check-icon" />
                  <a href="https://www.radiustheme.com/demo/wordpress/themes/cirkle/members/admin/" className="user-link">Rebeca Powel</a>
                </div>
                <span className="second-user-container">posted an update</span>
                <div className="activity-time">3 years ago</div>
              </div>
            </div>
          </div>
        </div>
<CreatePostPage/>
        {/* <MyPostsContainer  /> */}
        
      </div>
    </div>
  );
};

export default ContentTabssecond;