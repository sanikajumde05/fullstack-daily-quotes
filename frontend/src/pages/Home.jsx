import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [newQuote, setNewQuote] = useState({ text: '', author: '' });
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await api.get('/quotes/today');
        setQuote(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  const handleAdd = async e => {
    e.preventDefault();
    setMsg('');
    try {
      // create quote (requires auth)
      const token = JSON.parse(localStorage.getItem('dq_user'))?.token;
      await api.post('/quotes', newQuote, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMsg('Quote added. Refresh to see it appear randomly.');
      setNewQuote({ text: '', author: '' });
    } catch (err) {
      setMsg(err.response?.data?.message || 'Failed to add');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Daily Quote</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <blockquote className="quote">
          <p>"{quote?.text}"</p>
          <footer>- {quote?.author || 'Unknown'}</footer>
        </blockquote>
      )}

      <hr />

      {user ? (
        <div>
          <h3>Add a new quote</h3>
          <form onSubmit={handleAdd}>
            <input placeholder="Quote text" required value={newQuote.text} onChange={e => setNewQuote({ ...newQuote, text: e.target.value })} />
            <input placeholder="Author" value={newQuote.author} onChange={e => setNewQuote({ ...newQuote, author: e.target.value })} />
            <button type="submit">Add Quote</button>
          </form>
          {msg && <p>{msg}</p>}
        </div>
      ) : (
        <p>Login to add quotes.</p>
      )}
    </div>
  );
}