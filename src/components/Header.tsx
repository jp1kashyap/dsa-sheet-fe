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
        <h1>DSA Sheet</h1>
      </div>
      <div className="user-icon-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt="User Icon"
          className="user-icon"
        /> {userName}
        <span className='logout' onClick={logout}>Logout</span>
      </div>
    </header>
  );
};

export default Header;