export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          pdf-saudi
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          منصة سعودية لتحويل ومعالجة ملفات PDF بدقة عالية
        </p>
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <p className="text-gray-500 text-sm">
            جاري رفع النسخة الأولى (MVP)...
            <br />
            سيتم إضافة رفع الملفات قريباً
          </p>
        </div>
      </div>
    </div>
  );
}
