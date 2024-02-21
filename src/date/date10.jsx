
import '../homepage/home.css';
import Homecontent from '../Homecontent';
import Searchpage from '../Searchpage'
import Moviekannada from '../Moviekannada';
import Moviemalayalam from '../Moviemalayalam';
import Moviehindi from '../Moviehindi';
import Movieenglish from '../Movieenglish'
import Footer from '../Footer'
import BasicExample from '../navbar';
function Date10() {
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
                <Moviehindi/>
              </div>   
              <div className='p-3 col-12 col-md-6 col-lg-4 text'>
                <Moviekannada/>
              </div>  
              <div className='p-3 col-12 col-md-6 col-lg-4 text'>
                <Moviemalayalam/>
              </div>  
              <div className='p-3 col-12 col-md-6 col-lg-4 text'>
                <Movieenglish/>
              </div> 
            </div>
          </div>
        </div>
        <Footer className='footercolor'/>
      </div>
      </>
  );
}

export default Date10;
