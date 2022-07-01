import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import chartSvg from "../../../img/line.png";
import chartSvg2 from "../../../img/line2.png";
import chartSvg3 from "../../../img/line3.png";

const Chart = () => {
  return (
    <div className="container-fluid">
      <div className="containers">
        <div className="row chart-res0 mx-lg-4 mx-xl-5">
          <div className="col-sm-6 chart1 gap-lg-2 gap-xl-5">
            <div className="color-nav1 chart-content1 d-flex align-items-center justify-content-center">
              <div className="text-chart">
                <p className="text-secondary">
                  Belum diproses <br />{" "}
                  <span className="text-black">9,123</span>
                </p>
              </div>
              <div className="img-chart d-flex">
                <img className="img-chart1" src={chartSvg} alt="" />
              </div>
            </div>

            <div className="color-nav2 chart-content2 d-flex align-items-center justify-content-center">
              <div className="text-chart">
                <p className="text-secondary">
                  Sudah diproses <br />{" "}
                  <span className="text-black">22,643</span>
                </p>
              </div>
              <div className="img-chart d-flex">
                <img className="img-chart1" src={chartSvg2} alt="" />
              </div>
            </div>
          </div>
          <div className="color-nav3 col-sm-6 d-flex  align-items-center justify-content-start">
            <div className="text-chart ">
              <p className="text-secondary">
                Costumer <br /> <span className="text-black">78,623</span>
              </p>
            </div>
            <div className="img-chart d-flex">
              <img className="img-chart1" src={chartSvg3} alt="" />
            </div>
          </div>
        </div>

        <div className="row  mt-xl-2 mt-lg-1  d-sm-flex justify-content-center">
          <div className="chart-res1 col-sm-6 px-5">
            <div className="persen-content ">
              <div className="text-content-chart d-flex justify-content-between">
                <p>
                  <span className="fs-5">
                    <MdIcons.MdOutlineDoNotDisturb />
                  </span>{" "}
                  <span>Belum diproses</span>
                </p>
                <p className="fw-bold">43%</p>
              </div>
              <div className="persen1">
                <span className="persen"></span>
              </div>
            </div>
            <div className="persen-content mt-lg-1 mt-xl-3 mt-3">
              <div className="text-content-chart d-flex justify-content-between">
                <p>
                  <span className="fs-5">
                    <AiIcons.AiOutlineCheckCircle />
                  </span>{" "}
                  <span>Sudah diproses</span>
                </p>
                <p className="fw-bold">37%</p>
              </div>
              <div className="persen2">
                <span className="persen"></span>
              </div>
            </div>
          </div>
          <div className="col-sm-6  ">
            <div className="persen-content">
              <div className="text-content-chart d-flex justify-content-between">
                <p>
                  <span className="fs-5">
                    <FaIcons.FaMale />
                  </span>
                  <span>Pria</span>
                </p>
                <p className="fw-bold">43%</p>
              </div>
              <div className="persen3">
                <span className="persen"></span>
              </div>
            </div>
            <div className="persen-content mt-lg-1 mt-xl-3">
              <div className="text-content-chart d-flex justify-content-between">
                <p>
                  <span className="fs-5">
                    <FaIcons.FaFemale />
                  </span>{" "}
                  <span>Wanita</span>
                </p>
                <p className="fw-bold">37%</p>
              </div>
              <div className="persen3 persen4">
                <span className="persen"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
