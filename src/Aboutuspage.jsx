
import './homepage/home.css';
import Footer from './Footer'
import BasicExample from './navbar';
import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger'
function Aboutuspage() {
    const [counterOn,setCounterOn] = useState(false);
  return (
    <>
   
    <div className="bgcolor fontabout " style={{color:"white" ,fontFamily: "Open Sans, sans-serif"}}>
    <BasicExample/>
        <div className='aboutimage'>
        <h1 className='aboutuscontent text-center '>About Us</h1>
        </div>
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-12 col-md-6 justify-center'>
                    <h5 className='mb-3' >We are <span style={{fontWeight:'bold',fontFamily:'cursive',color:'#00ffff'}}>FilmRoll</span></h5>
                    <h2 className='mb-3' style={{color:'#00ffff'}}>GET TO KNOW US</h2>
                    <p className='mb-3 ' style={{textAlign:'left',textIndent:'26px'}}>Welcome to <span style={{fontWeight:'bold',fontFamily:'cursive',color:'#00ffff'}}>FilmRoll</span>, where we transform your movie-watching experience into a seamless, enjoyable journey.With our user-friendly interface, secure transactions, and exclusive deals, we prioritize your convenience and entertainment.</p>
                    <p style={{textIndent:'26px'}}> Join our vibrant community of movie enthusiasts, stay updated on social media, and let us be your go-to platform for hassle-free and delightful movie experiences. Thank you for choosing <span style={{fontWeight:'bold',fontFamily:'cursive',color:'#00ffff'}}>FilmRoll</span>—your gateway to cinematic adventures!</p>
                </div>
                <div className='col-12 col-md-6'>
                    <img src="https://pixner.net/boleto/demo/assets/images/about/about01.png" style={{width:'100%'}} alt="" />
                </div>
            </div>
        </div>

        <div className='container '>
            <div className='row'>
                <div className='col-12 col-md-6 order-1 order-md-0' >
                    <img src="https://pixner.net/boleto/demo/assets/images/about/about-bg.jpg" style={{width:'100%'}} alt="" />
                </div>
                <div className='col-12 col-md-6 justify-center mt-5 order-0 order-md-1'>
                    
                    <h2  style={{color:'#00ffff',fontFamily:'cursive',marginBottom:'18px'}}>OUR PHILOSOPHY</h2>
                    <p style={{textIndent:'26px'}}>We believe in the transformative power of cinema to create lasting memories and emotional connections. Our mission is to provide a seamless and enjoyable movie-going experience that goes beyond just ticket booking.</p>
                    <div className='d-flex flex-row m-5'>
                        <img style={{marginRight:'23px'}} src="https://pixner.net/boleto/demo/assets/images/philosophy/icon1.png" alt="" />
                        <h5 >Honesty & Fairness</h5>
                    </div>
                    <div className='d-flex flex-row m-5'>
                        <img  style={{marginRight:'23px'}} src="https://pixner.net/boleto/demo/assets/images/philosophy/icon2.png" alt="" />
                        <h5>Clarity & Transparency</h5>
                    </div>
                    <div className='d-flex flex-row m-5'>
                        <img  style={{marginRight:'23px'}} src="https://pixner.net/boleto/demo/assets/images/philosophy/icon3.png" alt="" />
                        <h5>Focus on Customers</h5>
                    </div>
                </div>
            </div>
        </div>


        <div className='container  mb-5'>
            <div className='row'>
            <div className='col-12 col-md-6 justify-center mt-5'>  
                <h1  style={{color:'#00ffff',fontFamily:'cursive'}}>GUARANTEES YOU CAN TRUST</h1>
                <div className='d-flex flex-row m-5'>
                    <img style={{marginRight:'23px',height:'70px'}} src="https://pixner.net/boleto/demo/assets/images/tour/icon01.png" alt="" />
                    <div>
                        <h2>Get In Guarantee</h2>
                        <p>Authentic tickets, on-time delivery, and access to your event. Or your money back. Period.</p>
                    </div>
                </div>
                <div className='d-flex flex-row m-5'>
                    <img  style={{marginRight:'23px',height:'70px'}} src="	https://pixner.net/boleto/demo/assets/images/tour/icon02.png" alt="" />
                    <div>
                    <h2>Price Match Guarantee</h2>
                    <p>The best prices are here. If you spot a better deal elsewhere, we’ll cover the difference.</p>
                    </div>
                </div>
            </div>
                <div className='col-12 col-md-6'>
                    <img src="	https://pixner.net/boleto/demo/assets/images/tour/tour.png" style={{width:'100%'}} alt="" />
                </div>
            </div>
        </div>
     
   

    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      <div className='container boxcountry text-center  mb-5'>
            <div className='row'>
            
                <div className='col-6 col-md-3'>
                    <img src="https://pixner.net/boleto/demo/assets/images/about/about-counter01.png" alt="" />
                    <h2 > 
                       {counterOn && <CountUp start={0} end={30} duration={2} delay={0}/>}M +
                    </h2>
                    <h5  style={{color:'#00ffff',fontFamily:'cursive'}}>customers</h5>
                </div>

                <div className='col-6 col-md-3'>
                    <img src="https://pixner.net/boleto/demo/assets/images/about/about-counter02.png" alt="" />
                    <h2 > 
                    {counterOn && <CountUp start={0} end={11} duration={1} delay={0}/>}
                    </h2>
                   <h5  style={{color:'#00ffff',fontFamily:'cursive'}}>countries</h5>
                </div>

                <div className='col-6 col-md-3'>
                    <img src="https://pixner.net/boleto/demo/assets/images/about/about-counter03.png" alt="" />
                    <h2 > 
                    {counterOn && <CountUp start={0} end={234} duration={3} delay={0}/>}
                    </h2>
                    <h5  style={{color:'#00ffff',fontFamily:'cursive'}}>cities</h5>
                </div>

                <div className='col-6 col-md-3'>
                    <img src="https://pixner.net/boleto/demo/assets/images/about/about-counter04.png" alt="" />
                    <h2 > 
                    {counterOn && <CountUp start={0} end={5000} duration={3} delay={0}/>} +
                    </h2>
                    <h5  style={{color:'#00ffff',fontFamily:'cursive'}}>Screens</h5>
                </div>
            
            </div>
        </div>
        </ScrollTrigger>
        <Footer className='footercolor'/>
        </div>

        
      </>
  );
}

export default Aboutuspage;
