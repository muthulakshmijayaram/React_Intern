import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserList from '../Components/UserList';
import Pagination from '../Components/Pagination';
import { getUsers, deleteUser } from '../services/userService';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div>
      <h1>User Management</h1>
      <Link to="/users/create">Create User</Link>
      <UserList users={currentUsers} onDelete={handleDelete} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default HomePage;
