import React, { useState } from "react";
import "../../css/tabs.css";
import "../../css/responusermanagement.css";
import '../../css/modal.css'
import Navigation from "../navigation";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import Modal from "./utils/modal";
import { dataTitle} from "./utils/dataTabs";
import dataContent from './utils/MOCK_DATA.json'
import ReactPaginate from "react-paginate";

const UserManagement = () => {
  const [modal, setModal] = useState(false)
  const [toggleState, setToggleState] = useState(1);
  const [page, setPage] = useState(0);
  const [filters, setFilter] = useState('')

  const jumlahDataPerPage = 9;
  const pagesVisited = page * jumlahDataPerPage;
  
  const data = dataContent.filter((value) => {
    if(filters === '') {
      return value;
    }else if(value.nama.toLowerCase().includes(filters.toLowerCase())){
      return value
    }
  })

  const pageCount = Math.ceil(data.length / jumlahDataPerPage)

  const changePage = ({selected}) => {
    setPage(selected);
  }

  const handeletabs = (id) => {
    setToggleState(id);
  };



  return (
    <Navigation>
      <div className="container-fluid container-user">
        <div className="adduser d-flex justify-content-center align-items-end flex-column container-fluid py-2  px-3  ">
          <button onClick={() => setModal(true)} className=" btn-adduser align-items-center d-flex gap-2">
            <span className="fs-5 icon-add">
              <AiIcons.AiOutlineUserAdd />
            </span>
           <span> Add User</span>
          </button>
         
        </div>
        {modal && <Modal modal={modal} setModal={setModal} />}
        <div className="pembungkus">
          <div className="find d-flex  gap-2 justify-content-center p-3">
            <div className="input-group mb-1">
              <span
                className="input-group-text fs-5 icon-find"
                id="basic-addon1"
              >
                <AiIcons.AiOutlineSearch />
              </span>
              <input
                type="text"
                className="form-control form-find"
                placeholder="Enter Keyword"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setFilter(e.target.value) }
              />
            </div>
            <div className="">
              <button className="btn-dash btn-fill d-flex gap-2">
                <span>
                  <BsIcons.BsFunnel />
                </span>{" "}
                Filter
              </button>
            </div>
          </div>

          <div className="datalist">
            <div className="bloc-tabs">
              {dataTitle.map((data, index) => (
                <button
                  className={
                    toggleState === data.id ? "tabs active-tabs" : "tabs"
                  }
                  onClick={() => handeletabs(data.id)}
                  key={index}
                >
                  {data.title}
                </button>
              ))}
            </div>

            <div className="content-tabs container-fluid">
              <div
                className={
                  toggleState === 1
                    ? "content  active-content mt-1"
                    : "content mt-1"
                }
              >
               <div className="tabel-data">
               <table className="table table-striped table-hover">
                  <thead>
                    <tr className="form-head">
                      <th>No</th>
                      <th className="form-name">Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    
                  
                    data.slice(pagesVisited, pagesVisited + jumlahDataPerPage)
                    .map((data, index) => (
                      <tr className="form-body" key={index}>
                        <td>{data.id}</td>
                        <td>{data.nama}</td>
                        <td>{data.phone}</td>
                        <td>{data.email}</td>
                        <td className="d-flex gap-sm-4 gap-2">
                          <button className="form-btn1">Edit</button>{" "}
                          <button className="form-btn2">Delete</button>
                        </td>
                      </tr>
                    ))

                  }
                 
                  </tbody>
                </table>
               </div>
              </div>

              <div
                className={
                  toggleState === 2
                    ? "content  active-content mt-3"
                    : "content mt-3"
                }
              >
                <h1>AUTHOR</h1>
              </div>
              <div
                className={
                  toggleState === 3
                    ? "content  active-content mt-3"
                    : "content mt-3"
                }
              >
                <h1>SUPER ADMIN</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            toggleState === 1
              ? "content panigation  active-content "
              : "content mt-3"
          }
        >
            <ReactPaginate 
                    previousLabel= {'Previous'}
                    nextLabel={'Next'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginattionBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisable'}
                    activeClassName={'paginationActive'}
                   />
        </div>
      </div>
    </Navigation>
  );
};

export default UserManagement;
