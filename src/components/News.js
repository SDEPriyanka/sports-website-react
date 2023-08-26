import React from "react";
import Latestnews from "../Commonlink/Latestnews";
import Mostpopular from "../Commonlink/Mostpopular";
import Data from "../Data/lastesnes.json";

function News() {
  console.log(Data);
  return (
    <div>
      <div className="col-md-12  mt-3 ms-2 ">
        <div className="text-center">
          <h2>NEWS</h2>
        </div>
        <div className="row">
        <div className="col-md-6 card" >
          <div className="ln-heading">
            <h2>Latestnews</h2>
            </div>
          <Latestnews />
        </div>
        <div className="col-md-6 card">
        <div className="ln-heading">
            <h2>Mostpopularnews</h2>
            </div>
          <Mostpopular  />
        </div>

        </div>
      </div>
    </div>
  );
}

export default News;
