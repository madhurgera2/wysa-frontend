import React from 'react';
import Register from '../components/register/Register';

const RegisterPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <p className='bold text-4xl mb-10'>Register Page</p>
      <Register />
    </div>
  );
};

export default RegisterPage;
