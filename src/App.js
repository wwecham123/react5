import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {firebaseConnect} from './firebaseconnect'
import * as firebase from 'firebase'
class App extends Component {

  testpush = ()=>{
      var data = firebase.database().ref('datafornote')
      data.push({
        id : 11,
        content : "asdasdasd",
        title : "ngay nag dep"
      })
    
    }
    deletephantu = (id)=>{
      var data = firebase.database().ref('datafornote');
      data.child(id).remove();
      console.log("phan tu id da xoa " + id )
    }
  render() {
    console.log()
    console.log(firebaseConnect)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <button onClick= {()=>this.testpush()}>aaaaaaaaaaaa</button>
       <button onClick= {()=>this.deletephantu('-LHWBGtk_81Xzrf_d4rK')}>xoa</button>
      </div>
    );
  }
}

export default App;
