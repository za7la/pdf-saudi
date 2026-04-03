'use client';

import React from 'react';
import CameraScanner from './components/CameraScanner';

export default function Home() {
  const handleScanComplete = (imageSrc: string) => {
    console.log('تم مسح الصورة بنجاح:', imageSrc);
    alert('✅ تم التقاط الصورة بنجاح!\n\nسيتم معالجة الصورة واستخراج النص (OCR) قريباً إن شاء الله');
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      alert(`تم رفع الملف: ${file.name}\n\n(سيتم إضافة معالجة الملفات قريباً)`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 rtl">
      <div className="max-w-2xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">pdf-saudi</h1>
          <p className="text-xl text-gray-600">
            منصة سعودية لتحويل ومعالجة ملفات PDF بدقة عالية
          </p>
        </div>

        <div className="space-y-10">
          {/* رفع ملف */}
          <div className="bg-white rounded-3xl shadow p-8 text-center">
            <h2 className="text-2xl font-semibold mb-6">رفع ملف PDF أو صورة</h2>
            <label className="block">
              <div className="bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-medium py-5 px-10 rounded-2xl text-lg cursor-pointer inline-block">
                📤 اختر ملف
              </div>
              <input
                type="file"
                accept="application/pdf,image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            <p className="text-sm text-gray-500 mt-4">يدعم: PDF، JPG، PNG</p>
          </div>

          {/* مسح بالكاميرا */}
          <div className="bg-white rounded-3xl shadow p-8">
            <h2 className="text-2xl font-semibold text-center mb-8">أو مسح المستند بالكاميرا</h2>
            <CameraScanner onScanComplete={handleScanComplete} />
          </div>
        </div>

        <div className="text-center mt-16 text-sm text-gray-500">
          النسخة الأولى (MVP) — جاري إضافة OCR وميزات أخرى
        </div>
      </div>
    </div>
  );
}
