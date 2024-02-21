import { useNavigate } from "react-router"
import Dropdown from 'react-bootstrap/Dropdown';
function Languagedrop() {
  const navigate = useNavigate()
    return (
      <>

    <Dropdown >
      <Dropdown.Toggle style={{backgroundColor:'transparent' , border:'0' ,height:'30px' ,color:'white'}} id="dropdown-basic">
        Language
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" onClick={()=>navigate('/tamil')}>Tamil</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={()=>navigate('/english')}>English</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=>navigate('/')}>All languages</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
   
  </>
    )
  }
  
  export default Languagedrop

  

   
