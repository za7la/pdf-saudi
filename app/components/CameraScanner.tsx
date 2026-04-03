'use client';

import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

interface CameraScannerProps {
  onScanComplete: (imageSrc: string, extractedText?: string) => void;
}

export default function CameraScanner({ onScanComplete }: CameraScannerProps) {
  const webcamRef = useRef<Webcam>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const capturePhoto = () => {
    setIsCapturing(true);
    const imageSrc = webcamRef.current?.getScreenshot();
    
    if (imageSrc) {
      setCapturedImage(imageSrc);
      
      // هنا يمكن إضافة OCR لاحقاً بـ Google Cloud Vision
      // الآن نرسل الصورة فقط
      onScanComplete(imageSrc);
    }
    
    setIsCapturing(false);
  };

  const retakePhoto = () => {
    setCapturedImage(null);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!capturedImage ? (
        <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              facingMode: "environment", // الكاميرا الخلفية
              width: 1280,
              height: 720,
            }}
            className="w-full"
          />
          
          {/* إطار توجيهي للمستند */}
          <div className="absolute inset-0 border-2 border-dashed border-white/70 rounded-3xl m-8 pointer-events-none" />
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <button
              onClick={capturePhoto}
              disabled={isCapturing}
              className="bg-white text-black font-semibold px-10 py-4 rounded-2xl shadow-lg active:scale-95 transition-all flex items-center gap-3 text-lg"
            >
              📸 مسح المستند
            </button>
          </div>

          <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            الكاميرا الخلفية
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <img 
            src={capturedImage} 
            alt="Captured document" 
            className="w-full rounded-3xl shadow-xl" 
          />
          
          <div className="flex gap-4">
            <button
              onClick={retakePhoto}
              className="flex-1 bg-gray-200 text-gray-800 font-medium py-4 rounded-2xl active:bg-gray-300"
            >
              📸 التقاط صورة أخرى
            </button>
            
            <button
              onClick={() => onScanComplete(capturedImage)}
              className="flex-1 bg-emerald-600 text-white font-semibold py-4 rounded-2xl active:bg-emerald-700"
            >
              ✅ استخدام الصورة
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
