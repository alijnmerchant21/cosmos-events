import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../firebase';

function LoginForm() {
  const history = useHistory();

  function handleSignIn() {
    auth.signInWithPopup(provider).then(() => {
      history.push('/');
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
}

export default LoginForm;
