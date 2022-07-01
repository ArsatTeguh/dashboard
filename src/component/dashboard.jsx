import React from "react";
import Sidebar from "./sidebar";

const Dashboard = ({children}) => {
  return (
    <div className="d-flex">
      <Sidebar />
      {children}      
    </div>
  );
};

export default Dashboard;
