import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Testo a Sinistra */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10 tracking-wide uppercase">
              Medico Chirurgo • Specialista in Ophthalmology
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Oftalmologia clinica e <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                diagnostica retinica avanzata
              </span>
            </h1>
            <p className="max-w-2xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed text-slate-600">
              Valutazione oculistica specialistica con particolare attenzione a retina medica, 
              maculopatie, retinopatia diabetica e imaging OCT/OCT-A strutturale e vascolare.
            </p>
            
            {/* Pulsanti / Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href="#contatti" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-colors duration-200">
                Prenota una visita
              </a>
              <a href="#profilo" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 transition-colors duration-200">
                Leggi il profilo professionale
              </a>
            </div>

            {/* Certificazioni / Loghi */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 text-xs font-medium text-slate-500 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
                Università di Padova
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                FEBO Diploma 2026
              </div>
            </div>
          </div>

          {/* Tua Immagine a Destra (Formattata) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 bg-slate-100">
              <img 
                src="/portrait.jpg" 
                alt="Dott. Federico Parolini" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}