import React, { useState, useEffect } from 'react';
import GalleryGrid from '../components/GalleryGrid';
import ImageModal from '../components/ImageModal';
import { Photo } from '../types';
import historyData from '../data/history.json';

const History: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real application, we would fetch this data
    setPhotos(historyData);
    setIsLoading(false);
  }, []);

  const handlePhotoClick = (photo: Photo, index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevPhoto = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextPhoto = () => {
    setCurrentIndex((prev) => Math.min(photos.length - 1, prev + 1));
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-16 md:mb-0">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Historical Photos</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the rich history of 251/253 Linden Street through this collection of historical photographs.
        </p>
      </header>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <GalleryGrid photos={photos} onPhotoClick={handlePhotoClick} />
      )}

      <ImageModal
        isOpen={isModalOpen}
        photos={photos}
        currentIndex={currentIndex}
        onClose={handleCloseModal}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />
    </div>
  );
};

export default History;