import { useState } from 'react';
import axios from 'axios';

export const UserRegistration = ({
  showEmail = true,
  showPassword = true,
  showFirstName = true,
  showLastName = true,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleRegisterClick = async () => {
    try {
      const response = await axios.post('/api/register', {
        email,
        password,
        firstName,
        lastName,
      });

      setRegistrationStatus('success');
      console.log('Registration successful!', response.data);
    } catch (error) {
      setRegistrationStatus('error');
      console.error('Failed to register:', error);
    }
  };

  let statusMessage = null;
  if (registrationStatus === 'success') {
    statusMessage = <div>Registration successful! Please check your email to verify your account.</div>;
  } else if (registrationStatus === 'error') {
    statusMessage = <div>Failed to register. Please try again.</div>;
  }

  return (
    <div>
      {showFirstName && (
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          placeholder="Enter your first name"
        />
      )}
      <br></br>
      <br></br>
      {showLastName && (
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          placeholder="Enter your last name"
        />
      )}
      <br></br>
      <br></br>
      {showEmail && (
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
      )}
      <br></br>
      <br></br>
      {showPassword && (
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
        />
      )}
      <br></br>
      <br></br>
      <button onClick={handleRegisterClick}>Register</button>
      {statusMessage}
    </div>
  );
};