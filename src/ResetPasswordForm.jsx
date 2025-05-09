import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { uid, token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!uid || !token) {
      setMessage('Virheellinen linkki.');
    }
  }, [uid, token]);

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Salasanat eivät täsmää.');
      return;
    }

    const data = {
      uid,
      token,
      new_password: newPassword,
    };

    try {
      const response = await fetch('https://projekti2025backend-e0dubhd7e5h6akcw.swedencentral-01.azurewebsites.net/api/password-reset-confirm/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage('Salasana on vaihdettu onnistuneesti!');
        setError('');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.token || errorData.uid || 'Jotain meni pieleen. Yritä uudelleen.');
      }
    } catch (err) {
      console.error('Virhe:', err);
      setError('Salasanan vaihto epäonnistui.');
    }
  };

  if (!uid || !token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <p className="text-red-600 text-lg">Virheellinen linkki. Tarkista sähköposti.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Vaihda salasanasi</h2>

        {message && (
          <div className="mb-4 p-3 text-sm rounded bg-green-100 text-green-800">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 text-sm rounded bg-red-100 text-red-800">
            {error}
          </div>
        )}

        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">Uusi salasana</label>
            <input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Vahvista salasana</label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full !bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md shadow"
          >
            Vaihda salasana
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
