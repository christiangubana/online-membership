import { Navigate} from 'react-router-dom';
import useLocalStorage from './useLocalStorage';


export default function PrivateRoutes({ children }) {
  const { isLogged } = useLocalStorage();
  console.log(isLogged) // Returning undefined
  const isAuth = useLocalStorage;
  console.log(isAuth) // Returning values
  if(!isLogged) {
    return <Navigate to="/login" replace />;  
  }
  return children
}
