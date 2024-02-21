import "./homepage/home.css";
import Citydrop from "./citydrop.jsx";
import Datedrop from "./datedrop.jsx";
import Languagedrop from "./languagedrop.jsx";

function Searchpage() {
  return (
    <>
      <div className="searchimage align-items-center">
        <h5 className="mt-3 welcomenote">Welcome to Film Roll</h5>
        <h2 className="mt-3 moviesearch">
          WHAT MOVIE ARE YOU LOOKING FOR &#129300;
        </h2>
        <div className="d-flex flex-row align-items-center searchbox">
          <div className="container ">
            <div className="row justify-content-around">
              <div
                class="input-group col-xs-12 col-lg-6 dropdown align-items-center mt-4"
                style={{ width: "350px", height: "30px" }}
              >
                <input
                  style={{ backgroundColor: "white" }}
                  type="search"
                  class="form-control rounded mt-2"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <button
                  type="button"
                  class="btn btn-outline-primary mt-2"
                  style={{
                    fontSize: "small",
                    backgroundColor: "primary",
                    color: "white",
                    width: "80px",
                    height: "35px",
                    borderRadius: "8px",
                  }}
                  data-mdb-ripple-init
                >
                  search
                </button>
              </div>
              <div className="d-flex flex-row  align-items-center   col-xs-12 col-lg-2 ">
                <img
                  src="https://pixner.net/boleto/demo/assets/images/ticket/city.png"
                  className="col-xs-12 col-lg-3 logo m-3 image11"
                  alt="logo"
                ></img>
                <Citydrop />
              </div>
              <div className="d-flex flex-row  align-items-center  col-xs-12 col-lg-2 ">
                <img
                  src="https://pixner.net/boleto/demo/assets/images/ticket/date.png"
                  className="col-xs-12 col-lg-3 logo m-3 image11"
                  alt="logo"
                ></img>
                <Datedrop />
              </div>
              <div
                className="d-flex flex-row  align-items-center  col-xs-12 col-lg-2 "
                id="mov"
              >
                <img
                  src="https://pixner.net/boleto/demo/assets/images/ticket/cinema.png"
                  className="col-xs-12 col-lg-3 logo m-3 image11"
                  alt="logo"
                ></img>
                <Languagedrop />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchpage;
