import { Link, useLocation } from 'react-router-dom';
import { cn } from '../libs/utils.ts';

const NavigationTabs = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Products', path: '/' },
    { name: 'Add Product', path: '/manage-product' },
  ];

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-xl font-bold text-gray-800">Product Hub</h1>
          
          <nav className="flex space-x-4">
            {tabs.map((tab) => (
              <Link
                key={tab.path}
                to={tab.path}
                className={cn(
                  "px-4 py-2 font-medium rounded-md transition-colors",
                  location.pathname === tab.path 
                    ? "bg-blue-500 text-white" 
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;