import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="hidden md:block">
            <Navigation />
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">251/253 Linden Street</h3>
              <p className="text-gray-300">Fort Collins, Colorado</p>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Historic Linden Street Property
            </div>
          </div>
        </div>
      </footer>
      
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200">
        <MobileNavigation />
      </div>
    </div>
  );
};

export default Layout;