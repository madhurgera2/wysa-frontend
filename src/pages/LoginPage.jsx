import React from 'react';
import Login from '../components/login/login';
const LoginPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <p className='bold text-4xl mb-10'>LOGIN PAGE</p>
      <Login />
    </div>
  );
};

export default LoginPage;
