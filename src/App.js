import "./homepage/home.css";
import Homepagecontent from "./Homepagecontent";
import Fightclub from "./fightclub/fightclubpage";
import { Route, Routes } from "react-router-dom";
import Pk from "./pk/pkpage";
import Kantara from "./kantara/kantarapage";
import Lucifer from "./lucifer/luciferpage";
import Transformer from "./transformers/transformerspage";
import Maruthu from "./maruthu/maruthupage";
import Tamilpage from "./language/tamilpage";
import Englishpage from "./language/englishpage";
import Date8 from "./date/date8";
import Date9 from "./date/date9";
import Date10 from "./date/date10";
import Karur from "./city/karur";
import Theni from "./city/Theni";
import Coimbatore from "./city/Coimbatore";
import ScrollToTop from "./ScrollToTop";
import Aboutuspage from "./Aboutuspage";
import Signin from "./SignIn/Signin";
import Signup from "./Signup/Signup";
import Seatpage from "./Seatselection/Seatpage";


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route Component={Homepagecontent} path="/"></Route>
        <Route Component={Fightclub} path="/fight"></Route>
        <Route Component={Pk} path="/pk"></Route>
        <Route Component={Kantara} path="/kantara"></Route>
        <Route Component={Lucifer} path="/lucifer"></Route>
        <Route Component={Transformer} path="/transformer"></Route>
        <Route Component={Maruthu} path="/maruthu"></Route>
        <Route Component={Tamilpage} path="/tamil"></Route>
        <Route Component={Englishpage} path="/english"></Route>
        <Route Component={Date8} path="/Date8"></Route>
        <Route Component={Date9} path="/Date9"></Route>
        <Route Component={Date10} path="/Date10"></Route>
        <Route Component={Karur} path="/Karur"></Route>
        <Route Component={Coimbatore} path="/Coimbatore"></Route>
        <Route Component={Theni} path="/Theni"></Route>
        <Route Component={Aboutuspage} path="/about"></Route>
        <Route Component={Signin} path="/signin"></Route>
        <Route Component={Signup} path="/signup"></Route>
        <Route Component={Seatpage} path="/seatPage"></Route>
      </Routes>
    </>
  );
}

export default App;
