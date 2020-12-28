import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.jsx'
import {SearchField} from './components/search-box/search-box.jsx'


class App extends React.Component{

  constructor(){
    super();

    this.state={

    monsters : [],
    searchField : ''
  };
  }

componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users').then(result=>result.json()).then(users=>
  this.setState({monsters : users}));
}

  render(){

    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter((monsters)=>monsters.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
   <div className = "App">
    <h1>Monter Mania</h1>
     <SearchField type="search" placeholder="monster name" onChange={(event)=>{
       this.setState({searchField : event.target.value},()=>console.log(this.state.searchField))
     }}></SearchField>
        
            <CardList monsters={filteredMonsters}>
            
             </CardList>
  
  </div>
    );
  }
}

export default App;
