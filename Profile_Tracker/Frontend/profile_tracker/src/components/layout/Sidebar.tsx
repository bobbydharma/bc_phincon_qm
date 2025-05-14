/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link } from "react-router-dom";
import { Home, User, Settings, Layout, LayoutList } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md h-screen fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">EduDashboard</h1>
      </div>
      <nav className="mt-6">
        <ul>
          {/* <li>
            <Link
              to="/"
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              <Home className="w-5 h-5 mr-3" />
              <span>Dashboard</span>
            </Link>
          </li> */}
          <li>
            <Link
              to="/profile"
              className="flex items-center px-6 py-3 bg-blue-50 text-blue-600"
            >
              <User className="w-5 h-5 mr-3" />
              <span>Profile</span>
            </Link>
          </li>
          {/* <li>
            <Link
              to="/courses"
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              <Layout className="w-5 h-5 mr-3" />
              <span>Courses</span>
            </Link>
          </li>
          <li>
            <Link
              to="/tryouts"
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              <LayoutList className="w-5 h-5 mr-3" />
              <span>Tryouts</span>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              <Settings className="w-5 h-5 mr-3" />
              <span>Settings</span>
            </Link>
          </li> */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;