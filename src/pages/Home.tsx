import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/OldElkHero.jpg" 
            alt="Historic Linden Street Property" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"></div>
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16 md:pb-24">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-2xl">
              251/253 Linden Street
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
              Discover the rich history of this iconic Fort Collins property
            </p>
            <NavLink 
              to="/history" 
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Explore History <ArrowRight size={20} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore the Property</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NavLink to="/history" className="group">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img 
                  src="/images/History.jpg" 
                  alt="Historic photos" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">Historic Gallery</h3>
              <p className="text-gray-600">Explore the rich history through a collection of historical photographs.</p>
            </NavLink>
            
            <NavLink to="/construction" className="group">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img 
                  src="/images/Construction.jpg" 
                  alt="Construction" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">Construction Journey</h3>
              <p className="text-gray-600">Witness the transformation and construction process of this historic property.</p>
            </NavLink>
            
            <NavLink to="/tenants" className="group">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img 
                  src="/images/Tenants.jpg" 
                  alt="Tenants" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">Tenant History</h3>
              <p className="text-gray-600">Learn about the businesses and people who have called this property home.</p>
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* Timeline Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Explore Our Timeline</h2>
              <p className="text-gray-600 mb-6">
                Discover the chronological history of tenants and significant events 
                related to the 251/253 Linden Street property. Our interactive timeline 
                provides a fascinating journey through time.
              </p>
              <NavLink 
                to="/timeline" 
                className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
              >
                View Timeline <ArrowRight size={18} />
              </NavLink>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Timeline" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;