import React, { useState, useEffect } from 'react';
import { Tenant } from '../types';
import timelineData from '../data/timeline.json';
import { Search, X } from 'lucide-react';

const Timeline: React.FC = () => {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real application, we would fetch this data
    setTenants(timelineData);
    setIsLoading(false);
  }, []);

  const filteredTenants = tenants.filter(tenant =>
    tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tenant.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

const formatDate = (dateString: string) => {
  if (!dateString) return 'Present';

  const [yearStr, monthStr] = dateString.split('-');
  const year = parseInt(yearStr, 10);
  // Month is 0-indexed in JavaScript Date, so subtract 1
  const month = parseInt(monthStr, 10) - 1;

  // Create a new Date object using year, month (0-indexed), and day
  // This constructs the date in the local timezone, avoiding UTC conversion issues.
  const date = new Date(year, month, 1);

  // You can still add the check for invalid dates, though parsing by numbers is usually safer
  if (isNaN(date.getTime())) {
    return dateString; // Fallback if parsing somehow fails
  }

  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
};

  return (
    <div className="container mx-auto px-4 py-8 mb-16 md:mb-0">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Tenant Timeline</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the chronological history of tenants who have occupied 251/253 Linden Street over the years.
        </p>
      </header>

      <div className="mb-6 max-w-md mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search tenants..."
            className="pl-10 pr-10 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              <X size={18} className="text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTenants.length > 0 ? (
                filteredTenants.map((tenant, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {/*
                      Removed whitespace-nowrap and added inline style for wordBreak.
                      For a more robust solution with Tailwind, you might extend your
                      tailwind.config.js to include a custom utility for word-break,
                      or ensure a utility like 'break-words' is available if not already.
                      For direct application, 'break-all' or 'break-word' (if available
                      through a plugin or custom config) would be alternatives.
                      However, `white-space: pre-wrap` is often very effective for
                      preserving spaces while allowing wrapping.
                    */}
                    <td
                      className="py-4 px-4"
                      style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }} // Added styles here
                    >
                      {formatDate(tenant.startDate)} - {formatDate(tenant.endDate)}
                    </td>
                    <td className="py-4 px-4 font-medium">{tenant.name}</td>
                    <td className="py-4 px-4">{tenant.description}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="py-8 text-center text-gray-500">
                    No tenants found matching your search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Timeline;