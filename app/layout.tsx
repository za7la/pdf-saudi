import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'pdf-saudi | تحويل PDF سعودي',
  description: 'منصة سعودية لتحويل ومعالجة ملفات PDF بدقة عالية ودعم OCR عربي',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
