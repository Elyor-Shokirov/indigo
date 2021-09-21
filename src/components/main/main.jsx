import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="Nav">
        <img
          alt=""
          src="../images/logo.png"
          className="d-inline-block align-top"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="main-text">
              <h1 className="admission_text">Admission</h1>
              {/* <Typical
                className="admission_text"
                steps={[
                  "Addmission",
                  3000,
                  "Xush kelibsiz",
                  3000,
                  "Добро пожаловать",
                  3000,
                ]}
                loop={Infinity}
                wrapper="b"
              /> */}
              <div className="main-title">
                <span className="firs_span_title">OPEN FOR </span>
                <span className="second_span_title">2021-2022</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="buttons">
              <Button
                className="btn_group"
                variant="contained"
                color="secondary"
              >
                <Link to="/english" className="btn_group_btn">
                  English
                </Link>
              </Button>
              <Button
                className="btn_group"
                variant="contained"
                color="secondary"
              >
                <Link to="/russian" className="btn_group_btn">
                  РУССКИЙ
                </Link>
              </Button>
              <Button
                className="btn_group"
                variant="contained"
                color="secondary"
              >
                <Link to="/uzbek" className="btn_group_btn">
                  O'zbekcha
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="call_center_all">
              <p className="call_center">Call center</p>
              <p>(91) 111-11-30</p>
              <p>(90) 111-11-30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
