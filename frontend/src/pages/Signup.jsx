import React, { useState } from 'react';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/auth/register', form);
      setUser(res.data);
      localStorage.setItem('dq_user', JSON.stringify(res.data));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-card">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name (optional)" value={form.name} onChange={handleChange} />
        <input required name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input required name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}