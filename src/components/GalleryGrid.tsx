import React from 'react';
import { Photo } from '../types';

interface GalleryGridProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo, index: number) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ photos, onPhotoClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo, index) => (
        <div 
          key={index} 
          className="gallery-item group cursor-pointer"
          onClick={() => onPhotoClick(photo, index)}
        >
          <img 
            src={photo.url} 
            alt={photo.name} 
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
          <div className="gallery-item-info opacity-0 group-hover:opacity-100 transition-opacity">
            <h3 className="text-sm font-medium truncate">{photo.name}</h3>
            <p className="text-xs text-white/80 truncate">{photo.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;