import React from "react";
import * as BiIcons from "react-icons/bi";

const ContentUser2 = () => {
  return (
    <div className="content-user2 justify-content-center align-items-center d-flex gap-md-3 gap-4">
      <p className=" icon-user2">
        <BiIcons.BiUserCircle />
      </p>
      <p className="text-end txt-admin" >Admin Office <br /><span className="fw-bold">4</span></p>
    </div>
  );
};

export default ContentUser2;
