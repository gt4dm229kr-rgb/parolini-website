import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dott. Federico Parolini | Oculistica e Retina Medica a Padova',
  description: 'Medico Chirurgo in Oftalmologia. Valutazioni oculistiche e ricerca scientifica avanzata sulla retina medica a Padova.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#1E252B] font-sans antialiased selection:bg-[#2A524A] selection:text-white">
      
      {/* HEADER EDITORIALE */}
      <header className="fixed top-0 w-full bg-[#FCFBF9]/90 backdrop-blur-md z-50 border-b border-[#EAE5DC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold text-[#0F1A2C] tracking-wide">Dott. Federico Parolini</span>
              <span className="text-[10px] text-[#8C704B] font-semibold uppercase tracking-widest mt-0.5">Medico Chirurgo · Oftalmologia</span>
            </div>
            <nav className="hidden md:flex gap-10 text-xs font-semibold uppercase tracking-wider text-[#5C646C]">
              <a href="#visione" className="hover:text-[#2A524A] transition-colors">Visione</a>
              <a href="#aree" className="hover:text-[#2A524A] transition-colors">Aree Cliniche</a>
              <a href="#profilo" className="hover:text-[#2A524A] transition-colors">Profilo</a>
              <a href="#ricerca" className="hover:text-[#2A524A] transition-colors">Ricerca</a>
            </nav>
            <a href="#contatti" className="hidden md:inline-flex bg-[#0F1A2C] text-[#FCFBF9] px-5 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#2A524A] transition-colors">
              Contatti
            </a>
          </div>
        </div>
      </header>

      <main className="pt-24">
        
        {/* HERO SECTION - TIPOGRAFIA EQUILIBRATA E ICONOGRAFIA RETINICA NATURALE */}
        <section className="py-16 lg:py-24 border-b border-[#EAE5DC]">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold text-[#8C704B] uppercase tracking-widest block">
                Padova · Università degli Studi di Padova
              </span>
              <h1 className="font-serif text-4xl lg:text-5xl font-light text-[#0F1A2C] leading-[1.2] tracking-wide">
                Studio clinico della <br />
                <span className="italic text-[#2A524A]">retina medica</span> e della visione.
              </h1>
              <p className="text-base text-[#5C646C] font-light leading-relaxed max-w-xl">
                Attività medica e di ricerca focalizzata sulle patologie maculari, la retinopatia diabetica e l'interpretazione diagnostica avanzata tramite imaging multimodale (OCT e OCT-A).
              </p>
              <div className="pt-2">
                <a href="#contatti" className="inline-block border-b border-[#0F1A2C] pb-1 text-xs font-bold uppercase tracking-widest text-[#0F1A2C] hover:text-[#2A524A] hover:border-[#2A524A] transition-all">
                  Richiedi informazioni →
                </a>
              </div>
            </div>
            
            {/* Elemento Grafico Scientifico Nativo - Sostituisce la vecchia foto zoomata */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-56 h-56 bg-[#F5F2EB] rounded-full border border-[#EAE5DC] flex items-center justify-center p-6 relative group">
                {/* Minimalist Vector Retina/Lens Diagram */}
                <svg className="w-full h-full text-[#8C704B]/40 stroke-1" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  <circle cx="50" cy="50" r="40" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="25" />
                  <circle cx="50" cy="50" r="8" className="text-[#2A524A]/60" />
                  <line x1="50" y1="0" x2="50" y2="100" />
                  <line x1="0" y1="50" x2="100" y2="50" />
                  <path d="M20,20 Q50,40 80,20" />
                  <path d="M20,80 Q50,60 80,80" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#5C646C] bg-[#FCFBF9] px-2 py-0.5 border border-[#EAE5DC]">Focus Optic</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SEZIONE FILOSOFIA (IL MANIFESTO) */}
        <section id="visione" className="py-16 bg-[#F5F2EB]/40 border-b border-[#EAE5DC]">
          <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
            <span className="text-[10px] font-bold text-[#8C704B] uppercase tracking-widest block">L'Approccio Clinico</span>
            <blockquote className="font-serif text-xl lg:text-2xl italic text-[#0F1A2C] font-light leading-relaxed">
              "L’evoluzione dell’imaging retinico oggi ci permette di osservare alterazioni microscopiche prima invisibili. Il nostro obiettivo è tradurre questo progresso tecnologico in una valutazione clinica chiara, rigorosa e centrata sulle necessità del paziente."
            </blockquote>
          </div>
        </section>

        {/* AREE CLINICHE - COMPATTE, PULITE, SENZA GRIGLIE STRANE */}
        <section id="aree" className="py-20 border-b border-[#EAE5DC]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 border-b border-[#EAE5DC] pb-4">
              <h2 className="font-serif text-2xl font-light text-[#0F1A2C]">Ambiti di approfondimento clinico</h2>
              <p className="text-xs text-[#8C704B] font-semibold uppercase tracking-wider mt-1 md:mt-0">Attività e Valutazioni</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              {[
                { n: "01", t: "Maculopatie e Degenerazione Maculare", d: "Inquadramento e monitoraggio delle patologie a carico della macula, con focus sulle forme iniziali e avanzate (Atrofia Geografica)." },
                { n: "02", t: "Retinopatia Diabetica", d: "Screening e monitoraggio delle alterazioni vascolari retiniche legate alle complicanze del diabete mellito." },
                { n: "03", t: "Imaging Diagnostico Avanzato", d: "Analisi morfologica e strutturale mediante Tomografia a Coerenza Ottica (OCT) e Angiografia-OCT (OCT-A)." },
                { n: "04", t: "Patologie Vascolari della Retina", d: "Diagnostica clinica applicata alle occlusioni venose, arteriose e alle microangiopatie retiniche." },
                { n: "05", t: "Malattie Retiniche Ereditarie", d: "Studio e follow-up clinico-strumentale di distrofie retiniche e condizioni rare (es. malattia di Von Hippel-Lindau)." },
                { n: "06", t: "Valutazione Oculistica Generale", d: "Esame completo della salute oculare, prevenzione e screening dei vizi refrattivi e della pressione intraoculare." }
              ].map((area, idx) => (
                <div key={idx} className="space-y-2 border-l border-[#EAE5DC] pl-4">
                  <span className="block font-mono text-xs text-[#8C704B] font-medium">{area.n}</span>
                  <h3 className="font-serif text-base text-[#0F1A2C] font-medium">{area.t}</h3>
                  <p className="text-xs text-[#5C646C] font-light leading-relaxed">{area.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROFILO PROFESSIONALE - PROPORZIONI CORRETTE E CORNICI DISTINTE */}
        <section id="profilo" className="py-20 bg-[#FAF9F5]">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Foto o Box Grafico contenitivo: ora è piccolo, protetto e non deforma nulla */}
            <div className="lg:col-span-4 space-y-4">
              <div className="w-full max-w-[240px] mx-auto lg:mx-0 aspect-[3/4] bg-[#F5F2EB] border border-[#EAE5DC] p-2 flex items-center justify-center">
                {/* Se usi una foto reale, non verrà MAI zoomata grazie a object-contain e max-w */}
                <div className="w-full h-full border border-[#EAE5DC]/60 flex items-center justify-center bg-white">
                  <svg className="w-12 h-12 text-[#8C704B]/30 stroke-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="font-serif text-lg text-[#0F1A2C]">Dott. Federico Parolini</h3>
                <p className="text-[11px] text-[#8C704B] font-medium uppercase tracking-wider mt-0.5">Medico Chirurgo</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-10">
              <div>
                <span className="text-[10px] font-bold text-[#8C704B] uppercase tracking-widest block mb-1">Biografia Professionale</span>
                <h2 className="font-serif text-2xl font-light text-[#0F1A2C] mb-4">Percorso Accademico e Assistenziale</h2>
                <div className="text-xs text-[#5C646C] font-light space-y-3 leading-relaxed">
                  <p>Laureato in Medicina e Chirurgia con lode presso l’Università degli Studi di Brescia nel 2022, il Dott. Parolini ha focalizzato i suoi interessi clinici sulla gestione della retina medica.</p>
                  <p>Attualmente svolge la sua attività assistenziale e di studio a Padova, approfondendo la gestione delle urgenze oftalmologiche, l’ambulatorio generale e l’interpretazione dell’imaging multimodale retinico a livello universitario e ospedaliero.</p>
                </div>
              </div>

              {/* Cronologia elegante a righe */}
              <div className="border-t border-[#EAE5DC] pt-6 space-y-4">
                {[
                  { y: "2022", t: "Laurea con Lode in Medicina e Chirurgia", d: "Università degli Studi di Brescia. Studio delle patologie del segmento posteriore." },
                  { y: "In corso", t: "Scuola di Specializzazione in Oftalmologia", d: "Università degli Studi di Padova. Attività clinica e diagnostica d'avanguardia." },
                  { y: "Ricerca", t: "Biomarcatori e Neuroinfiammazione", d: "Attività scientifica incentrata sullo studio dei foci iper-riflettenti (HRF) nell'Atrofia Geografica tramite tecnologia di imaging OCT." }
                ].map((item, idx) => (
                  <div key={idx} className="grid sm:grid-cols-12 gap-1 text-xs border-b border-[#EAE5DC]/40 pb-3 last:border-0">
                    <span className="sm:col-span-2 font-serif italic text-[#8C704B] font-medium">{item.y}</span>
                    <div className="sm:col-span-10">
                      <h4 className="font-serif font-medium text-[#0F1A2C]">{item.t}</h4>
                      <p className="text-[11px] text-[#5C646C] font-light mt-0.5">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* RICERCA E PUBBLICAZIONI - STILE RIVISTA ACCADEMICA DI ALTO LIVELLO */}
        <section id="ricerca" className="py-20 border-t border-b border-[#EAE5DC] bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold text-[#8C704B] uppercase tracking-widest">Attività Scientifica</span>
              <h2 className="font-serif text-2xl font-light text-[#0F1A2C]">Contributi e Pubblicazioni Scelte</h2>
              <p className="text-xs text-[#5C646C] font-light">Studio dei biomarcatori retinici applicati alla degenerazione maculare avanzata.</p>
            </div>

            <div className="divide-y divide-[#EAE5DC]">
              {[
                { t: "Small Hyperreflective Retinal Foci as in vivo imaging feature of resident microglia activation in geographic atrophy", j: "Experimental Eye Research, 2024", tag: "Atrofia Geografica" },
                { t: "Microperimetry Sensitivity Correlates to Structural Macular Changes in Adolescents with Achromatopsia", j: "Journal of Clinical Medicine, 2024", tag: "Microperimetria" },
                { t: "Small Hyperreflective Retinal Foci distribution in Inner and Outer Retina differs in different Geographic Atrophy Phenotypes", j: "EURETINA Congress, 2025", tag: "Abstract" },
                { t: "Small Hyperreflective Retinal Foci as in vivo imaging feature of resident microglia activation in different geographic atrophy phenotypes", j: "ARVO Annual Meeting, 2025", tag: "Abstract" },
                { t: "Inflammatory Hyperreflective Retinal Foci: An OCT Biomarker of Neuroinflammation in Geographic Atrophy", j: "Journal of Clinical Medicine, 2026", tag: "Articolo" }
              ].map((pub, idx) => (
                <div key={idx} className="py-5 first:pt-0 last:pb-0 grid sm:grid-cols-12 gap-2 items-baseline">
                  <div className="sm:col-span-10 space-y-0.5">
                    <h4 className="font-serif text-sm md:text-base text-[#0F1A2C] font-light leading-snug tracking-wide">{pub.t}</h4>
                    <p className="text-[11px] text-[#8C704B] italic font-light">{pub.j}</p>
                  </div>
                  <div className="sm:col-span-2 sm:text-right">
                    <span className="inline-block text-[8px] font-bold text-[#5C646C] uppercase tracking-widest bg-[#F5F2EB] px-2 py-0.5 border border-[#EAE5DC]">
                      {pub.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NOTA DI SICUREZZA */}
        <section className="py-12 bg-[#F5F2EB]/20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="border-l border-[#8C704B] pl-4 py-1">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#8C704B] mb-1">Nota informativa di sicurezza</h4>
              <p className="text-[11px] text-[#5C646C] font-light leading-relaxed">
                In presenza di sintomi acuti o improvvisi quali improvviso calo della vista, distorsione significativa delle immagini (metamorfopsie), comparsa di una macchia scura fissa al centro del campo visivo o lampi di luce ripetuti, è fondamentale rivolgersi immediatamente a un servizio ospedaliero di Pronto Soccorso Oculistico.
              </p>
            </div>
          </div>
        </section>

        {/* CONTATTI - ESSENZIALE, MASSIMO CONTRASTO */}
        <section id="contatti" className="py-20 bg-[#0F1A2C] text-[#FAF9F5]">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-12">
            
            <div className="md:col-span-5 space-y-4">
              <span className="text-xs font-bold text-[#8C704B] uppercase tracking-widest block">Comunicazioni</span>
              <h2 className="font-serif text-2xl font-light tracking-wide text-white">Richiesta Informazioni</h2>
              <p className="text-xs text-[#A1AAB3] font-light leading-relaxed">
                Per richieste informative di carattere generale, collaborazioni scientifiche o chiarimenti sulle disponibilità a Padova, è possibile compilare lo spazio a fianco.
              </p>
              <div className="text-[11px] text-[#A1AAB3] space-y-1 pt-4 font-light border-t border-[#2A3542]">
                <p>Ufficio: Padova, Italia</p>
                <p>Email professionale in fase di aggiornamento organizzativo</p>
              </div>
            </div>

            <div className="md:col-span-7">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-b border-[#2A3542] pb-1">
                    <label className="block text-[9px] font-bold text-[#8C704B] uppercase tracking-wider mb-0.5">Nome</label>
                    <input type="text" className="w-full bg-transparent text-white text-xs focus:outline-none focus:border-[#8C704B] font-light" />
                  </div>
                  <div className="border-b border-[#2A3542] pb-1">
                    <label className="block text-[9px] font-bold text-[#8C704B] uppercase tracking-wider mb-0.5">Cognome</label>
                    <input type="text" className="w-full bg-transparent text-white text-xs focus:outline-none focus:border-[#8C704B] font-light" />
                  </div>
                </div>
                <div className="border-b border-[#2A3542] pb-1">
                  <label className="block text-[9px] font-bold text-[#8C704B] uppercase tracking-wider mb-0.5">Email di contatto</label>
                  <input type="email" className="w-full bg-transparent text-white text-xs focus:outline-none focus:border-[#8C704B] font-light" />
                </div>
                <div className="border-b border-[#2A3542] pb-1">
                  <label className="block text-[9px] font-bold text-[#8C704B] uppercase tracking-wider mb-0.5">Messaggio (Escludere dati sensibili sanitari)</label>
                  <textarea rows={2} className="w-full bg-transparent text-white text-xs focus:outline-none focus:border-[#8C704B] font-light resize-none"></textarea>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="privacy" className="mt-0.5 accent-[#8C704B]" required />
                  <label htmlFor="privacy" className="text-[9px] text-[#A1AAB3] leading-tight font-light">
                    Acconsento al trattamento dei dati esclusivamente per la gestione della presente richiesta informativa.
                  </label>
                </div>
                <button type="submit" className="w-full bg-[#FAF9F5] text-[#0F1A2C] font-semibold text-xs uppercase tracking-widest py-2.5 hover:bg-[#8C704B] hover:text-white transition-colors">
                  Invia Messaggio
                </button>
              </form>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#09111C] text-[#A1AAB3] py-10 border-t border-[#182433]">
        <div className="max-w-6xl mx-auto px-6 text-center md:text-left md:flex md:justify-between items-center text-[10px] font-light tracking-wide space-y-3 md:space-y-0">
          <div>
            <p className="font-serif text-xs text-white font-medium mb-0.5">Dott. Federico Parolini</p>
            <p className="text-[#64707D]">Medico Chirurgo · Attività clinica e di ricerca in Oftalmologia</p>
          </div>
          <p className="text-[#64707D] max-w-md md:text-right leading-relaxed">
            Le informazioni contenute in questo portale hanno scopo esclusivamente informativo e divulgativo scientifico. <br />
            © {new Date().getFullYear()} Dott. Federico Parolini. Tutti i diritti riservati.
          </p>
        </div>
      </footer>

    </div>
  );
}