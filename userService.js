import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () => axios.get(apiUrl);

export const createUser = (user) => axios.post(apiUrl, user);

export const updateUser = (id, user) => axios.put(`${apiUrl}/${id}`, user);

export const deleteUser = (id) => axios.delete(`${apiUrl}/${id}`);
