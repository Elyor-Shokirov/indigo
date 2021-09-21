import React from "react";
import Navbar from "../navbar/navbar-copmonent";
import Footer from "../footer/footer";
import "../finishpage/finish.page.scss";

const FinishPageEnglish = () => {
  return (
    <>
      <Navbar />
      <header>
        <div className="main_second">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="text-info">
                  <h1>Thank you for enrollment!</h1>
                  <p>
                    Indigo will contact you in
                    <span> 48 hours</span>!
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

export default FinishPageEnglish;
