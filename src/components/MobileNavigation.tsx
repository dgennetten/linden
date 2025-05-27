import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, History, HardHat, Users, Clock, Info } from 'lucide-react';

const MobileNavigation: React.FC = () => {
  return (
    <nav className="py-2">
      <div className="grid grid-cols-6 gap-1">
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => 
            `flex flex-col items-center py-2 ${isActive ? 'text-accent' : 'text-gray-600'}`
          }
        >
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </NavLink>
        
        <NavLink 
          to="/history" 
          className={({ isActive }) => 
            `flex flex-col items-center py-2 ${isActive ? 'text-accent' : 'text-gray-600'}`
          }
        >
          <History size={20} />
          <span className="text-xs mt-1">History</span>
        </NavLink>
        
        <NavLink 
          to="/construction" 
          className={({ isActive }) => 
            `flex flex-col items-center py-2 ${isActive ? 'text-accent' : 'text-gray-600'}`
          }
        >
          <HardHat size={20} />
          <span className="text-xs mt-1">Restoration</span>
        </NavLink>
        
        <NavLink 
          to="/tenants" 
          className={({ isActive }) => 
            `flex flex-col items-center py-2 ${isActive ? 'text-accent' : 'text-gray-600'}`
          }
        >
          <Users size={20} />
          <span className="text-xs mt-1">Tenants</span>
        </NavLink>
        
        <NavLink 
          to="/timeline" 
          className={({ isActive }) => 
            `flex flex-col items-center py-2 ${isActive ? 'text-accent' : 'text-gray-600'}`
          }
        >
          <Clock size={20} />
          <span className="text-xs mt-1">Timeline</span>
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `flex flex-col items-center py-2 ${isActive ? 'text-accent' : 'text-gray-600'}`
          }
        >
          <Info size={20} />
          <span className="text-xs mt-1">About</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default MobileNavigation;