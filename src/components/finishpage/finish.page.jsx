import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar-copmonent";
import Footer from "../footer/footer";
import Skeleton from "react-loading-skeleton";
import "./finish.page.scss";

const FinishPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <Navbar />
      <header>
        <div className="main_second">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="text-info">
                  {loading ? <Skeleton /> : <h1>Rahmat</h1>}

                  {loading ? (
                    <Skeleton />
                  ) : (
                    <p>
                      Ma'lumotlaringiz qabul qilindi Indigo siz bilan
                      <span> 48 soat</span> ichida bog'lanadi
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-6 col-12">
                {loading ? (
                  <Skeleton circle={true} width={250} height={250} />
                ) : (
                  <img
                    className="img_finish"
                    src="../images/fon_baby_finish.png"
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <Footer />
    </>
  );
};

export default FinishPage;
