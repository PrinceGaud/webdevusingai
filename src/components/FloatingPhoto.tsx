import React from 'react';

const FloatingPhoto = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="animate-float">
        <img
          src="/lovable-uploads/540ef556-7965-4d03-ad7b-1f66186a0a61.png"
          alt="Prince Gaur Profile"
          className="w-24 h-24 rounded-full border-4 border-workshop-cyan shadow-lg neon-border object-cover"
        />
      </div>
      <span className="mt-2 text-workshop-cyan font-semibold">Prince Gaur</span>
    </div>
  );
};

export default FloatingPhoto;