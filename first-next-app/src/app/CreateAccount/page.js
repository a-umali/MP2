"use client"; // Ensure this directive is at the top of the file

import NavBar from '@/components/Navbar';
import { UserRegistration } from '@/components/UserRegistration';

const CreateAccount = () => {
  return (
    <div>
      <NavBar />
      <h1>Create an Account</h1>
      <UserRegistration showEmail={true} showPassword={true} />
    </div>
  );
};

export default CreateAccount;