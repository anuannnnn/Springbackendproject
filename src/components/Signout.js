import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { clearAuthentication } from './authentication'; // Implement this function
import { Button } from 'reactstrap';
const Signout = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear authentication state (e.g., remove tokens from localStorage)
    clearAuthentication();

    // Redirect to the login page or any other desired page
    navigate('/login-stud');
  };

  return (
    <Button color="danger" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};

export default Signout;
