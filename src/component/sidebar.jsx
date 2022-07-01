import React from "react";
import '../css/responsiveDash.css'
import "../css/dashboard.css";

import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import { useStore } from "../store/utils";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [state, btntabs] = useStore()


  return (
    

     <div className={state.value ? 'sidebars ' : 'sidebars actives '}>
      <div className={state.value ? 'profil-dash text-light mt-3' : 'profil-dash-active text-light mt-3 '}>
        <div className={state.value ? 'loan' : 'loan loan-active'}>
          <span className={state.value ? 'loan2 fw-bold' : 'loan2 fw-bold '}>
            Loan <br /> Market
          </span>
        </div>
        <p className={state.value ? 'mt-3' : 'mt-3 author-active'}>Yoseph Duna <br /><span className="text-secondary">Author</span></p>
      </div>

      <div className="sidebar mt-5  ">
        <div className="list d-flex flex-column justify-content-center">
         <NavLink onClick={()=> btntabs({type: 'ADD_TABS', value: false})} to='/dashboard' end>
         <div className="list-nav text-light d-flex align-items-center gap-3"
         >
          <span className={state.value ? '' : 'margin-normal'}><AiIcons.AiOutlineHome /></span> <span className={state.value ? '' : 'list-side-active'}>Dashboard</span>
          </div>
         </NavLink>
        <NavLink onClick={()=> btntabs({type: 'ADD_TABS', value: false})} to='/usermanagement'>
        <div className="list-nav text-light d-flex align-items-center gap-3">
         <span className={state.value ? '' : 'margin-normal'}> <AiIcons.AiOutlineUser /></span> <span className={state.value ? '' : 'list-side-active'}>User Management</span>
          </div>
        </NavLink>
          <div className="list-nav text-light d-flex align-items-center gap-3">
         <span className={state.value ? '' : 'margin-normal'}> <BiIcons.BiPencil /></span> <span className={state.value ? '' : 'list-side-active'} > News</span> <div className="icon-dash"><span>^</span></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Sidebar;
