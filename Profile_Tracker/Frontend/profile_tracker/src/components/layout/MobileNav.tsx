/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, User, Settings, Layout, LayoutList } from "lucide-react";
import { Button } from "../../components/ui/button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:hidden flex justify-between items-center p-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">EduDashboard</h1>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMenu}
          className="p-1"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-16">
          <nav className="p-4">
            <ul className="space-y-4">
              {/* <li>
                <Link
                  to="/"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                  onClick={toggleMenu}
                >
                  <Home className="w-5 h-5 mr-3" />
                  <span>Dashboard</span>
                </Link>
              </li> */}
              <li>
                <Link
                  to="/profile"
                  className="flex items-center px-4 py-3 bg-blue-50 text-blue-600 rounded-md"
                  onClick={toggleMenu}
                >
                  <User className="w-5 h-5 mr-3" />
                  <span>Profile</span>
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/courses"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                  onClick={toggleMenu}
                >
                  <Layout className="w-5 h-5 mr-3" />
                  <span>Courses</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tryouts"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                  onClick={toggleMenu}
                >
                  <LayoutList className="w-5 h-5 mr-3" />
                  <span>Tryouts</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                  onClick={toggleMenu}
                >
                  <Settings className="w-5 h-5 mr-3" />
                  <span>Settings</span>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNav;