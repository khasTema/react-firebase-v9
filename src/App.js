// import logo from './logo.svg';
import './App.css';
import Form from './components/common/Form';
import Home from './components/unknown/Home';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { app } from './firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function App() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const navigate = useNavigate();

  const handleAction = (id) => {
    const authentification = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentification, email, password)
        .then((response) => {
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          navigate('/home')
        })

    }
  }

  return (
    <div className="App">
      <>
        <Routes>
          <Route 
            path='/login' 
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
      </>
    </div>
  );
}

export default App;
