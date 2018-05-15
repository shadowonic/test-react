import React, {
  Component
} from 'react';

import './App.css';
import {USERS} from './assets/users';

const listItems = USERS.map((users) => 
  <li key = {users.general.firstName.toString()}>
    <div className = 'image'>
      <img src={users.general.avatar} alt=''></img>
     </div>  <div className = 'userName'>
       <div className='userFirstName'>{users.general.firstName}</div>
       <div className ='userLastName'>{users.general.lastName}</div>
    </div>
  </li>
);

class App extends Component {
  render() {
    console.log(USERS);
    
    return (  <ul>{listItems}</ul>
    )
  }
}

export default App;