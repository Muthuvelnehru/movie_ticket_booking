import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
function Moviehindi() {
  const navigate = useNavigate()
  return (
    <Card style={{ width: '18rem', backgroundColor:'#032055 ',color:'white'}}>
      <Card.Img variant="top" onClick={()=>navigate('/Pk')} className='image11' src="https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg" />
      <Card.Body>
        <Card.Title>PK</Card.Title>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png'style={{marginLeft:'8%'}} /><span style={{padding:'10px'}}>31%</span>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/cake.png' style={{marginLeft:'25%'}}/><span style={{padding:'10px'}}>69%</span>
        
      </Card.Body>
    </Card>
  );
}

export default Moviehindi;