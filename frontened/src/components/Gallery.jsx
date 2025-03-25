import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { src: 'DSC00522.JPG', alt: 'Image 1' },
    { src: 'DSC00533.JPG', alt: 'Image 2' },
    { src: 'DSC00540.JPG', alt: 'Image 3' },
    { src: 'DSC00543.JPG', alt: 'Image 4' },
    { src: 'IMG_0094.JPG', alt: 'Image 5' },
    { src: 'IMG_0096.JPG', alt: 'Image 6' },
    { src: 'Group.jpeg', alt: 'Image 7' },
    { src: 'IMG_091.JPG', alt: 'Image 8' },
    { src: 'IMG_093.JPG', alt: 'Image 9' },
    { src: 'IMG_092.JPG', alt: 'Image 10' },
    { src: 'IMG_10.JPG', alt: 'Image 11' },
    { src: 'IMG_11.JPG', alt: 'Image 12' },
    { src: 'IMG_0181.JPG', alt: 'Image 13' },
    { src: 'IMG_0142.JPG', alt: 'Image 14' },
    { src: 'IMG_12.JPG', alt: 'Image 15' },
    { src: 'IMG_0166.JPG', alt: 'Image 16' },
    { src: 'IMG_14.JPG', alt: 'Image 17' },
    { src: 'IMG_18.JPG', alt: 'Image 18' },
    { src: 'IMG_19.JPG', alt: 'Image 19' },
    { src: 'IMG_M.jpeg', alt: 'Image 20' },
    { src: 'IMG_20.jpeg', alt: 'Image 21' },
    { src: 'IMG_21.JPG', alt: 'Image 22' },
    { src: 'IMG_21.jpeg', alt: 'Image 23' },
    { src: 'IMG_22.jpeg', alt: 'Image 24' },
    { src: 'IMG_23.jpeg', alt: 'Image 25' },
    { src: 'IMG_24.jpeg', alt: 'Image 26' },
    { src: 'IMG_25.jpeg', alt: 'Image 27' },
    { src: 'IMG_27.jpeg', alt: 'Image 28' },
    { src: 'IMG_28.jpeg', alt: 'Image 29' },
    { src: 'IMG_29.jpeg', alt: 'Image 30' },
    { src: 'IMG_30.jpeg', alt: 'Image 31' },
    { src: 'IMG_31.jpeg', alt: 'Image 32' },
    { src: 'IMG_32.jpeg', alt: 'Image 33' },
    { src: 'IMG_33.jpeg', alt: 'Image 34' },
    { src: 'IMG_34.jpeg', alt: 'Image 35' },
    { src: 'IMG_35.jpeg', alt: 'Image 36' },
    { src: 'IMG_37.jpg', alt: 'Image 37' },
  ];

  const ratio2Image1 = 4;
  const ratio2Image2 = 7;
  const ratio3Image1 = 2;
  const ratio3Image2 = 3;
  const ratio3Image3 = 2;

  const renderMobileGallery = () => {
    return images.map((image, index) => (
      <motion.div
        key={`mobile-${index}`}
        className="block md:hidden mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="h-48 overflow-hidden rounded-lg shadow-lg">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    ));
  };

  const renderDesktopGallery = () => {
    const rows = [];
    let i = 0;

    while (i < images.length) {
      if (i < images.length) {
        rows.push(
          <motion.div
            key={`row-${i}`}
            className="hidden md:flex flex-row w-full mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div
              className="h-96 overflow-hidden rounded-lg shadow-lg mr-4"
              style={{
                flex: ratio2Image1,
              }}
            >
              <img
                src={images[i].src}
                alt={images[i].alt}
                className="w-full h-full object-cover"
              />
            </div>

            {i + 1 < images.length && (
              <div
                className="h-96 overflow-hidden rounded-lg shadow-lg"
                style={{
                  flex: ratio2Image2,
                }}
              >
                <img
                  src={images[i + 1].src}
                  alt={images[i + 1].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </motion.div>
        );
        i += 2;
      }

      if (i < images.length) {
        rows.push(
          <motion.div
            key={`row-${i}`}
            className="hidden md:flex flex-row w-full mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div
              className="h-96 overflow-hidden rounded-lg shadow-lg mr-4"
              style={{
                flex: ratio3Image1,
              }}
            >
              <img
                src={images[i].src}
                alt={images[i].alt}
                className="w-full h-full object-cover"
              />
            </div>

            {i + 1 < images.length && (
              <div
                className="h-96 overflow-hidden rounded-lg shadow-lg mr-4"
                style={{
                  flex: ratio3Image2,
                }}
              >
                <img
                  src={images[i + 1].src}
                  alt={images[i + 1].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {i + 2 < images.length && (
              <div
                className="h-96 overflow-hidden rounded-lg shadow-lg"
                style={{
                  flex: ratio3Image3,
                }}
              >
                <img
                  src={images[i + 2].src}
                  alt={images[i + 2].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </motion.div>
        );
        i += 3;
      }
    }

    return rows;
  };

  return (
    <div className="min-h-screen w-full bg-[#062045] flex flex-col items-center justify-center p-8 relative">
      <motion.h1
        className="text-4xl font-bold mb-12 text-[#9a7e2f] text-center mt-20"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        Photo Gallery
      </motion.h1>

      <div className="flex flex-col w-full">
        {renderMobileGallery()}
        {renderDesktopGallery()}
      </div>
    </div>
  );
};

export default Gallery;
