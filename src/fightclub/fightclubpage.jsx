import React from "react";
import "../fightclub/fightclubpage.css";
import BasicExample from "../navbar";
import Footer from "../Footer";
import { Navigate, useNavigate } from "react-router";
function Fightclub() {
  const navigate = useNavigate();
  return (
    <>
      <BasicExample />
      <div id="fclub" className="bgimagefight " style={{ marginTop: "80px" }}>
        <div className="moviename ">
          <h1>Fight Club</h1>
          <p>2023 • 2h 19m</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="text-center col-12 col-lg-3 order-2 order-md-1 align-items-center">
              <img src="https://cmsapi-uae.novocinemas.com/Files//Movie/220x322/fight-club-250x366.jpg" />
              <div className="d-flex justify-content-center m-3">
                <h6 className="jorner ">Action</h6>
                <h6 className="jorner">Drama</h6>
                <h6 className="jorner">Crime</h6>
              </div>
            </div>
            <div className="col-12 col-lg-9 order-1 order-md-2">
              <iframe
                width="100%"
                height="90%"
                src="https://www.youtube.com/embed/oQVhwMYRgFY?si=KE-WeqD34O-8bFKi"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen"
              ></iframe>
            </div>
            <div className=" order-3 p-3  borderbottom">
              <h5>
                Selva a college student with football aspirations grows
                frustrated over lack of opportunity. His anger draws him into
                conflicts impacting himself and family.
              </h5>
            </div>
            <div className=" order-4 p-3 borderbottom">
              <h3 style={{ color: "#00ffff" }}>Director </h3>{" "}
              <p> Abbas A Rahmath</p>
            </div>
            <div className=" order-5 p-3 borderbottom">
              <h3 style={{ color: "#00ffff" }}>Stars </h3>{" "}
              <p> Vijay Kumar • Monisha Mohan Menon • Avinash Raghudevan</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-left m-5">
          <h1 className="selectdate  text-center selectdatetime">
            Fri<p>22</p>
          </h1>
          <h1 className="selectdate  text-center selectdatetime">
            Sat<p>23</p>
          </h1>
          <h1 className="selectdate  text-center selectdatetime">
            Sun<p>24</p>
          </h1>
          <h1 className="selectdate  text-center selectdatetime">
            Mon<p>25</p>
          </h1>
        </div>
        <div className="cinemas">
          <div className="container ">
            <div className="row m-5 borderbottom">
              <div className="col-12 col-md-6">
                <h2>K G Cinemas</h2>
              </div>
              <div className="col-12 col-md-6 d-flex marginbottom ">
                <h1
                  className="selecttime  text-center selectdatetime"
                  onClick={() => navigate("/seatPage")}
                >
                  11:00 am<p>2D</p>
                </h1>
                <h1 className="selecttime  text-center selectdatetime">
                  03:00 pm<p>2D</p>
                </h1>
                <h1 className="selecttime  text-center selectdatetime">
                  06:00 pm<p>2D</p>
                </h1>
              </div>
            </div>
          </div>

          <div className="container ">
            <div className="row m-5 borderbottom">
              <div className="col-12 col-md-6">
                <h2>APA Cinemas</h2>
              </div>
              <div className="col-12 col-md-6 d-flex marginbottom ">
                <h1 className="selecttime  text-center selectdatetime">
                  11:00 am<p>2D</p>
                </h1>
                <h1 className="selecttime  text-center selectdatetime">
                  03:00 pm<p>2D</p>
                </h1>
                <h1 className="selecttime  text-center selectdatetime">
                  06:00 pm<p>2D</p>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Fightclub;
