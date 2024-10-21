import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../Components/UserForm';
import { createUser } from '../services/userService';

const CreateUserPage = () => {
  const navigate = useNavigate();

  const handleCreateUser = async (userData) => {
    await createUser(userData);
    navigate('/');
  };

  return (
    <div>
      <h2>Create User</h2>
      <UserForm onSubmit={handleCreateUser} />
    </div>
  );
};

export default CreateUserPage;
