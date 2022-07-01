import React from "react";
import '../../../css/responuser.css'
import * as BiIcons from "react-icons/bi";
const ContentUser = () => {
  return (
    <>
      <div className="content1">
        <p className="icon-user text-light">
          <BiIcons.BiUserCircle />
        </p>
        <span className="mt-sm-5 mt-lg-3 mt-xl-5 ">
          <p className="fw-bold txt-user-res text-secondary fs-4">9823</p>{" "}
          <p className="text-secondary fs-5  txt-user-res text-center">User</p>
        </span>
      </div>
    </>
  );
};

export default ContentUser;
