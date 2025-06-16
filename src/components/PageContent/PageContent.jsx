import React from 'react';
import s from './PageContent.module.css';
import InfoBanner from './BannerContent/InfoBanner/InfoBanner';
import ContentTabsPhotos from '../Navboxcomponent/Tabscontainer/ContentTabs/ContentTabsPhotos';

const PageContent = ({ profile, updateStatus }) => {
  return (
    <div className={s.pageWrapper}>
      <div className={s.bannerback}>
        <InfoBanner />
      </div>

      <div className={s.contentLayout}>
        <div className={s.rightContent}>
          <h2 className={s.photoTitle}>MY PHOTOS</h2>
          <ContentTabsPhotos toggleState={4} />
        </div>
      </div>
    </div>
  );
};

export default PageContent;
