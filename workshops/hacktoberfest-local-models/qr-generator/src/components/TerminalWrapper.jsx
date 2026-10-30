import React, { useState } from 'react';
import Input from './Input';
import QRCodeDisplay from './QRCodeDisplay';

const TerminalWrapper = () => {
  const [qrData, setQrData] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState(null);

  const handleGenerate = (data) => {
    if (!data) return;

    setIsGenerating(true);
    setGenerationError(null);

    // Simulate generation time
    setTimeout(() => {
      setIsGenerating(false);
      // In a real app, validation/API calls would happen here
      if (data.length > 1000) {
        setGenerationError("Payload too large for QR encoding.");
        setQrData('');
      } else {
        setQrData(data);
      }
    }, 1000);
  };

  return (
    <div className="terminal-wrapper flex flex-col lg:flex-row gap-8">
      {/* Left Panel: Input/Control */}
      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <h1 className="text-3xl mb-4 text-[#64ffda]">
          &gt; QR_CODE_ENGINE_CLI
        </h1>
        <p className="mb-6 text-gray-300">// System Mode: ACTIVE</p>
        <Input
          value={qrData}
          onChange={setQrData}
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
        />
        <div className="h-32 w-full mt-4 p-2 border border-lime-600 rounded bg-gray-900/30">
          <p className="text-sm text-gray-400">
            // Status Log: Ready. Awaiting command...
          </p>
        </div>
      </div>

      {/* Right Panel: Output/QR Display */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl mb-4 text-[#64ffda]">
          [OUTPUT STREAM]
        </h2>
        <QRCodeDisplay
          payload={qrData}
          isGenerating={isGenerating}
          error={generationError}
        />
      </div>
    </div>
  );
};

export default TerminalWrapper;