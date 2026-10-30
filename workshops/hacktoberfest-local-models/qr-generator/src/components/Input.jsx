import React from 'react';

const Input = ({ value, onChange, onGenerate, isGenerating }) => {
  return (
    <div className="flex items-center space-x-3 p-4 border-2 border-[#00ff00] rounded-lg bg-gray-900/30 shadow-lg transition duration-300 focus-within:border-lime-500">
      <span className="text-lime-400">
        $ QR_INPUT:
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !isGenerating) {
            onGenerate(value);
          }
        }}
        placeholder="Enter text or URL to generate QR code..."
        disabled={isGenerating}
        className="flex-grow bg-transparent outline-none text-sm text-white caret-lime-400"
      />
      <button
        onClick={() => onGenerate(value)}
        disabled={!value || isGenerating}
        className={`px-4 py-2 text-sm font-bold rounded transition duration-200 ${
          value && !isGenerating
            ? 'bg-green-600 hover:bg-green-700 shadow-lime-500/50'
            : 'bg-gray-700 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isGenerating ? '... ' : 'GENERATE'}
      </button>
    </div>
  );
};

export default Input;