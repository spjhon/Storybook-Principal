import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export interface Image {
  largeURL: string;
  thumbnailURL: string;
  width: number;
  height: number;
}

export interface GridGalleryProps {
  galleryID: string;
  images: Image[];
}

const GridGallery: React.FC<GridGalleryProps> = ({ galleryID, images }) => {


  useEffect(() => {
    const lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });

    
    lightbox.init();

    return () => {
      lightbox.destroy();
      //lightbox = null;
    };
  }, [galleryID]);



  return (
    <div className="pswp-gallery" id={galleryID}>
      {images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
          title='demo'
        >
          <img src={image.thumbnailURL} alt="" />
        </a>
      ))}
    </div>
  );
};

export default GridGallery;
