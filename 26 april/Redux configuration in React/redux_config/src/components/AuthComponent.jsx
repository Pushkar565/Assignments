// src/components/AuthComponent.jsx
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions/authActions';

const AuthComponent = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Logic for authentication, e.g., API call
    const user = { username: 'example_user' };
    dispatch(loginSuccess(user));
  };

  return (
    <button onClick={handleLogin}>Login</button>
  );
};

export default AuthComponent;
