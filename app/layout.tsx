'use client';
import { useState } from 'react';
import { personalInfo } from '@/data/content';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logica di integrazione form (es. Formspree, EmailJS)
  };

  return (
    <section id="contatti" className="py-20 bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Prenota una visita</h2>
            <p className="mb-8">
              Compila il modulo per richiedere informazioni o prenotare una visita presso gli ambulatori in {personalInfo.location}.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-teal-400">
                  {/* Icona Mail */} @
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white font-medium">{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-teal-400">
                  {/* Icona Tel */} ✆
                </div>
                <div>
                  <p className="text-sm text-slate-400">Telefono Segreteria</p>
                  <p className="text-white font-medium">{personalInfo.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-red-900/20 border border-red-900/50 rounded-lg text-sm text-red-200">
              <strong>Nota importante:</strong> Non inviare dati sanitari urgenti tramite questo modulo. In caso di sintomi gravi, improvviso calo della vista o dolore acuto, rivolgersi immediatamente al Pronto Soccorso più vicino.
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-slate-800">
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-teal-600 mb-2">Richiesta Inviata</h3>
                <p className="text-slate-600">Sarai ricontattato al più presto per confermare l'appuntamento.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nome</label>
                    <input required type="text" className="w-full p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Cognome</label>
                    <input required type="text" className="w-full p-2 border rounded-md" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input required type="email" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Motivo della visita</label>
                  <select className="w-full p-2 border rounded-md bg-white">
                    <option>Prima visita oculistica</option>
                    <option>Visita di controllo</option>
                    <option>Controllo Retina / Maculopatia</option>
                    <option>Altro</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" /> Hai già esami OCT o referti recenti?
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Messaggio</label>
                  <textarea rows={3} className="w-full p-2 border rounded-md"></textarea>
                </div>
                <div className="text-xs text-slate-500">
                  <label className="flex items-start gap-2">
                    <input required type="checkbox" className="mt-1" />
                    Acconsento al trattamento dei dati personali secondo la normativa GDPR per la gestione della richiesta.
                  </label>
                </div>
                <button type="submit" className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 rounded-lg transition-colors">
                  Invia Richiesta
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
