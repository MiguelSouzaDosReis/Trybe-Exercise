import React from 'react';

class UserProfile extends React.Component {
  render() {
    const {id, name, email, avatar} = this.props.user;

    return (
      <div>
          <p> Id: {id}</p>
          <p> Nome: {name}</p>
          <p> Email: {email} </p>
          <img src = {avatar}></img>
      </div>

 
    );
  }
}

export default UserProfile;