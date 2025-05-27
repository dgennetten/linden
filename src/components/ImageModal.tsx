import React, { useEffect, useCallback } from 'react';
import { Photo } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext
}) => {
  const currentPhoto = photos[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === photos.length - 1;

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && !isFirst) onPrev();
    if (e.key === 'ArrowRight' && !isLast) onNext();
  }, [onClose, onPrev, onNext, isFirst, isLast]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <>
      <div 
        className="modal-backdrop"
        onClick={onClose}
      />
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button: Anchor to top right of viewport */}
        <button 
          className="fixed top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors z-50" // Increased z-index
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Previous Button: Anchor to middle left of viewport */}
        {!isFirst && (
          <button 
            className="fixed left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors z-50" // Increased z-index
            onClick={onPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Next Button: Anchor to middle right of viewport */}
        {!isLast && (
          <button 
            className="fixed right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors z-50" // Increased z-index
            onClick={onNext}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Main Image and Info Content - unchanged from previous version */}
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="relative flex-grow flex items-center justify-center bg-black p-4 md:p-8 rounded-t-lg">
            <img 
              src={currentPhoto.url} 
              alt={currentPhoto.name} 
              className="max-w-full max-h-full object-contain !h-auto !w-auto" 
            />
          </div>
          
          <div className="bg-white p-4 text-gray-800 rounded-b-lg w-full">
            <div className="flex justify-between items-baseline">
              <h3 className="font-medium text-lg">{currentPhoto.name}</h3>
              <span className="text-sm text-gray-500">{currentPhoto.date}</span>
            </div>
            <p className="text-gray-600 mt-1">{currentPhoto.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageModal;