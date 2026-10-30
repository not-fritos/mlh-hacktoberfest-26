import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeDisplay = ({ payload, isGenerating, error }) => {
  return (
    <div className="p-6 border-2 border-lime-500 rounded h-[400px] flex flex-col items-center justify-center bg-gray-900/50 text-center">
      {isGenerating ? (
        <>
          <div className="w-32 h-32 animate-spin border-4 border-lime-500 border-t-transparent rounded-full mb-4"></div>
          <p className="text-xl text-green-400">CONNECTING TO QR_ENGINE...</p>
        </>
      ) : error ? (
        <div className="mt-4 p-4 bg-red-900/30 border border-red-600 rounded-lg max-w-xs">
          <p className="text-red-400 font-bold">ERROR: GEN_FAIL</p>
          <p className="text-sm text-red-300 mt-1">{error}</p>
        </div>
      ) : payload ? (
        <>
          <QRCode value={payload} size={256} level="H" />
          <div className="mt-6 text-sm text-gray-400">QR Code Generated Successfully</div>
          <code className="mt-2">{payload}</code>
        </>
      ) : (
        <p className="text-gray-500 text-lg">Awaiting input...</p>
      )}
    </div>
  );
};

export default QRCodeDisplay;