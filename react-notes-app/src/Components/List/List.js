import React,{Component } from 'react';
import { FaRegTrashAlt} from 'react-icons/fa';

class List extends React.Component{

 
  render(){
const{ onnotedelete}=this.props;

return (
     <div>

     {
       this.props.notes.map(function(note){
        
        const style ={backgroundColor:note.color};
         return(
                 
                  
                  <div className="note-card-container  br3 dib shadow-5 " >
                      <div className="note-card-title" style={style}>
                       {note.title}
                      </div>
       
                      <div className="note-card-content">
                       {note.text}
                       </div>
       
                      <div
                       className="note-card-delete"
                      onClick={onnotedelete.bind(null,note)}
                      >
                      <FaRegTrashAlt/>
                      </div>
                   
                 </div>
               
               );

            })
        }
    
     
  </div>
   
   );
 
 }
}

export default List;
