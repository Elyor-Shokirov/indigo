import React from "react";
import { useLocation } from "react-router-dom";

const NoMatch = () => {
  let location = useLocation();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>
              <code>{location.pathname} Bunday Page topilmadi</code>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoMatch;
