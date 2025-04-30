import { Outlet } from 'react-router-dom';
import NavigationTabs from '../components/NavigationTabs.tsx';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationTabs />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;