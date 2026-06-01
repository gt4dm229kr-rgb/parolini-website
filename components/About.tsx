export default function About() {
  return (
    <section id="profilo" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Profilo Medico</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Il <strong>Dott. Federico Parolini</strong> ha conseguito la Laurea in Medicina e Chirurgia con 110/110 e Lode presso l'Università di Brescia. Attualmente svolge la propria formazione specialistica come <em>Ophthalmology resident physician</em> presso l'Unità Operativa di Oculistica, Dipartimento di Neuroscienze, dell'Università di Padova.
              </p>
              <p>
                Nel 2026 ha conseguito con successo l'esame <strong>European Board of Ophthalmology (EBO) Diploma</strong>.
              </p>
              <p>
                La sua attività clinica spazia dalla gestione ambulatoriale e dei reparti, alla valutazione delle urgenze oftalmologiche. Nutre un interesse specifico per la <strong>retina medica</strong> e l'imaging multimodale avanzato (OCT, OCT-A, ultra-widefield imaging), focalizzandosi su degenerazione maculare legata all'età, atrofia geografica, retinopatia diabetica e patologie retiniche ereditarie.
              </p>
              <blockquote className="pl-4 border-l-4 border-teal-600 italic text-slate-800 my-6 bg-slate-50 py-3 pr-4 rounded-r-lg">
                "Il mio obiettivo è offrire una valutazione oculistica accurata, chiara e basata sulle evidenze, aiutando il paziente a comprendere la propria condizione e il percorso diagnostico-terapeutico più adeguato."
              </blockquote>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
               <h4 className="font-bold text-slate-900 mb-2">Competenze Cliniche</h4>
               <ul className="text-sm text-slate-600 space-y-2">
                 <li>• Esame del fondo oculare</li>
                 <li>• Imaging Multimodale</li>
                 <li>• OCT e OCT-A</li>
                 <li>• Terapie intravitreali (training)</li>
                 <li>• Laser retinici (training)</li>
               </ul>
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
               <h4 className="font-bold text-slate-900 mb-2">Aree di Ricerca</h4>
               <ul className="text-sm text-slate-600 space-y-2">
                 <li>• Atrofia geografica</li>
                 <li>• Biomarcatori OCT (HRF)</li>
                 <li>• Neuroinfiammazione</li>
                 <li>• Malattia di VHL</li>
               </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}