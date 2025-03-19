import React from 'react';

const Banner = () => {
  return (
    <div className="flex flex-col items-center min-h-[80vh] relative z-10 pt-30">
      {/* Text Section */}
      <div className="text-center mb-1"> {/* Reduced margin-bottom */}
        <p className="text-white text-lg">KIET</p>
        <h1 className="text-white text-5xl font-bold mb-1">MODEL UNITED NATION 7.0</h1>
      </div>

      {/* Images Section */}
      <div className="flex justify-center items-start gap-[4px] mt-1"> {/* Added margin-top */}
        {/* Logo Image */}
        <img
          src="/Lo.png"
          className="w-[220px] h-[220px]"
          alt="Logo"
        />

        {/* Text Image */}
        <img
          src="/text.png"
          className="w-[400px] h-[400px] mt-[-27px]"
          alt="Text"
        />
      </div>
    </div>
  );
};

export default Banner;
