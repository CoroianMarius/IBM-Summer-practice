import React from 'react';
import Link from 'next/link';
import notLogedStyles from '@/css/notLogedIn.module.css';

const NotLogged = () => {
  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  return (
    <div className={notLogedStyles.container}>
      <div className={notLogedStyles.mainContainer}>
        <h1>You are not logged in</h1>
        {/* Button for login */}
        <button className={notLogedStyles.button} onClick={handleLoginClick}>
          Login
        </button>
        <p>
          If you don't have an account you can{' '}
          <Link href="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotLogged;
