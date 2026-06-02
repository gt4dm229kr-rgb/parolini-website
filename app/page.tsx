import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen font-sans antialiased text-slate-700 bg-stone-50/60 selection:bg-cyan-800 selection:text-white">
      
      {/* 1. HEADER FISSO E ISTITUZIONALE */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200/80 h-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-blue-950 tracking-tight">Dott. Federico Parolini</span>
            <span className="text-xs text-cyan-700 font-semibold uppercase tracking-wider mt-0.5">Medico Chirurgo | Oftalmologia</span>
          </div>
          <nav className="hidden lg:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#profilo" className="hover:text-cyan-700 transition-colors">Profilo Professionale</a>
            <a href="#percorso" className="hover:text-cyan-700 transition-colors">Il mio percorso</a>
            <a href="#interessi-clinici" className="hover:text-cyan-700 transition-colors">Aree di Interesse</a>
            <a href="#ricerca-scientifica" className="hover:text-cyan-700 transition-colors">Ricerca Scientifica</a>
            <a href="#contatti" className="hover:text-cyan-700 transition-colors">Contatti</a>
          </nav>
          <a href="#contatti" className="inline-flex bg-blue-950 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-cyan-800 transition-all shadow-sm">
            Richiedi informazioni
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 leading-tight tracking-tight">
              Oculistica clinica e <br />
              <span className="text-cyan-700">retina medica a Padova</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Valutazioni oculistiche accurate con particolare attenzione a maculopatie, retinopatia diabetica, degenerazione maculare e imaging OCT/OCT-A.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a href="#contatti" className="inline-flex justify-center items-center bg-blue-950 text-white px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-cyan-800 transition shadow-md">
                Richiedi informazioni per una visita
              </a>
              <a href="#profilo" className="inline-flex justify-center items-center bg-white text-blue-950 border border-stone-200 px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-stone-50 transition shadow-sm">
                Scopri il profilo professionale
              </a>
            </div>
            
            {/* Trust Badges Originari */}
            <div className="pt-6 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left text-xs text-slate-500 font-medium">
              <div>• Laurea in Medicina e Chirurgia con lode</div>
              <div>• Formazione specialistica in Oftalmologia, Università di Padova</div>
              <div>• European Board of Ophthalmology Diploma 2026</div>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs aspect-[4/5] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-stone-100">
              <img src="/portrait.jpg" alt="Dott. Federico Parolini" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUOVA SEZIONE: PROFILO PROFESSIONALE (A DUE COLONNE) */}
      <section id="profilo" className="py-24 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* COLONNA SINISTRA: FOTO STRUMENTAZIONE E CARD SOVRAPPOSTA */}
            <div className="lg:col-span-5 space-y-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] lg:aspect-[3/4] bg-stone-900">
                <img 
                  src="OTTICA-BONORA-Ferrara-001-640w.webp" 
                  alt="Strumentazione diagnostica oftalmologica" 
                  className="w-full h-full object-cover opacity-85 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/20 to-transparent"></div>
              </div>
              
              {/* Card Sovrapposta Istituzionale */}
              <div className="bg-stone-50 border border-stone-200 p-6 rounded-xl shadow-md space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-950">Dott. Federico Parolini</h3>
                  <p className="text-sm font-medium text-cyan-700 mt-0.5">Medico Chirurgo</p>
                  <p className="text-xs text-slate-500 mt-1">Formazione specialistica in Oftalmologia, Università di Padova</p>
                </div>
                
                {/* Piccoli Badge Tematici */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-200">
                  {["Retina medica", "OCT / OCT-A", "Imaging multimodale", "Ricerca clinica"].map((badge, bIdx) => (
                    <span key={bIdx} className="bg-white px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-600 border border-stone-200 shadow-2xs">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* COLONNA DESTRA: TITOLO, TESTO VERBATIM E CARDS INTEGRATE DAL CV */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 block">Profilo Clinico e Accademico</span>
                <h2 className="text-3xl font-bold text-blue-950 tracking-tight leading-tight">
                  Un profilo clinico e scientifico orientato alla retina medica e all’imaging diagnostico
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed font-light text-base text-justify">
                <p>
                  Il Dott. Federico Parolini è Medico Chirurgo e svolge la propria formazione specialistica in Oftalmologia presso l’Università di Padova, all’interno dell’Unità Operativa di Oculistica del Dipartimento di Neuroscienze.
                </p>
                <p>
                  La sua attività clinica si sviluppa in ambito ambulatoriale, ospedaliero e di urgenza, con esperienza nella valutazione di pazienti affetti da patologie oculari acute e croniche. Nel percorso quotidiano si occupa di visita oculistica, biomicroscopia alla lampada a fessura, tonometria, valutazione del fundus oculi e interpretazione di esami di imaging retinico.
                </p>
                <p>
                  Un interesse centrale del suo percorso è rappresentato dalla retina medica, con particolare attenzione alla degenerazione maculare legata all’età, all’atrofia geografica, alla retinopatia diabetica, alle patologie vascolari retiniche, alle malattie ereditarie della retina e alla malattia di Von Hippel-Lindau.
                </p>
                <p>
                  La formazione presso l’Università di Padova gli ha permesso di approfondire l’utilizzo dell’imaging multimodale, tra cui OCT, OCT-A e imaging ultra-widefield, strumenti fondamentali per l’inquadramento diagnostico e il follow-up delle principali patologie retiniche.
                </p>
                <p>
                  Accanto all’attività clinica, il Dott. Parolini è coinvolto in progetti di ricerca dedicati sullo studio dei biomarcatori retinici, con particolare interesse per i piccoli foci iper-riflettenti retinici come possibile espressione di attivazione cellulare e neuroinfiammazione nell’atrofia geografica. La sua attività scientifica include pubblicazioni e contributi congressuali nazionali e internazionali nell’ambito della retina medica e dell’imaging oftalmologico.
                </p>
                <p>
                  Il suo approccio alla visita unisce attenzione clinica, interpretazione accurata degli esami diagnostici e comunicazione chiara con il paziente, con l’obiettivo di costruire percorsi di valutazione e monitoraggio personalizzati.
                </p>
              </div>

              {/* Le 3 Sotto-Card Formative/Scientifiche */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-stone-50 border border-stone-200/60 p-5 rounded-xl space-y-2">
                  <h4 className="font-bold text-sm text-blue-950">Formazione universitaria</h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Laurea in Medicina e Chirurgia con lode presso l’Università degli Studi di Brescia e formazione specialistica in Oftalmologia presso l’Università di Padova.
                  </p>
                </div>
                <div className="bg-stone-50 border border-stone-200/60 p-5 rounded-xl space-y-2">
                  <h4 className="font-bold text-sm text-blue-950">Retina medica e imaging</h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Interesse clinico per maculopatie, retinopatia diabetica, atrofia geografica, patologie vascolari retiniche, OCT, OCT-A e imaging multimodale.
                  </p>
                </div>
                <div className="bg-stone-50 border border-stone-200/60 p-5 rounded-xl space-y-2">
                  <h4 className="font-bold text-sm text-blue-950">Ricerca scientifica</h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Attività dedicata allo studio dei biomarcatori retinici e dei foci iper-riflettenti nell’atrofia geografica e nelle patologie degenerative della retina.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SEZIONE: IL MIO PERCORSO (TIMELINE VERTICALE ELEGANTE) */}
      <section id="percorso" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-950 tracking-tight">Tappe della Formazione Clinica</h2>
          <p className="text-sm text-slate-500 font-light mt-2">Sintesi del percorso accademico, ospedaliero e dei corsi specialistici avanzati.</p>
        </div>
        
        <div className="relative border-l border-stone-200 ml-4 md:ml-32 space-y-12">
          {[
            { tag: "2022", title: "Laurea in Medicina e Chirurgia", text: "Conseguimento del titolo con votazione 110/110 e lode presso l’Università degli Studi di Brescia, con annessa partecipazione al programma di eccellenza del Collegio Universitario di Merito L. Lucchini." },
            { tag: "Dal 2022", title: "Formazione specialistica in Oftalmologia", text: "Attività clinica a tempo pieno presso l’Unità Operativa di Oculistica dell'Università di Padova. Gestione dei reparti, degli ambulatori e delle urgenze in regime di guardia e pronta disponibilità." },
            { tag: "Retina medica", title: "Approfondimento diagnostico e clinico", text: "Focus mirato sulla diagnostica retinica avanzata, screening della retinopatia diabetica (sotto la guida del Prof. E. Midena) e monitoraggio delle maculopatie ereditarie e senili (sotto la supervisione della Prof.ssa E. Pilotto)." },
            { tag: "Ricerca", title: "Analisi dei biomarcatori OCT", text: "Studio strutturale e in vivo della microglia residente e dei foci iper-riflettenti retinici come indici di neuroinfiammazione nell'atrofia geografica avanzata." },
            { tag: "Formazione avanzata", title: "Corsi pratici e simulazione microchirurgica", text: "Frequenza della Venice Ophthalmology Summer School (VOSS 2025) e superamento dei corsi avanzati di simulazione Drylab e Wetlab in Microchirurgia Oculare dedicati alla chirurgia vitreoretinica e della cataratta complessa presso la Humanitas University di Milano (2025)." }
          ].map((timeItem, tIdx) => (
            <div key={tIdx} className="relative pl-8 group">
              {/* Nodo temporale */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-cyan-700 bg-white group-hover:bg-cyan-700 transition-colors"></div>
              {/* Etichetta anno/ambito a sinistra su desktop */}
              <div className="md:absolute md:right-[102%] md:top-1 md:w-28 text-left md:text-right font-mono font-bold text-xs text-cyan-700 uppercase tracking-wider mb-1 md:mb-0">
                {timeItem.tag}
              </div>
              <div className="bg-white p-6 rounded-xl border border-stone-200/60 shadow-2xs space-y-1">
                <h3 className="text-lg font-bold text-blue-950">{timeItem.title}</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{timeItem.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SEZIONE: AREE DI INTERESSE CLINICO (GRIGLIA CON IMMAGINI ALTERNATE) */}
      <section id="interessi-clinici" className="py-24 bg-stone-100/50 border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-blue-950 tracking-tight">Ambiti di Approfondimento Clinico</h2>
            <p className="text-sm text-slate-500 font-light mt-2">Attività ambulatoriale quotidiana e diagnostica multimodale d'avanguardia.</p>
          </div>

          <div className="space-y-16">
            {/* Blocco 1: Retina Medica */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-sm aspect-video lg:aspect-4/3">
                <img src="https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=600&q=80" alt="Retina medica" className="w-full h-full object-cover filter saturate-75" />
              </div>
              <div className="lg:col-span-7 space-y-3 lg:pl-6">
                <h3 className="text-2xl font-bold text-blue-950">Retina medica</h3>
                <p className="text-base text-slate-600 font-light leading-relaxed">
                  Valutazione e monitoraggio delle principali patologie della retina, con particolare attenzione a maculopatie, degenerazione maculare, atrofia geografica e patologie vascolari retiniche.
                </p>
              </div>
            </div>

            {/* Blocco 2: Retinopatia Diabetica */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:flex-row-reverse">
              <div className="lg:col-span-5 lg:order-2 rounded-2xl overflow-hidden shadow-sm aspect-video lg:aspect-4/3">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Retinopatia Diabetica Screening" className="w-full h-full object-cover filter saturate-75" />
              </div>
              <div className="lg:col-span-7 lg:order-1 space-y-3 lg:pr-6">
                <h3 className="text-2xl font-bold text-blue-950">Retinopatia diabetica</h3>
                <p className="text-base text-slate-600 font-light leading-relaxed">
                  Interesse specifico per lo screening, la stadiazione e il follow-up della retinopatia diabetica, anche attraverso imaging retinico multimodale.
                </p>
              </div>
            </div>

            {/* Blocco 3: OCT / OCT-A - Utilizzo di blog-image-23-1024x576.webp */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-sm aspect-video lg:aspect-4/3 bg-stone-200">
                <img src="blog-image-23-1024x576.webp" alt="Paziente all'esame della lampada a fessura e diagnostica per immagini" className="w-full h-full object-cover" />
              </div>
              <div className="lg:col-span-7 space-y-3 lg:pl-6">
                <h3 className="text-2xl font-bold text-blue-950">OCT, OCT-A e imaging multimodale</h3>
                <p className="text-base text-slate-600 font-light leading-relaxed">
                  L’imaging retinico permette di analizzare in modo dettagliato la struttura e la vascolarizzazione della retina, supportando diagnosi, monitoraggio e comunicazione del quadro clinico al paziente.
                </p>
              </div>
            </div>

            {/* Blocco 4: Oculistica Generale - Utilizzo di oftalmologia-pediatrica.jpeg in sezione secondaria */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:flex-row-reverse">
              <div className="lg:col-span-5 lg:order-2 rounded-2xl overflow-hidden shadow-sm aspect-video lg:aspect-4/3 bg-stone-200">
                <img src="oftalmologia-pediatrica.jpeg" alt="Valutazione oculistica di screening" className="w-full h-full object-cover object-center filter saturate-90" />
              </div>
              <div className="lg:col-span-7 lg:order-1 space-y-3 lg:pr-6">
                <h3 className="text-2xl font-bold text-blue-950">Valutazione oculistica generale</h3>
                <p className="text-base text-slate-600 font-light leading-relaxed">
                  Visita oculistica, valutazione del segmento anteriore, pressione intraoculare, fundus oculi e inquadramento dei principali sintomi visivi o screening preventivi familiari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEZIONE: RICERCA SCIENTIFICA */}
      <section id="ricerca-scientifica" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 block">Attività Editoriale e Congressuale</span>
            <h2 className="text-3xl font-bold text-blue-950 tracking-tight">Imaging retinico e biomarcatori nelle patologie maculari</h2>
            <div className="w-12 h-0.5 bg-stone-200 mx-auto mt-4"></div>
          </div>

          <div className="text-base text-slate-600 leading-relaxed font-light space-y-4 max-w-3xl mx-auto text-justify">
            <p>
              L’attività scientifica del Dott. Parolini è orientata allo studio dell’imaging retinico e dei biomarcatori OCT nelle patologie degenerative della macula.
            </p>
            <p>
              In particolare, il suo interesse riguarda i piccoli foci iper-riflettenti retinici, possibili indicatori di attivazione microgliale e neuroinfiammazione nell’atrofia geografica. Questo ambito di ricerca si inserisce nello studio delle forme avanzate di degenerazione maculare e nella ricerca di nuovi parametri utili alla caratterizzazione e al monitoraggio della malattia.
            </p>
            <p>
              Le attività scientifiche comprendono pubblicazioni su riviste internazionali e contributi presentati in contesti congressuali nazionali e internazionali (quali *ARVO 2025* ed *EURETINA 2025*).
            </p>
          </div>

          {/* Griglia a 4 Card di Ricerca Specifiche */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {[
              { t: "Atrofia geografica", d: "Studio in vivo delle varianti fenotipiche e dell'evoluzione del danno cellulare." },
              { t: "Hyperreflective retinal foci", d: "Mappatura dei foci iper-riflettenti come indici di attivazione microgliale." },
              { t: "OCT e OCT-A", d: "Estrazione di indici biometrici e vascolari strutturali senza mezzo di contrasto." },
              { t: "Retinopatia diabetica", d: "Analisi precoce del microcircolo capillare e dei biomarcatori infiammatori." }
            ].map((rcCard, rcIdx) => (
              <div key={rcIdx} className="bg-stone-50 border border-stone-200 p-5 rounded-xl space-y-2">
                <h4 className="font-bold text-sm text-blue-950 tracking-tight">{rcCard.t}</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">{rcCard.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SEZIONE CTA INFORMATIVA FINALE */}
      <section className="bg-blue-950 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Pianificazione del monitoraggio diagnostico</h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Per informazioni relative alle modalità di visita o chiarimenti sugli esami di diagnostica retinica eseguiti a Padova, è possibile inoltrare una richiesta tramite il modulo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a href="#contatti" className="bg-cyan-700 text-white font-medium px-6 py-3 rounded-xl text-sm hover:bg-cyan-600 transition shadow-sm">
              Richiedi informazioni per una visita
            </a>
            <a href="#interessi-clinici" className="bg-transparent border border-white/20 text-white font-medium px-6 py-3 rounded-xl text-sm hover:bg-white/10 transition">
              Scopri le aree cliniche
            </a>
          </div>
        </div>
      </section>

      {/* 8. SEZIONE CONTATTI REGOLAMENTARE */}
      <section id="contatti" className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-3xl font-bold text-blue-950">Richiedi informazioni per una visita</h2>
          <div className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-xl text-xs text-left leading-relaxed">
            <strong>Nota informativa di sicurezza:</strong> Non inserire dati clinici sensibili o richieste urgenti nel modulo. In caso di calo visivo improvviso, dolore o sintomi acuti, rivolgersi immediatamente al Pronto Soccorso oculistico o al medico curante.
          </div>
        </div>

        <form className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-xs space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Nome</label>
              <input type="text" required className="w-full rounded-lg border-stone-300 shadow-xs focus:border-cyan-600 focus:ring-cyan-600 bg-stone-50 border p-3 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Cognome</label>
              <input type="text" required className="w-full rounded-lg border-stone-300 shadow-xs focus:border-cyan-600 focus:ring-cyan-600 bg-stone-50 border p-3 text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Email</label>
              <input type="email" required className="w-full rounded-lg border-stone-300 shadow-xs focus:border-cyan-600 focus:ring-cyan-600 bg-stone-50 border p-3 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Telefono</label>
              <input type="tel" required className="w-full rounded-lg border-stone-300 shadow-xs focus:border-cyan-600 focus:ring-cyan-600 bg-stone-50 border p-3 text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Motivo generico della richiesta</label>
            <select className="w-full rounded-lg border-stone-300 shadow-xs focus:border-cyan-600 focus:ring-cyan-600 bg-stone-50 border p-3 text-sm text-slate-700">
              <option>Informazioni su disponibilità visite</option>
              <option>Quesiti generici sulla diagnostica OCT</option>
              <option>Altro motivo informativo</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Messaggio</label>
            <textarea rows={4} required className="w-full rounded-lg border-stone-300 shadow-xs focus:border-cyan-600 focus:ring-cyan-600 bg-stone-50 border p-3 text-sm" placeholder="Scrivi qui la tua richiesta..."></textarea>
          </div>
          
          <div className="flex items-start gap-3">
            <input type="checkbox" id="privacy-check" required className="mt-1 h-4 w-4 rounded border-stone-300 text-cyan-700 focus:ring-cyan-600" />
            <label htmlFor="privacy-check" className="text-xs text-slate-500 leading-relaxed font-light">
              Dichiaro di aver letto l’informativa privacy e acconsento al trattamento dei dati per la gestione della richiesta.
            </label>
          </div>

          <button type="submit" className="w-full bg-blue-950 text-white font-medium py-4 rounded-xl hover:bg-cyan-800 transition tracking-wider text-xs uppercase">
            Invia richiesta informativa
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 py-12 text-center text-stone-400 text-xs border-t border-stone-800">
        <p>&copy; {new Date().getFullYear()} Dott. Federico Parolini - Medico Chirurgo in Formazione Specialistica in Oftalmologia.</p>
        <p className="mt-2 text-stone-500 font-light">Informazione sanitaria trasparente e non promozionale ai sensi della normativa vigente.</p>
      </footer>

    </main>
  );
}