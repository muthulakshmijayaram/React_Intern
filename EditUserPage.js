import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserForm from '../Components/UserForm';
import { getUsers, updateUser } from '../services/userService';

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUsers();
      const selectedUser = response.data.find((u) => u.id === parseInt(id));
      setUser(selectedUser);
    };
    fetchUser();
  }, [id]);

  const handleUpdateUser = async (userData) => {
    await updateUser(id, userData);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit User</h2>
      {user ? <UserForm user={user} onSubmit={handleUpdateUser} /> : <p>Loading...</p>}
    </div>
  );
};

export default EditUserPage;
