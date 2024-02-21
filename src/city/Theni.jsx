import '../homepage/home.css';
import Homecontent from '../Homecontent';
import Searchpage from '../Searchpage'
import Moviemaruthu from '../Moviemaruthu';
import Footer from '../Footer'
import BasicExample from '../navbar';
import Moviekannada from '../Moviekannada';
import Moviemalayalam from '../Moviemalayalam';
import Movieenglish from '../Movieenglish';
function Theni() {
  return (
    <>
    <BasicExample/>
    <div className="bgcolor">
     
       <div style={{borderTopStyle:'solid',borderColor:'white' }}>
      <Homecontent/>
      </div>
      <Searchpage />
      <div className='text-center p-3' style={{color:'white' }}>
      <h1>MOVIES</h1>
      <p>Be sure not to miss these Movies today.</p>
      </div>
      <div className='movielist '>
        <div className='container '>
            <div className='row'>
            <div className='p-3 col-12 col-md-6 col-lg-4 text'>
                <Moviekannada/>
              </div>
              <div className='p-3 col-12 col-md-6 col-lg-4 text'>
                <Moviemalayalam/>
              </div>
              <div className='p-3 col-12 col-md-6 col-lg-4 text'>
                <Movieenglish/>
              </div>
              <div className='p-3 col-12 col-md-6 col-lg-4 text'>
                <Moviemaruthu/>
              </div>
            </div>
          </div>
        </div>
        <Footer className='footercolor'/>
      </div>
      </>
  );
}

export default Theni;
