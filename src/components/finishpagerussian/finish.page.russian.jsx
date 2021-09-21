import React from "react";
import Navbar from "../navbar/navbar-copmonent";
import Footer from "../footer/footer";
import "../finishpage/finish.page.scss";

const FinishPageRussian = () => {
  return (
    <>
      <Navbar />
      <header>
        <div className="main_second">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="text-info">
                  <h1>Спасибо!</h1>
                  <p>
                    Мы получили Вашу заявку. Indigo свяжется с Вами в течении
                    <span> 48 часов</span>!
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <img
                  className="img_finish"
                  src="../images/fon_baby_finish.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <Footer />
    </>
  );
};

export default FinishPageRussian;
