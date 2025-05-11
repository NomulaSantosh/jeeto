import React from 'react';

const ScreenshotModal = ({ screenshotUrl, onClose }) => {
  if (!screenshotUrl) return null;

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-10 relative max-w-3xl max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
        >
          &times;
        </button>
        <img 
          src={screenshotUrl} 
          alt="Transaction Screenshot" 
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default ScreenshotModal;