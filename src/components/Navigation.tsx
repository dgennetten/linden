import React from 'react';
import { NavLink } from 'react-router-dom';
import { Landmark } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="py-4">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-xl font-semibold">
          <Landmark size={24} />
          <span>Linden Street</span>
        </NavLink>
        
        <div className="flex space-x-2">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/history" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            History
          </NavLink>
          <NavLink 
            to="/construction" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Restoration
          </NavLink>
          <NavLink 
            to="/tenants" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Tenants
          </NavLink>
          <NavLink 
            to="/timeline" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Timeline
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;