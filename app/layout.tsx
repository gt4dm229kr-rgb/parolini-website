import './globals.css';

export const metadata = {
  title: 'Dott. Federico Parolini - Sito Ufficiale',
  description: 'Sito web professionale del Dott. Federico Parolini',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}