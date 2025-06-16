import React from "react";
import "./Tabscontainer.css";

import ContentTabssecond from "./ContentTabs/ContentTabssecond"; // для CreatePostPage

function Tabscontainer() {
  return (
    <div>
    

      <div className="secondContainer" style={{ marginTop: '40px' }}>
        <ContentTabssecond onlyForm={true} /> {/* Только CreatePostPage */}
      </div>
    </div>
  );
}

export default Tabscontainer;
