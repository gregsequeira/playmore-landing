import './globals.css';

export const metadata = {
  title: 'PlayMore Sports Management',
  description: 'Join our waiting list for the upcoming sports management platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 