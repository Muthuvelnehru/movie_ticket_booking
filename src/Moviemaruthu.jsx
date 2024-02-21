import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

function Moviemaruthu() {
  const navigate =useNavigate()
  return (
    <Card style={{ width: '18rem', backgroundColor:'#032055 ',color:'white'}}>
      <Card.Img variant="top" onClick={()=>navigate('/maruthu')} className='image11' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4b6dd420816237.562f1968b8382.jpg" />
      <Card.Body>
        <Card.Title>Marudhanayagam</Card.Title>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png'style={{marginLeft:'8%'}} /><span style={{padding:'10px'}}>10%</span>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/cake.png' style={{marginLeft:'25%'}}/><span style={{padding:'10px'}}>90%</span>
        
      </Card.Body>
    </Card>
  );
}

export default Moviemaruthu;