import React from 'react';
const Header: React.FC = () => {
const userName=localStorage.getItem("userName")
const logout = ()=> {
    localStorage.clear();
    window.location.reload();
}
  return (
    <header className="header">
      <div className="header-logo">
        <h1>StudyApp</h1>
      </div>
      <div className="user-icon-container">
        <img
          src="http://localhost:3000/user.png"
          alt="User Icon"
          className="user-icon"
        /> {userName}
        <span className='logout' onClick={logout}>Logout</span>
      </div>
    </header>
  );
};

export default Header;