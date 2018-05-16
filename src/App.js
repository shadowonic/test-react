import React, {
  Component
} from 'react';

import './App.css';
import {USERS} from './assets/users';


const listItems = USERS.map((users, index) => 
  <li key = {index} onClick = {(event) => console.log(event.currentTarget.id)} id = {index}>
    <div className = 'image'>
      <img src={users.general.avatar} alt=''></img>
    </div> 
    <div className = 'userName'>
       <div className='userFirstName'>{users.general.firstName}</div>
       <div className ='userLastName'>{users.general.lastName}</div>
    </div>
   </li>
);

class App extends Component {
  render() {
    console.log(USERS);
    console.log(listItems[2]);
    
    return (  <ul>{listItems}</ul>
    )
  }
}

export default App;