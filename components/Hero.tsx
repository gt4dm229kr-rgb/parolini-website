import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative bg-slate-900 text-white overflow-hidden pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-teal-900/50 text-teal-300 text-sm font-semibold mb-6 border border-teal-800">
              Medico Chirurgo • Specialista in Oftalmologia
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
              Oftalmologia clinica e diagnostica retinica avanzata
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Valutazione oculistica specialistica con particolare attenzione a retina medica, maculopatie, retinopatia diabetica e imaging OCT/OCT-A strutturale e vascolare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contatti" className="px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-lg transition-colors text-center">
                Prenota una visita
              </a>
              <a href="#profilo" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors text-center border border-slate-700">
                Leggi il profilo
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                Università di Padova
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                EBO Diploma 2026
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto lg:ml-auto max-w-md w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <Image 
              src="/portrait.jpg" 
              alt="Dott. Federico Parolini" 
              fill 
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}