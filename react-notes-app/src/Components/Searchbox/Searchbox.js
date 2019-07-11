import React from 'react';
import { FaSearch} from 'react-icons/fa';

const Searchbox=({searchnote,onSearchchange})=>{

 return (
 	<div>
 	  <FaSearch className="icon grow"/>
      <input 
        type='search'
        placeholder='search notes by title'
        className="search-container"
        onChange={onSearchchange}
        />
      </div>
 	);

}

export default Searchbox;