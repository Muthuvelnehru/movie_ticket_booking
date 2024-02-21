import "./MovieSeatSelection.css";
import SeatMap from "./SeatMap";


function Seatpage() {
  return (
    <>
      <div className="bgcolor">
        <img
          style={{ width: "100%", height: "180px" }}
          className="mb-5"
          src="https://pixner.net/boleto/demo/assets/images/banner/banner04.jpg"
          alt="image"
        />
        <div className="text-center mb-5">
          <img
            style={{ width: "60%", height: "10%" }}
            src="https://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png"
            alt="image"
          />
        </div>
        <div className="mb-5">
          <SeatMap />
        </div>
        
        <h>.</h>
      </div>
    </>
  );
}

export default Seatpage;
