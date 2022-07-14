import React, {Component} from 'react';
import "./App.css";

export default class App extends Component{
  render(){
    return(<div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>오늘 할 일</h1>
        </div>
      </div>
    </div>)
  }
}