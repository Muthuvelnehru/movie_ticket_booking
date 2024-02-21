import { useNavigate } from "react-router"
import Dropdown from 'react-bootstrap/Dropdown';

function Citydrop() {
  const navigate = useNavigate()
  return (
    <>
    <Dropdown >
      <Dropdown.Toggle style={{backgroundColor:'transparent' , border:'0px' ,height:'30px' ,color:'white'}} id="dropdown-basic">
       City
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" onClick={()=>navigate('/karur')}>Karur</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={()=>navigate('/Coimbatore')}>Coimbatore</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=>navigate('/Theni')}>Theni</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</>
  )
}



export default Citydrop



