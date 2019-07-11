import React from 'react';
import logo from'./logo.png';
import { FaPlusCircle} from 'react-icons/fa';
import { FaTimesCircle} from 'react-icons/fa';

const Navigation=({shownote,togglenote})=>{

 return (
       <div className="nav-container">
       <div className="nav-logo grow">
       <img alt='logo' src={logo} className="logo grow"/>
         Notes
       </div>
       <div onClick={()=>togglenote()}>
       {shownote
        ?  <button className="nav-button grow br3" ><FaTimesCircle/>cancel</button>
        :  <button className="nav-button grow br3" ><FaPlusCircle/> Note</button>
       }
       
      </div>
       </div>
 	);

}

export default Navigation;