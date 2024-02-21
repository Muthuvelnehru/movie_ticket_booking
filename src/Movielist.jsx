import { useNavigate } from 'react-router';
import Card from 'react-bootstrap/Card';
import {Link as scrolllink} from 'react-scroll'

function MovieFightclub() {
  const navigate =useNavigate()
  return (
    <Card  style={{ width: '18rem', backgroundColor:'#032055 ',color:'white'}}>
      <Card.Img onClick={() =>navigate('/fight')}  variant="top" className='image11' src="https://cmsapi-uae.novocinemas.com/Files//Movie/220x322/fight-club-250x366.jpg" />
      <Card.Body>
        <Card.Title >Fight club</Card.Title>
        <img  src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png'style={{marginLeft:'8%'}} /><span style={{padding:'10px'}}>29%</span>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/cake.png' style={{marginLeft:'25%'}}/><span style={{padding:'10px'}}>71%</span>

      </Card.Body>
    </Card>
  );
}

export default MovieFightclub;
        