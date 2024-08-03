import NavBar from '@/components/Navbar';
import { Profile } from '@/components/Profile';

const ProfilePage = () => {
  return (
    <div>
        <NavBar />
      <h1>User Profile</h1>
      <Profile />
    </div>
  );
};

export default ProfilePage;