import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect home page to products page
  return <Navigate to="/products" replace />;
};

export default Index;