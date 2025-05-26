import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 mb-16 md:mb-0">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About 251/253 Linden Street</h1>
      </header>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <img 
            src="/images/history/HistoryCollage.jpg" 
            alt="251/253 Linden Street" 
            className="w-full aspect-[5/4] object-cover object-center" 
          />
          
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Property History</h2>
            <p className="text-gray-700 mb-4">
              The historic property at 251/253 Linden Street stands as one of Fort Collins' significant 
              architectural treasures. Built in the late 19th century, this structure has witnessed the transformation 
              of Fort Collins from a small military outpost to a thriving modern city.
            </p>
            <p className="text-gray-700 mb-4">
              Originally constructed in 1884, the building has served various purposes throughout its storied history. 
              From its early days as law offices-upstairs, and mercantile establishment-main floor, to its modern incarnation 
              housing Class A office space and High-end Bar/Restaurant, 251/253 Linden Street continues to be a vital part of 
              Fort Collins' Old Town district.
            </p>
            <p className="text-gray-700">
              The building's distinctive architectural style, with its characteristic brick façade and large display 
              windows, exemplifies the commercial architecture of its era. Through careful preservation and thoughtful 
              renovation, the property maintains its historical integrity while adapting to contemporary needs.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Architectural Significance</h2>
            <p className="text-gray-700 mb-4">
              251/253 Linden Street represents a quintessential example of late 19th-century commercial architecture 
              in the American West. The building features a classic brick façade with large storefront windows that 
              were designed to showcase merchandise to passersby.
            </p>
            <p className="text-gray-700 mb-4">
              Notable architectural elements include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Original brick masonry with detailed cornices</li>
              <li>Cast iron structural elements that were innovative for their time</li>
              <li>Expansive display windows with transom lights</li>
              <li>Recessed entryways characteristic of period storefronts</li>
            </ul>
            <p className="text-gray-700">
              These features not only contribute to the building's aesthetic appeal but also tell the story of 
              commercial development and construction techniques of the late Victorian era in Colorado.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Preservation Efforts</h2>
            <p className="text-gray-700 mb-4">
              The preservation of 251/253 Linden Street represents a community commitment to honoring Fort Collins' 
              historical heritage. Over the decades, various restoration projects have been undertaken to ensure 
              the building's longevity while respecting its historical significance.
            </p>
            <p className="text-gray-700 mb-4">
              In 1999, a major renovation project carefully restored the building's exterior to its original 
              appearance based on historical photographs and architectural research. Interior modernizations 
              were sensitively implemented to accommodate contemporary businesses while preserving original 
              architectural elements whenever possible.
            </p>
            <p className="text-gray-700">
              Today, the property stands as a testament to successful historic preservation, demonstrating how 
              historical structures can remain relevant and vital to a community's cultural and economic life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;