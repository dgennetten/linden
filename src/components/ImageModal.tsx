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
        <div className="relative w-full h-full max-w-4xl max-h-[90vh] mx-4 flex flex-col">
          <div className="relative flex-grow flex items-center justify-center bg-black">
            <img 
              src={currentPhoto.url} 
              alt={currentPhoto.name} 
              className="max-w-full max-h-[70vh] object-contain"
            />
            
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {!isFirst && (
              <button 
                className="absolute left-4 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors"
                onClick={onPrev}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {!isLast && (
              <button 
                className="absolute right-4 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors"
                onClick={onNext}
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>
          
          <div className="bg-white p-4 text-gray-800 rounded-b-lg">
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