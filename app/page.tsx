import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-stone-50">
      
      {/* 1. HEADER FISSO */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-blue-950 tracking-tight">Dott. Federico Parolini</span>
            <span className="text-sm text-cyan-700 font-medium">Medico Chirurgo | Oftalmologia</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#profilo" className="hover:text-blue-950 transition-colors">Chi sono</a>
            <a href="#aree-cliniche" className="hover:text-blue-950 transition-colors">Aree cliniche</a>
            <a href="#metodo" className="hover:text-blue-950 transition-colors">Diagnostica</a>
            <a href="#ricerca" className="hover:text-blue-950 transition-colors">Ricerca</a>
            <a href="#contatti" className="hover:text-blue-950 transition-colors">Contatti</a>
          </nav>
          <a href="#contatti" className="hidden md:inline-flex bg-blue-950 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors shadow-sm">
            Richiedi informazioni
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 leading-tight">
              Oculistica clinica e <br />
              <span className="text-cyan-700">retina medica a Padova</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Valutazioni oculistiche accurate con particolare attenzione a maculopatie, retinopatia diabetica, degenerazione maculare e imaging OCT/OCT-A.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contatti" className="inline-flex justify-center items-center bg-blue-950 text-white px-6 py-3.5 rounded-xl text-base font-medium hover:bg-blue-900 transition shadow-md">
                Richiedi informazioni per una visita
              </a>
              <a href="#profilo" className="inline-flex justify-center items-center bg-white text-blue-950 border border-stone-200 px-6 py-3.5 rounded-xl text-base font-medium hover:bg-stone-50 transition shadow-sm">
                Scopri il profilo professionale
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-700"></div>
                Laurea in Medicina e Chirurgia con lode
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-700"></div>
                Specializzazione in Oftalmologia, Padova
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-700"></div>
                FEBO Diploma 2026
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img src="/portrait.jpg" alt="Dott. Federico Parolini" className="w-full h-full object-cover object-top bg-stone-200" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUANDO RIVOLGERSI */}
      <section className="bg-white py-20 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">Quando richiedere una valutazione</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Calo visivo o visione distorta",
              "Macchie centrali o metamorfopsie",
              "Diabete e controllo del fondo oculare",
              "Maculopatia o familiarità per AMD",
              "Necessità di interpretazione OCT/OCT-A",
              "Follow-up di patologie retiniche"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-xl border border-stone-100 bg-stone-50/50 shadow-sm">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-cyan-700"></div>
                <p className="text-slate-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AREE CLINICHE */}
      <section id="aree-cliniche" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-950 text-center mb-16">Aree Cliniche e Diagnostiche</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Retina medica e maculopatie", desc: "Inquadramento diagnostico e gestione clinica delle affezioni retiniche e maculari." },
            { title: "Degenerazione maculare e atrofia", desc: "Monitoraggio dell'AMD e studio della progressione dell'atrofia geografica." },
            { title: "Retinopatia diabetica", desc: "Prevenzione, screening e follow-up delle complicanze oculari del diabete." },
            { title: "OCT, OCT-A e imaging multimodale", desc: "Acquisizione e refertazione di esami tomografici strutturali e vascolari avanzati." },
            { title: "Occlusioni vascolari retiniche", desc: "Gestione in acuto e cronico degli eventi occlusivi arteriosi e venosi." },
            { title: "Visita oculistica generale", desc: "Esame completo della vista, misurazione del tono oculare e valutazione biomicroscopica." }
          ].map((area, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-blue-950 mb-3">{area.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. METODO DI VISITA */}
      <section id="metodo" className="bg-blue-950 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Il percorso di visita</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left relative">
            {[
              { step: "01", title: "Raccolta della storia clinica" },
              { step: "02", title: "Valutazione oculistica completa" },
              { step: "03", title: "Inquadramento diagnostico" },
              { step: "04", title: "Spiegazione del quadro e follow-up" }
            ].map((fase, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center md:items-start">
                <div className="text-cyan-500 font-mono text-xl font-bold mb-4">{fase.step}</div>
                <h3 className="text-lg font-semibold">{fase.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROFILO & 7. RICERCA */}
      <section id="profilo" className="py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-950">Profilo professionale</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Il Dott. Federico Parolini è Medico Chirurgo e svolge la propria formazione specialistica in Oftalmologia presso l’Università di Padova. 
              La sua attività clinica e scientifica è orientata alla retina medica, all’imaging multimodale e allo studio delle maculopatie, con particolare 
              interesse per OCT, OCT-A, degenerazione maculare, atrofia geografica e retinopatia diabetica.
            </p>
            <button className="text-cyan-700 font-semibold hover:text-blue-950 transition-colors inline-flex items-center gap-2">
              Leggi il profilo completo &rarr;
            </button>
          </div>
          
          <div id="ricerca" className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
            <h3 className="text-xl font-bold text-blue-950 mb-6">Attività scientifica e ricerca</h3>
            <ul className="space-y-4">
              {["Imaging retinico", "Hyperreflective retinal foci", "Atrofia geografica", "Malattia di von Hippel-Lindau", "Retinopatia diabetica"].map((tema, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                  {tema}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. CONTATTI COMPLIANCE */}
      <section id="contatti" className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">Richiedi informazioni per una visita</h2>
          <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-xl text-sm text-left leading-relaxed">
            <strong>Nota bene:</strong> Non inserire dati clinici sensibili o richieste urgenti nel modulo. In caso di calo visivo improvviso, dolore o sintomi acuti, rivolgersi tempestivamente al Pronto Soccorso oculistico o al proprio medico curante.
          </div>
        </div>

        <form className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
              <input type="text" className="w-full rounded-lg border-stone-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-stone-50 border p-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Cognome</label>
              <input type="text" className="w-full rounded-lg border-stone-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-stone-50 border p-3" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" className="w-full rounded-lg border-stone-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-stone-50 border p-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Telefono</label>
              <input type="tel" className="w-full rounded-lg border-stone-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-stone-50 border p-3" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Motivo generico della richiesta</label>
            <select className="w-full rounded-lg border-stone-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-stone-50 border p-3">
              <option>Prima visita oculistica</option>
              <option>Visita di controllo</option>
              <option>Esame diagnostico (OCT/OCT-A)</option>
              <option>Altro (specificare nel messaggio)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Messaggio</label>
            <textarea rows={4} className="w-full rounded-lg border-stone-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-stone-50 border p-3"></textarea>
          </div>
          
          <div className="flex items-start gap-3">
            <input type="checkbox" id="privacy" className="mt-1 rounded border-stone-300 text-cyan-600 focus:ring-cyan-600" />
            <label htmlFor="privacy" className="text-sm text-slate-600">
              Dichiaro di aver letto l'informativa privacy e acconsento al trattamento dei dati per la gestione della richiesta.
            </label>
          </div>

          <button type="button" className="w-full bg-blue-950 text-white font-medium py-4 rounded-xl hover:bg-blue-900 transition shadow-md">
            Invia richiesta
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 py-12 text-center text-stone-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Dott. Federico Parolini - Medico Chirurgo Specializzando in Oftalmologia.</p>
        <p className="mt-2">Iscrizione Ordine dei Medici Chirurghi • P.IVA / CF</p>
      </footer>

    </main>
  );
}