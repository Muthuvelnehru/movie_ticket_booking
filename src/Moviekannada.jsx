import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
function Moviekannada() {
  const navigate = useNavigate()
  return (
    <Card style={{ width: '18rem', backgroundColor:'#032055 ',color:'white'}}>
      <Card.Img variant="top" onClick={()=>navigate('/kantara')} className='image11' src="https://gallery.123telugu.com/content/slideshows/2023/11/Kantara27/images/Kantara%20(1).jpg" />
      <Card.Body>
        <Card.Title>Kantara</Card.Title>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png'style={{marginLeft:'8%'}} /><span style={{padding:'10px'}}>25%</span>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/cake.png' style={{marginLeft:'25%'}}/><span style={{padding:'10px'}}>75%</span>
        
      </Card.Body>
    </Card>
  );
}

export default Moviekannada;