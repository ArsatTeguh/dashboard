import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as AiIcons from "react-icons/ai";
import "../../../css/modal.css";

const containersAnimate = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
const containersModal = {
  initial: { y: "-100vh", opacity: 0 },
  animate: { y: "0", opacity: 1, transition: { delay: 0.3 } },
};

const Modal = ({ modal, setModal }) => {
  

  return (
    <div className="container-fluid">
      <AnimatePresence>
        {modal && (
          <motion.div
            variants={containersAnimate}
            initial="initial"
            animate="animate"
            className="backdrop"
          >
            <motion.div
              key="midals"
              className="contentModal"
              variants={containersModal}
              initial="initial"
              animate="animate"
              exit={{ y: -100, opacity: 0 }}
            >
              <motion.div
                className="exit"
                whileHover={{
                  scale: 1.2,
                }}
              >
                <span onClick={() => setModal(false)}>X</span>
              </motion.div>

              <div className="modals container-fluid">
                <form>
                  <h4 className=" mb-lg-5 mb-md-5 mb-4 fw-bold">Add User</h4>
                  <div className="mb-lg-4 mb-md-4 mb-4">
                    <p className="text-start ">Name</p>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-selec">
                    <p className="text-start">Category</p>
                    <select
                      className="form-select mb-lg-4 mb-md-4 mb-4 text-secondary"
                      aria-label="Default select example"
                    >
                      <option selected>Choose one</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <p className="text-start">Office</p>
                    <select
                      className="form-select mb-lg-4 mb-md-4 mb-4  text-secondary"
                      aria-label="Default select example"
                    >
                      <option selected>Choose one</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-lg-4 mb-md-4 mb-4">
                    <p className="text-start">Phone</p>

                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-lg-4 mb-md-4 mb-4">
                    <p className="text-start">Email</p>

                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-selec">
                    <p className="text-start">Status</p>
                    <select
                      className="form-select mb-lg-5 mb-md-5 mb-4  text-secondary"
                      aria-label="Default select example"
                    >
                      <option selected>Choose one</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="btn-add-user">
                    <button  className="btn-adduser-modal ">
                      <span className="fs-5 px-1"> 
                        {" "}
                        <AiIcons.AiOutlinePlusCircle />
                      </span>{" "}
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modal;
