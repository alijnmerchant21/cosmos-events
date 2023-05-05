import React from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function LoginForm() {
  const navigate = useNavigate();
  const provider = new firebase.auth.GoogleAuthProvider();

  function handleSignIn() {
    firebase.auth().signInWithPopup(provider).then(() => {
      navigate('/');
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
