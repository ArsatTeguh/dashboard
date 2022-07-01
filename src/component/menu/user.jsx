import React from "react";
import Chart from "./utils/chart";
import '../../css/responuser.css'
import Navigation from "../navigation";
import ContentUser from "./utils/contentUser";
import ContentUser2 from './utils/contentUser2'

const User = () => {
  return (
    <Navigation>
      <div className="container-fluid container-user">
        <div className="tilte-content py-4 py-lg-2">
          <div className="title1">
            <p className="text-infos fs-5 ">
              <span className="fw-bold">Dashboard</span> <br /> <span className="text-secondary">User Quality</span>
            </p>
          </div>
          <div className="title2">
            <button className="btn-dash">Go to CRM</button>
          </div>
        </div>

        <div className="content-user">
          <div className="row content-user1">
            <div className="col-lg-6 col-12 d-flex justify-content-center gap-lg-3 gap-xl-5 gap-2">
              <ContentUser />
              <ContentUser />
              <ContentUser />
            </div>
            <div className=" icon-user2-res col-lg-6 col-12 d-lg-flex flex-start gap-lg-3 gap-xl-5 ">
             <div className="list d-flex flex-column gap-lg-4 gap-2 justify-content-center">
             <ContentUser2 />
             <ContentUser2 />
             <ContentUser2 />
             </div>             
             <div className="list d-flex flex-column gap-lg-4 gap-md-3 gap-1 justify-content-center">
             <ContentUser2 />
             <ContentUser2 />
             <ContentUser2 />
             </div>             
                        
            </div>
          </div>
        </div>
        <div className="container-fluid title2 mt-lg-5 fs-5 mt-2 fw-bold mx-lg-4 mx-0">
            <p className="text-infos">
              Data & Analytics <br /> <span className="text-secondary fw-normal">Show update of Post</span>
            </p>
          </div>
        <div className="chart">
        <Chart />
        </div>
      </div>
    </Navigation>
  );
};

export default User;
