import React, { useState, useEffect } from 'react';

const UserForm = ({ user, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
    phone: user ? user.phone : '',
  });

  useEffect(() => {
    if (user) {
      setFormData({ name: user.name, email: user.email, phone: user.phone });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
