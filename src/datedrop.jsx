import { useNavigate } from "react-router"
import Dropdown from 'react-bootstrap/Dropdown';
function Datedrop() {
  const navigate = useNavigate()
    return (
      <>
    <Dropdown >
      <Dropdown.Toggle style={{backgroundColor:'transparent' , border:'0px' ,height:'30px' ,color:'white'}} id="dropdown-basic">
       Date
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" onClick={()=>navigate('/Date8')}>08/02/2004</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={()=>navigate('/Date9')}>09/02/2004</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=>navigate('/Date10')} >10/02/2004</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>
    )
  }
  
  export default Datedrop

  
