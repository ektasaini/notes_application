import React from 'react';

class Createnote extends React.Component {

constructor(props){
  super(props);
  this.state={
    text:'',
    title:'',
    color:'#FFA726'
  }
}
handletextchange=(event)=>{
  this.setState({text: event.target.value});
  
}

handletitlechange=(event)=>{
  this.setState({title:event.target.value});
 
}

handlenoteadd=(e)=>{
  var newnote={
    text:this.state.text,
    title:this.state.title,
    color:this.state.color,
    id:Date.now()
  };
  
  
  this.props.onnoteadd(newnote);
  this.setState({text:''});
  this.setState({title:''});
 e.preventDefault();


}
handleColorChange = (event) => {
    this.setState({color: event.target.value})
  };


 render(){
 return (
     <div className="note-container">
        <h2>Create A Note</h2>
         <div className="color-picker" onChange={this.handleColorChange}>
          <input type="radio" name="color-pick" value="#F06292" id="color1" />
          <label htmlFor="color1" style={{backgroundColor: "#F06292"}}></label>
          <input type="radio" name="color-pick" value="#BA68C8" id="color2" />
          <label htmlFor="color2" style={{backgroundColor: "#BA68C8"}}></label>
          <input type="radio" name="color-pick" value="#FFD54F" id="color3" />
          <label htmlFor="color3" style={{backgroundColor: "#FFD54F"}}></label>
          <input type="radio" name="color-pick" value="#4FC3F7" id="color4" />
          <label htmlFor="color4" style={{backgroundColor: "#4FC3F7"}}></label>
          <input type="radio" name="color-pick" value="#AED581" id="color5" />
          <label htmlFor="color5" style={{backgroundColor: "#AED581"}}></label>
        </div>
        <form className="note-form">
       
          <div className="note-title">
            <input
              className="note-title-input"
              type="text"
              placeholder="Note Title..."
              onChange={this.handletitlechange}
             />
          </div>
          <div className="note-textarea-container">
            <textarea
              className="note-textarea"
              placeholder="Type Here..."
             onChange={this.handletextchange}
               />
             
              
          </div>
          <input 
          
          className="note-button grow" 
          type="submit" 
          value="Submit"
          onClick={this.handlenoteadd} />
        </form>
   
      </div>
  );
}
}

export default Createnote;