import './App.css';
import Form from './components/common/Form';
import Home from './components/unknown/Home';
import {  
  Routes, 
  Route,
  useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// eslint-disable-next-line
import { app } from './firebase-config';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if(authToken){
      navigate('/home')
    }
    // eslint-disable-next-line
  }, [])

  const handleAction = (id) => {
    const authentification = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentification, email, password)
        .then((response) => {
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          navigate('/home')
        })
        .catch((error) => {
          if(error.code === 'auth/email-already-in-use'){
            toast.error('Email already in use')
          }
        })
    }

    if (id === 1) {
      signInWithEmailAndPassword(authentification, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if(error.code === 'auth/wrong-password'){
            toast.error('Please check the Password')
          }

          if(error.code === 'auth/user-not-found'){
            toast.error('Please Register')
            setTimeout(navigate('/register'), 10000)
          }
        })
    }
  }

  return (
    <div className="App">
      <>
        <Routes>
          <Route 
            path='/' 
            element={
              <Form 
                title='Login'
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)} 
              />} 
          />
          <Route 
            path='/register' 
            element={
              <Form 
                title='Register'
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)} 
              />} 
          />
          <Route 
            path='/home'
            element={<Home />}
          />
        </Routes>
        <ToastContainer />
      </>
    </div>
  );
}

export default App;
