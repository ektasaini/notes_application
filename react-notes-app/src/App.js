import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Searchbox from './Components/Searchbox/Searchbox';
import Createnote from './Components/Createnote/Createnote';
import List from './Components/List/List';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      shownote:false,
      notes:[],
      searchnote:''
       };
  }

 

  onnoteadd=(newnote)=>{
    
    this.state.notes.unshift(newnote);
    this.setState({
    shownote:!this.state.shownote
   })

  }

  handlenotedelete=(note)=>{
    {alert("Note deleted successfully !");}
    var noteid = note.id;
    var newnotes= this.state.notes.filter(function(note){
      return note.id!==noteid;
    });
    this.setState({notes:newnotes});
  }

  togglenote=()=>{
   this.setState({
    shownote:!this.state.shownote
   })

  }

  onSearchchange=(event)=>{
    this.setState({searchnote:event.target.value});
  }


  render() {


    const {shownote,notes,searchnote}=this.state;
    
    const filterednotes=notes.filter(note=>{
     return note.title.toLowerCase().includes(searchnote.toLowerCase())
    })

    return (
      <div className="App">
       <Navigation shownote={shownote} togglenote={this.togglenote} />

       { shownote ?
            <Createnote onnoteadd={this.onnoteadd} />
            :
            <div> 
                <Searchbox searchnote={searchnote} onSearchchange={this.onSearchchange}/>
                <List notes={filterednotes} onnotedelete={this.handlenotedelete} />
                
            </div> }


      
        
       
      </div>
    );
  }
}

export default App;
