import './globals.css';

export const metadata = {
  title: 'Dott. Federico Parolini | Oculistica e Retina Medica a Padova',
  description: 'Medico Chirurgo in Oftalmologia a Padova. Valutazioni oculistiche con interesse per retina medica, maculopatie, retinopatia diabetica e imaging OCT/OCT-A.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className="antialiased text-slate-600 bg-stone-50">{children}</body>
    </html>
  );
}