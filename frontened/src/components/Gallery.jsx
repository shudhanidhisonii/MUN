import React from 'react';

const Gallery = () => {
  const images = [
    { src: 'DSC00522.JPG', alt: 'Image 1' },
    { src: 'DSC00533.JPG', alt: 'Image 2' },
    { src: 'DSC00540.JPG', alt: 'Image 3' },
    { src: 'DSC00543.JPG', alt: 'Image 4' },
    { src: 'IMG_0094.JPG', alt: 'Image 5' },
    { src: 'IMG_0096.JPG', alt: 'Image 6' },
    { src: 'IMG_0098.JPG', alt: 'Image 7' },
    { src: 'IMG_0101.JPG', alt: 'Image 8' },
    { src: 'IMG_0110.JPG', alt: 'Image 9' },
    { src: 'IMG_0128.JPG', alt: 'Image 10' },
    { src: 'IMG_0135.JPG', alt: 'Image 11' },
    { src: 'IMG_0136.JPG', alt: 'Image 12' },
    { src: 'IMG_0181.JPG', alt: 'Image 13' },
    { src: 'IMG_0142.JPG', alt: 'Image 14' },
    { src: 'IMG_0153.JPG', alt: 'Image 15' },
    // { src: 'IMG_0166.JPG', alt: 'Image 16' },
    // { src: 'IMG_0181.JPG', alt: 'Image 17' },
    // { src: 'IMG_0191.JPG', alt: 'Image 18' },
    // { src: 'IMG_0193.JPG', alt: 'Image 19' },
    // { src: 'IMG_0197.JPG', alt: 'Image 20' },
    // { src: 'IMG_0201.JPG', alt: 'Image 21' },
    // { src: 'IMG_0210.JPG', alt: 'Image 22' },
    // { src: 'IMG_0214.JPG', alt: 'Image 23' },
    // { src: 'IMG_0226.JPG', alt: 'Image 24' },
    // { src: 'IMG_0240.JPG', alt: 'Image 25' },
    // { src: 'IMG_0243.JPG', alt: 'Image 25' },
    // { src: 'IMG_0244.JPG', alt: 'Image 26' },
    // { src: 'IMG_0278.JPG', alt: 'Image 27' },
    // { src: 'IMG_0279.JPG', alt: 'Image 28' },
    // { src: 'IMG_0280.JPG', alt: 'Image 29' },
    // { src: 'IMG_0295.JPG', alt: 'Image 30' },
    // { src: 'IMG_0299.JPG', alt: 'Image 31' },
    // { src: 'IMG_0300.JPG', alt: 'Image 32' },
    // { src: 'IMG_0301.JPG', alt: 'Image 33' },
    // { src: 'IMG_0304.JPG', alt: 'Image 34' },
    // { src: 'IMG_0305.JPG', alt: 'Image 35' },
    // { src: 'IMG_0306.JPG', alt: 'Image 36' },
    // { src: 'IMG_0309.JPG', alt: 'Image 37' },
    // { src: 'IMG_0313.JPG', alt: 'Image 38' },
    // { src: 'IMG_0316.JPG', alt: 'Image 39' },
    // { src: 'IMG_0320.JPG', alt: 'Image 40' },
    // { src: 'IMG_0321.JPG', alt: 'Image 41' },
    // { src: 'IMG_0323.JPG', alt: 'Image 42' },
    // { src: 'IMG_0326.JPG', alt: 'Image 43' },
    // { src: 'IMG_0328.JPG', alt: 'Image 44' },
    // { src: 'IMG_0330.JPG', alt: 'Image 45' },
    // { src: 'IMG_0332.JPG', alt: 'Image 46' },
    // { src: 'IMG_0334.JPG', alt: 'Image 47' },
    // { src: 'IMG_0338.JPG', alt: 'Image 48' },
    // { src: 'IMG_0339.JPG', alt: 'Image 49' },
    // { src: 'IMG_0344.JPG', alt: 'Image 50' },
    // { src: 'IMG_0350.JPG', alt: 'Image 51' },
    // { src: 'IMG_0351.JPG', alt: 'Image 52' },
    // { src: 'IMG_0357.JPG', alt: 'Image 53' },
    // { src: 'IMG_0358.JPG', alt: 'Image 54' },
    // { src: 'IMG_0360.JPG', alt: 'Image 55' },
    // { src: 'IMG_0363.JPG', alt: 'Image 56' },
    // { src: 'IMG_0366.JPG', alt: 'Image 57' },
    // { src: 'IMG_0373.JPG', alt: 'Image 58' },
    // { src: 'IMG_0378.JPG', alt: 'Image 59' },
    // { src: 'IMG_0556.JPG', alt: 'Image 60' },
    // { src: 'IMG_0597.JPG', alt: 'Image 61' },
    // { src: 'IMG_0598.JPG', alt: 'Image 62' },
    // { src: 'IMG_0599.JPG', alt: 'Image 63' },
    // { src: 'IMG_0600.JPG', alt: 'Image 64' },
    // { src: 'IMG_0602.JPG', alt: 'Image 65' },
    // { src: 'IMG_0605.JPG', alt: 'Image 66' },

  ];

  const ratio2Image1 = 4;
  const ratio2Image2 = 7;
  const ratio3Image1 = 2;
  const ratio3Image2 = 3;
  const ratio3Image3 = 2;

  const renderMobileGallery = () => {
    return images.map((image, index) => (
      <div key={`mobile-${index}`} className="block md:hidden mb-4">
        <div className="h-48 overflow-hidden rounded-lg shadow-lg">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ));
  };

  const renderDesktopGallery = () => {
    const rows = [];
    let i = 0;
    
    while (i < images.length) {
      if (i < images.length) {
        rows.push(
          <div key={`row-${i}`} className="hidden md:flex flex-row w-full mb-4">
            <div 
              className="h-96 overflow-hidden rounded-lg shadow-lg mr-4" 
              style={{ 
                flex: ratio2Image1
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
                  flex: ratio2Image2
                }}
              >
                <img
                  src={images[i + 1].src}
                  alt={images[i + 1].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        );
        i += 2;
      }
      
      if (i < images.length) {
        rows.push(
          <div key={`row-${i}`} className="hidden md:flex flex-row w-full mb-4">
            <div 
              className="h-96 overflow-hidden rounded-lg shadow-lg mr-4" 
              style={{ 
                flex: ratio3Image1
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
                  flex: ratio3Image2
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
                  flex: ratio3Image3
                }}
              >
                <img
                  src={images[i + 2].src}
                  alt={images[i + 2].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        );
        i += 3;
      }
    }
    
    return rows;
  };

  return (
    <div className="min-h-screen w-full bg-[#062045] flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-12 text-[#9a7e2f] text-left w-full">
        Photo Gallery
      </h1>
      <div className="flex flex-col w-full">
        {renderMobileGallery()}
        {renderDesktopGallery()}
      </div>
    </div>
  );
};

export default Gallery;