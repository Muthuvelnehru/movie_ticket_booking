import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

function Movieenglish() {
  const navigate = useNavigate()
  return (
    <Card style={{ width: '18rem', backgroundColor:'#032055 ',color:'white'}}>
      <Card.Img onClick={()=>navigate('/transformer')} variant="top" className='image11' src="https://c4.wallpaperflare.com/wallpaper/858/502/420/transformers-age-of-extinction-movies-optimus-prime-wallpaper-preview.jpg" />
      <Card.Body>
        <Card.Title>Transformers</Card.Title>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png'style={{marginLeft:'8%'}} /><span style={{padding:'10px'}}>24%</span>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/cake.png' style={{marginLeft:'25%'}}/><span style={{padding:'10px'}}>76%</span>
        
      </Card.Body>
    </Card>
  );
}

export default Movieenglish;