import React from "react";
import '../css/responsiveNav.css';
import * as GiIcons from "react-icons/gi";
import * as GrIcons from "react-icons/gr";
import { useStore } from "../store/utils";

const Navigation = ({children}) => {
  const [state, btnNav, btntabs] = useStore()

  const handleBtn = () => {
    btnNav({type: 'ADD_VALUE', value: !state.value})
    btntabs({type: 'ADD_TABS', value: true})
  }

  return (
  <div className='container-fluid'>
    <div className="container-fluid containerNav">
      <div className=" dashNav d-sm-flex mt-2">
        <div className=" content-nav d-flex align-items-center ">
          <div className="logo d-flex align-items-center gap-sm-5 gap-2 fs-4">
            <button onClick={handleBtn} className="btn-nav-dash"><p><GiIcons.GiHamburgerMenu /></p></button> <p className="logo d-flex align-items-center fs-4"><span className="fw-bold">Loan Market  </span>  / <span>  Dashboard</span></p>
          </div>
        </div>

        <div className=" d-flex align-items-center gap-sm-3 gap-2 content-nav justify-content-center ">
        <p className=" d-flex align-items-center fs-3 tbl "><GrIcons.GrPower /></p>
          <p className=" d-flex align-items-center txt-logout fs-sm-5 fs-6">log out</p>
        </div>
      </div>
    </div>
    <div className="felx">
    {children}
    </div>
  </div>
   
  );
};

export default Navigation;
