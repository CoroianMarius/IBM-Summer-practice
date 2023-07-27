import React from 'react';
import Link from 'next/link';
import notLogedStyles from '@/css/notLogedIn.module.css';

const NotAdmin = () => {
  const handleLoginClick = () => {
    window.location.href = '/';
  };

  return (
    <div className={notLogedStyles.container}>
      <div className={notLogedStyles.mainContainer}>
        <h1>You are not an Admin</h1>
        <p>You can't access this page</p>
        <button className={notLogedStyles.button} onClick={handleLoginClick}>
          Go to HOMEPAGE
        </button>
      </div>
    </div>
  );
};

export default NotAdmin;
