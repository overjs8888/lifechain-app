import { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('登入成功');
    } catch (error) {
      alert('登入失敗：' + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('Google 登入成功');
    } catch (error) {
      alert('登入失敗：' + error.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🔐 登入</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="密碼" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleEmailLogin}>📧 Email 登入</button>
      <button onClick={handleGoogleLogin}>🔵 Google 登入</button>
    </div>
  );
}